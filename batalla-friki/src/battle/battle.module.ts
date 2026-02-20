import { Module } from '@nestjs/common';
import { BattleService } from './battle.service';
import { BattleGateway } from './battle.gateway';
import { BattleController } from './battle.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [BattleService, BattleGateway],
  controllers: [BattleController], 
})
export class BattleModule {}