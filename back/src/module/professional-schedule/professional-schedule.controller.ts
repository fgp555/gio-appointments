// back/src/module/professional-schedule/professional-schedule.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProfessionalScheduleService } from './professional-schedule.service';
import { ProfessionalScheduleEntity } from '../../entities/professional_schedule.entity';

@Controller('professional-schedules')
export class ProfessionalScheduleController {
  constructor(private readonly scheduleService: ProfessionalScheduleService) {}

  @Get()
  async findAll(): Promise<ProfessionalScheduleEntity[]> {
    return await this.scheduleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ProfessionalScheduleEntity> {
    return await this.scheduleService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity> {
    return await this.scheduleService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<ProfessionalScheduleEntity>,
  ): Promise<ProfessionalScheduleEntity> {
    return await this.scheduleService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.scheduleService.delete(id);
  }
}
