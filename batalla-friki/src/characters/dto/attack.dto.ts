import { IsInt, IsNotEmpty } from 'class-validator';

export class AttackDto {
  @IsInt()
  @IsNotEmpty()
  attackerId: number;

  @IsInt()
  @IsNotEmpty()
  targetId: number;
}