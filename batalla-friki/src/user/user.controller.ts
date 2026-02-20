import { Controller, Get, Post, Body, Patch, Param, Delete, DefaultValuePipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt_strategy/jwt-auth.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { RolesGuard } from '../auth/roles/roles.guard';
import {RoleName} from '../auth/roles/roles.enum';


@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
  constructor(private readonly usersService: UserService) {}
  @Get('ranking')
  @Roles(RoleName.ADMIN, RoleName.USER)
  ranking(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number) {
    return this.usersService.getRanking(limit);
  }


  @Post()
  @Roles(RoleName.ADMIN) 
  create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(RoleName.ADMIN) 
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(RoleName.ADMIN, RoleName.USER) 
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles(RoleName.ADMIN)
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(RoleName.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
