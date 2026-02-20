import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from '../../generated/prisma/client'; 
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

type UserFromDb = Prisma.UserGetPayload<{
  include: { roles: true }
}>;

type SafeUserWithRoles = Omit<UserFromDb, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already registered');
    }

    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: registerDto.email,
        name: registerDto.name,
        password: hashedPassword,
        roles: {
          connect: { name: 'USER' }
        }
      },
      include: { roles: true }
    });

    const { password, ...safeUser } = user;
    return this.buildAuthResponse(safeUser, 'Registration completed successfully');
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    return this.buildAuthResponse(user, 'Login successful');
  }

  private async validateUser(email: string, password: string): Promise<SafeUserWithRoles> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { roles: true } 
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales no válidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales no válidas');
    }

    const { password: _, ...safeUser } = user;
    return safeUser;
  }

  private buildAuthResponse(user: SafeUserWithRoles, message: string) {
    const rolesArray = user.roles.map(r => r.name);

    const payload = {
      sub: user.id,
      email: user.email,
      roles: rolesArray, 
    };

    return {
      message,
      accessToken: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        roles: rolesArray,
        level: user.level,
        xp: user.xp,
        wins: user.wins,
        losses: user.losses,
      },
    };
  }
}
