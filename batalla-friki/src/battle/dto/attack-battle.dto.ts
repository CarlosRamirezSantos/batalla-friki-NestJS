import { IsNumber, IsNotEmpty } from 'class-validator';

export class AttackBattleDto {
  @IsNumber({}, { message: 'El ID de la batalla debe ser un número' })
  @IsNotEmpty({ message: 'El ID de la batalla es obligatorio' })
  battleId: number;
}