// back/src/module/appointment/appointment.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentEntity } from '../../entities/appointment.entity';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  async findAll(): Promise<AppointmentEntity[]> {
    return await this.appointmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AppointmentEntity> {
    return await this.appointmentService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<AppointmentEntity>): Promise<AppointmentEntity> {
    return await this.appointmentService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity> {
    return await this.appointmentService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.appointmentService.delete(id);
  }
}
