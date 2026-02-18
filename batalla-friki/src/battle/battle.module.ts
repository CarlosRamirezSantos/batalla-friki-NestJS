import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleGateway } from './battle.gateway';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BattleService, BattleGateway],
})
export class BattleModule {}