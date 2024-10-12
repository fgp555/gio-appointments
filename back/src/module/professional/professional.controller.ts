// back/src/module/professional/professional.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalEntity } from '../../entities/professional.entity';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Get()
  async findAll(): Promise<ProfessionalEntity[]> {
    return await this.professionalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProfessionalEntity> {
    return await this.professionalService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity> {
    return await this.professionalService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<ProfessionalEntity>,
  ): Promise<ProfessionalEntity> {
    return await this.professionalService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.professionalService.delete(id);
  }
}
