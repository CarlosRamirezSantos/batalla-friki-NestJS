import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateBattleDto {
  @IsNumber({}, { message: 'El ID del personaje debe ser un número' })
  @IsNotEmpty({ message: 'El ID del personaje es obligatorio' })
  characterId: number;
}