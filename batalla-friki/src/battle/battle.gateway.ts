import { WebSocketGateway, WebSocketServer, ConnectedSocket, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { BattleService } from './battle.service';

@WebSocketGateway({ cors: { origin: '*', methods: ['GET', 'POST'] } })
@Injectable()
export class BattleGateway {
  @WebSocketServer() io: Server;

  constructor(private readonly battleService: BattleService) {}

  @SubscribeMessage('get-battles')
  async handleGetBattles() {
    try {
      const battles = await this.battleService.findAllWaiting();
      return { status: 'ok', data: battles };
    } catch (error) {
      return { status: 'error', msg: error.message };
    }
  }

  @SubscribeMessage('create-battle')
  async handleCreateBattle(
    @MessageBody() payload: { userId: number, characterId: number }, 
    @ConnectedSocket() client: Socket
  ) {
    try {
      const battle = await this.battleService.createBattle(payload.userId, payload.characterId);
      const socketRoom = battle.id.toString();
      await client.join(socketRoom);

      this.io.emit('lobby-update'); 
      return { status: 'ok', battleId: battle.id };
    } catch (error) {
      return { status: 'error', msg: error.message };
    }
  }

  @SubscribeMessage('create-pve-battle')
  async handleCreatePveBattle(
    @MessageBody() payload: { userId: number, characterId: number },
    @ConnectedSocket() client: Socket
  ) {
    try {
      const battle = await this.battleService.createPveBattle(payload.userId, payload.characterId);
      const socketRoom = battle.id.toString();
      await client.join(socketRoom);

      client.emit('attack-result', { 
        message: `📢 Batalla PVE iniciada contra ${battle.player2Char.name}. ¡Prepárate!`,
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

      return { status: 'ok', battleId: battle.id };
    } catch (error) {
      return { status: 'error', msg: error.message };
    }
  }

  @SubscribeMessage('join-battle')
  async handleJoinBattle(
    @MessageBody() payload: { battleId: number, userId: number, characterId: number }, 
    @ConnectedSocket() client: Socket
  ) {
    try {
      const battle = await this.battleService.joinBattle(payload.battleId, payload.userId, payload.characterId);
      const socketRoom = battle.id.toString();
      await client.join(socketRoom);

      this.io.to(socketRoom).emit('attack-result', { 
        message: `📢 ¡Oponente encontrado! Empieza el duelo: ${battle.player1.name} vs ${battle.player2?.name}`,
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

      this.io.emit('lobby-update');
      return { status: 'ok', battleId: battle.id };
    } catch (error) {
      return { status: 'error', msg: error.message };
    }
  }

  @SubscribeMessage('attack-match')
  async handleAttackMatch(@MessageBody() payload: { battleId: number, userId: number }) {
    try {
      const res = await this.battleService.processAttack(payload.battleId, payload.userId);
      this.io.to(payload.battleId.toString()).emit('attack-result', res);
      return { status: 'ok' };
    } catch (error) {
      return { status: 'error', msg: error.message };
    }
  }
}
