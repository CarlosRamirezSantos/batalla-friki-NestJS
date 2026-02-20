import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    
    return this.prisma.user.create({
      data: { ...data, password: hashedPassword },
      select: { id: true, name: true, email: true } 
    });
  }


  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, level: true, xp: true, wins: true, losses: true }
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, level: true, xp: true, wins: true, losses: true }
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async update(id: number, data: any) {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return this.prisma.user.update({
      where: { id },
      data,
      select: { id: true, name: true, email: true }
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async getRanking(limit = 10) {
    const safeLimit = Math.min(Math.max(limit, 1), 100);

    const users = await this.prisma.user.findMany({
      take: safeLimit,
      orderBy: [{ wins: 'desc' }, { losses: 'asc' }, { xp: 'desc' }],
      select: {
        id: true,
        name: true, 
        email: true,
        wins: true,
        losses: true,
        xp: true,
        level: true,
      },
    });

    return {
      status: 'ok',
      data: users.map((user, index) => ({
        rank: index + 1,
        ...user,
      }))
    };
  }
}