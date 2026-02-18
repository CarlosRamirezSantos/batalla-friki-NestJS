import { IsString, IsNumber, Min, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateCharacterDto {
  @IsString({ message: 'El nombre debe ser un texto' })
  @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(30, { message: 'El nombre es demasiado largo (máximo 30)' })
  name: string;

  @IsNumber()
  @Min(1, { message: 'La vida (HP) debe ser al menos 1' })
  hp: number;

  @IsNumber()
  @Min(0, { message: 'El ataque no puede ser negativo' })
  attack: number;

  @IsNumber()
  @Min(1, { message: 'El nivel mínimo de desbloqueo es 1' })
  level: number;
}