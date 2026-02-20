import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleGateway } from './battle.gateway';
import { JwtAuthGuard } from '../auth/jwt_strategy/jwt-auth.guard';
import { CreateBattleDto } from './dto/create-battle.dto';
import { JoinBattleDto } from './dto/join-battle.dto';
import { AttackBattleDto } from './dto/attack-battle.dto';

@Controller('battles')
export class BattleController {
  constructor(
    private readonly battleService: BattleService,
    private readonly battleGateway: BattleGateway
  ) {}

  @Get()
  async getWaitingBattles() {
    const data = await this.battleService.findAllWaiting();
    return { status: 'ok', data };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createBattle(@Body() body: CreateBattleDto, @Req() req) {
    const battle = await this.battleService.createBattle(req.user.id, body.characterId);
    this.battleGateway.io.emit('lobby-update'); 
    return { status: 'ok', battleId: battle.id };
  }

  @UseGuards(JwtAuthGuard)
  @Post('create-pve')
  async createPveBattle(@Body() body: CreateBattleDto, @Req() req) {
    const battle = await this.battleService.createPveBattle(req.user.id, body.characterId);
    
    setTimeout(() => {
        this.battleGateway.io.to(battle.id.toString()).emit('attack-result', { 
            message: `Batalla PVE iniciada contra ${battle.player2Char.name}. ¡Prepárate!`,
            player1Hp: battle.player1Char.hp,
            player2Hp: battle.player2Char?.hp,
            player1MaxHp: battle.player1Char.hp,
            player2MaxHp: battle.player2Char?.hp,
            nextTurnUserId: battle.turnUserId,
            p1Name: battle.player1.name,
            p1CharName: battle.player1Char.name,
            p2Name: 'Machine',
            p2CharName: battle.player2Char.name
        });
    }, 300);

    return { status: 'ok', battleId: battle.id };
  }

  @UseGuards(JwtAuthGuard)
  @Post('join')
  async joinBattle(@Body() body: JoinBattleDto, @Req() req) {
    const battle = await this.battleService.joinBattle(body.battleId, req.user.id, body.characterId);
    this.battleGateway.io.emit('lobby-update');

    setTimeout(() => {
        this.battleGateway.io.to(battle.id.toString()).emit('attack-result', { 
          message: `¡Oponente encontrado! Empieza el duelo: ${battle.player1.name} vs ${battle.player2?.name}`,
          player1Hp: battle.player1CurrentHp,
          player2Hp: battle.player2CurrentHp,
          player1MaxHp: battle.player1Char.hp,
          player2MaxHp: battle.player2Char?.hp,
          nextTurnUserId: battle.turnUserId,
          p1Name: battle.player1.name,
          p1CharName: battle.player1Char.name,
          p2Name: battle.player2?.name,
          p2CharName: battle.player2Char?.name
        });
    }, 300);

    return { status: 'ok', battleId: battle.id };
  }

  @UseGuards(JwtAuthGuard)
  @Post('attack')
  async attack(@Body() body: AttackBattleDto, @Req() req) {
    const res = await this.battleService.processAttack(body.battleId, req.user.id);
    this.battleGateway.io.to(body.battleId.toString()).emit('attack-result', res);
    return { status: 'ok' };
  }
}
