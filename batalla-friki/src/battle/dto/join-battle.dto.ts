import { IsNumber, IsNotEmpty } from 'class-validator';

export class JoinBattleDto {
  @IsNumber({}, { message: 'El ID de la batalla debe ser un número' })
  @IsNotEmpty({ message: 'El ID de la batalla es obligatorio' })
  battleId: number;

  @IsNumber({}, { message: 'El ID del personaje debe ser un número' })
  @IsNotEmpty({ message: 'El ID del personaje es obligatorio' })
  characterId: number;
}