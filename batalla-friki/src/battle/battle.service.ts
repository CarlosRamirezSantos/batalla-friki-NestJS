import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

interface UserStatsUpdate {
  xp: number;
  level: number;
  wins: number;
  losses: number;
}

const battleSelect = {
  id: true,
  status: true,
  player1CurrentHp: true,
  player2CurrentHp: true,
  player1Id: true,
  player2Id: true, 
  turnUserId: true,
  player1: { select: { id: true, name: true, xp: true, level: true, wins: true, losses: true } },
  player2: { select: { id: true, name: true, xp: true, level: true, wins: true, losses: true } },
  player1Char: { select: { id: true, name: true, attack: true, hp: true, level: true } },
  player2Char: { select: { id: true, name: true, attack: true, hp: true, level: true } },
} as const;

@Injectable()
export class BattleService {
  constructor(private prisma: PrismaService) {}

  async findAllWaiting() {
    return this.prisma.battle.findMany({
      where: { status: 'WAITING' },
      select: battleSelect,
      orderBy: { createdAt: 'desc' },
    });
  }

  async createBattle(userId: number, characterId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const character = await this.prisma.character.findUnique({ where: { id: characterId } });

    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (!character) throw new NotFoundException('Personaje no encontrado');

    if (user.level < character.level) {
      throw new BadRequestException(`Necesitas nivel ${character.level} para desbloquear a ${character.name}`);
    }

    const existingRoom = await this.prisma.battle.findFirst({
        where: { player1Id: userId, status: 'WAITING' }
    });
    if (existingRoom) throw new BadRequestException('Ya tienes una sala abierta');

    return this.prisma.battle.create({
      data: {
        player1Id: userId,
        player1CharId: characterId,
        player1CurrentHp: character.hp,
        status: 'WAITING',
      },
      select: battleSelect,
    });
  }

  async createPveBattle(userId: number, characterId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const myChar = await this.prisma.character.findUnique({ where: { id: characterId } });
    
    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (!myChar) throw new NotFoundException('Tu personaje no existe');

    if (user.level < myChar.level) {
      throw new BadRequestException(`Necesitas nivel ${myChar.level} para usar a ${myChar.name}`);
    }

    const allCharacters = await this.prisma.character.findMany();
    if (allCharacters.length === 0) throw new NotFoundException('No hay personajes disponibles');
    
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    const machineChar = allCharacters[randomIndex];

    return this.prisma.battle.create({
      data: {
        player1Id: userId,
        player1CharId: characterId,
        player1CurrentHp: myChar.hp,
        player2Id: null, 
        player2CharId: machineChar.id,
        player2CurrentHp: machineChar.hp,
        status: 'FIGHTING',
        turnUserId: userId,
      },
      select: battleSelect,
    });
  }

  async joinBattle(battleId: number, userId: number, characterId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    const character = await this.prisma.character.findUnique({ where: { id: characterId } });

    if (!user) throw new NotFoundException('Usuario no encontrado');
    if (!character) throw new NotFoundException('Personaje no encontrado');

    if (user.level < character.level) {
      throw new BadRequestException(`Necesitas nivel ${character.level} para usar a ${character.name}`);
    }

    const battle = await this.prisma.battle.findUnique({ where: { id: battleId } });
    if (!battle) throw new NotFoundException('La sala ya no existe');
    if (battle.status !== 'WAITING') throw new BadRequestException('Sala ocupada');
    if (battle.player1Id === userId) throw new BadRequestException('No puedes unirte a tu propia sala');

    return this.prisma.battle.update({
      where: { id: battleId },
      data: {
        player2Id: userId,
        player2CharId: characterId,
        player2CurrentHp: character.hp,
        status: 'FIGHTING',
        turnUserId: battle.player1Id,
      },
      select: battleSelect,
    });
  }

  async processAttack(battleId: number, attackerUserId: number) {
    const battle = await this.prisma.battle.findUnique({
      where: { id: battleId },
      include: { player1Char: true, player2Char: true, player1: true, player2: true },
    });

    if (!battle || battle.status !== 'FIGHTING') throw new BadRequestException('Batalla no activa');
    if (battle.turnUserId !== attackerUserId) throw new BadRequestException('No es tu turno');

    const isP1 = battle.player1Id === attackerUserId;
    const isPve = battle.player2Id === null;
    
    let p1Hp = battle.player1CurrentHp;
    let p2Hp = battle.player2CurrentHp || 0;
    
    const dmg = isP1 ? battle.player1Char.attack : (battle.player2Char?.attack || 0);
    if (isP1) p2Hp = Math.max(0, p2Hp - dmg);
    else p1Hp = Math.max(0, p1Hp - dmg);

    let logMsg = `¡${isP1 ? 'Atacas' : 'El oponente ataca'}! Daño: ${dmg}`;

    if (isPve && p2Hp > 0 && p1Hp > 0) {
      const mDmg = battle.player2Char.attack;
      p1Hp = Math.max(0, p1Hp - mDmg);
      logMsg += ` | Contraataque de ${battle.player2Char.name}: ${mDmg}`;
    }

    const ko = p1Hp <= 0 || p2Hp <= 0;
    const winnerId = ko ? (p1Hp > 0 ? battle.player1Id : (battle.player2Id || 0)) : null;

    return await this.prisma.$transaction(async (tx) => {
      const nextTurnId = ko ? null : (isPve ? battle.player1Id : (isP1 ? battle.player2Id : battle.player1Id));

      await tx.battle.update({
        where: { id: battleId },
        data: {
          player1CurrentHp: p1Hp,
          player2CurrentHp: p2Hp,
          status: ko ? 'FINISHED' : 'FIGHTING',
          turnUserId: nextTurnId,
          winnerId: winnerId && winnerId > 0 ? winnerId : undefined,
        }
      });

      let userStats: UserStatsUpdate | null = null;
      let userStatsUserId: number | null = null;

      if (ko) {
        if (winnerId === battle.player1Id) {
          await this.applyRewards(tx, battle.player1Id, battle.player2Id || 0);
        } 
        else if (winnerId && winnerId === battle.player2Id) {
          await this.applyRewards(tx, battle.player2Id, battle.player1Id);
        }
        else if (isPve && p1Hp <= 0) {
          await this.applyRewards(tx, 0, battle.player1Id);
        }

        const updatedUser = await tx.user.findUnique({ where: { id: attackerUserId } });
        if (updatedUser) {
          userStatsUserId = updatedUser.id;
          userStats = {
            xp: updatedUser.xp,
            level: updatedUser.level,
            wins: updatedUser.wins,
            losses: updatedUser.losses
          };
        }
      }

      return {
        message: logMsg,
        ko,
        player1Hp: p1Hp,
        player2Hp: p2Hp,
        player1MaxHp: battle.player1Char.hp,
        player2MaxHp: battle.player2Char?.hp || 0,
        nextTurnUserId: nextTurnId,
        userStatsUserId,
        userStats 
      };
    });
  }

  private async applyRewards(tx: any, winnerId: number, loserId: number) {
    if (winnerId > 0) {
      const winner = await tx.user.findUnique({ where: { id: winnerId } });
      
      let newXp = (winner.xp || 0) + 10;
      let newLevel = winner.level || 1;
      
      const XP_PER_LEVEL = 100;

      if (newXp >= XP_PER_LEVEL) {
        newLevel += 1;
        newXp = newXp - XP_PER_LEVEL;
      }

      await tx.user.update({
        where: { id: winnerId },
        data: { 
          wins: { increment: 1 }, 
          xp: newXp, 
          level: newLevel 
        }
      });
    }

    if (loserId > 0) {
      await tx.user.update({
        where: { id: loserId },
        data: { losses: { increment: 1 } }
      });
    }
  }

  async getWaitingBattles() {
    const battles = await this.prisma.battle.findMany({
      where: { 
        status: 'WAITING', 
        mode: 'PVP' 
      },
      select: {
        id: true,
        initiatorUser: { select: { name: true } } 
      }
    });
    return { status: 'ok', data: battles };
  }
}
