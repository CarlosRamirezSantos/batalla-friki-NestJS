import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
  ],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
