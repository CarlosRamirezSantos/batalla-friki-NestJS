import { WebSocketGateway, WebSocketServer, ConnectedSocket, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@WebSocketGateway({ cors: { origin: '*', methods: ['GET', 'POST'] } })
@Injectable()
export class BattleGateway {
  @WebSocketServer() io: Server;

  @SubscribeMessage('join-room')
  handleJoinRoom(@MessageBody() roomId: string, @ConnectedSocket() client: Socket) {
    client.join(roomId);
  }
}