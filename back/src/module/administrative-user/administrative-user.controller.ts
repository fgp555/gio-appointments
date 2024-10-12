// back/src/module/administrative-user/administrative-user.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AdministrativeUserService } from './administrative-user.service';
import { AdministrativeUserEntity } from '../../entities/administrative_user.entity';

@Controller('administrative-users')
export class AdministrativeUserController {
  constructor(private readonly adminUserService: AdministrativeUserService) {}

  @Get()
  async findAll(): Promise<AdministrativeUserEntity[]> {
    return await this.adminUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AdministrativeUserEntity> {
    return await this.adminUserService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity> {
    return await this.adminUserService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<AdministrativeUserEntity>,
  ): Promise<AdministrativeUserEntity> {
    return await this.adminUserService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.adminUserService.delete(id);
  }
}
