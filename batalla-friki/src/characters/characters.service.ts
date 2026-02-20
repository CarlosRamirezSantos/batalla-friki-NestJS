import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}
  async create(data: { name: string; hp: number; attack: number; level: number }) {
    return this.prisma.character.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.character.findMany({
      orderBy: { level: 'asc' }
    });
  }

  async findOne(id: number) {
    const character = await this.prisma.character.findUnique({ where: { id } });
    if (!character) throw new NotFoundException(`Personaje con ID ${id} no encontrado`);
    return character;
  }

  async update(id: number, data: { name?: string; hp?: number; attack?: number; level?: number }) {
    await this.findOne(id);
    
    return this.prisma.character.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.character.delete({
      where: { id },
    });
  }


  async attack(attackerId: number, targetId: number) {
    const attacker = await this.prisma.character.findUnique({ where: { id: attackerId } });
    const target = await this.prisma.character.findUnique({ where: { id: targetId } });

    if (!attacker || !target) {
      throw new NotFoundException('Attacker or victim not found in the database');
    }

    if (attacker.hp <= 0) {
      throw new BadRequestException(`${attacker.name} is weakened and cannot attack`);
    }

    if (target.hp <= 0) {
      throw new BadRequestException(`${target.name} is already weakened, leave them alone!`);
    }

    const newHp = Math.max(0, target.hp - attacker.attack);

    const updatedTarget = await this.prisma.character.update({
      where: { id: targetId },
      data: { hp: newHp },
    });

    return {
      message: `${attacker.name} attacked ${target.name}, dealing ${attacker.attack} damage.`,
      targetStatus: updatedTarget,
    };
  }

  async reset() {
    await this.prisma.character.updateMany({
        data: { hp: 100 }
    });

    return { message: 'Todos los personajes han sido restaurados a su vida máxima estándar.' };
  }
}
