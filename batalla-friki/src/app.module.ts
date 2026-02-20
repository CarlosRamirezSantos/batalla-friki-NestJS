import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CharactersModule } from './characters/characters.module';
import { BattleService } from './battle/battle.service';
import { BattleModule } from './battle/battle.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
              isGlobal: true,
           }), CharactersModule, BattleModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
