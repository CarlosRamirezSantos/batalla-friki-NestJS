import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  ParseIntPipe, 
  UseGuards 
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { AttackDto } from './dto/attack.dto';
import { JwtAuthGuard } from '../auth/jwt_strategy/jwt-auth.guard';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Roles } from '../auth/roles/roles.decorator';
import {RoleName} from '../auth/roles/roles.enum';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.charactersService.findOne(id);
  }

  @Post('attack')
  attack(@Body() attackDto: AttackDto) {
    return this.charactersService.attack(attackDto.attackerId, attackDto.targetId);
  }

@Post()
@Roles(RoleName.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
create(@Body() createDto: CreateCharacterDto) {
  return this.charactersService.create(createDto);
}

@Patch(':id')
@Roles(RoleName.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
update(
  @Param('id', ParseIntPipe) id: number, 
  @Body() updateDto: UpdateCharacterDto
) {
  return this.charactersService.update(id, updateDto);
}
  @Delete(':id')
  @Roles(RoleName.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.charactersService.remove(id);
  }

  @Post('reset')
  @Roles(RoleName.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  reset() {
    return this.charactersService.reset();
  }
}
