// back/src/module/specialty/specialty.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { SpecialtyEntity } from '../../entities/specialty.entity';

@Controller('specialties')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Get()
  async findAll(): Promise<SpecialtyEntity[]> {
    return await this.specialtyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<SpecialtyEntity> {
    return await this.specialtyService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity> {
    return await this.specialtyService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<SpecialtyEntity>,
  ): Promise<SpecialtyEntity> {
    return await this.specialtyService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.specialtyService.delete(id);
  }
}
