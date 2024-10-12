// back/src/module/patient/patient.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientEntity } from '../../entities/patient.entity';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async findAll(): Promise<PatientEntity[]> {
    return await this.patientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PatientEntity> {
    return await this.patientService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<PatientEntity>): Promise<PatientEntity> {
    return await this.patientService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<PatientEntity>,
  ): Promise<PatientEntity> {
    return await this.patientService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.patientService.delete(id);
  }
}
