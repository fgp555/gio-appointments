// back/src/module/professional-schedule/professional-schedule.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalScheduleEntity } from '../../entities/professional_schedule.entity';

@Injectable()
export class ProfessionalScheduleService {
  constructor(
    @InjectRepository(ProfessionalScheduleEntity)
    private readonly scheduleRepository: Repository<ProfessionalScheduleEntity>,
  ) {}

  async findAll(): Promise<ProfessionalScheduleEntity[]> {
    return await this.scheduleRepository.find();
  }

  async findOne(id: number): Promise<ProfessionalScheduleEntity> {
    return await this.scheduleRepository.findOne({ where: { id } });
  }

  async create(data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity> {
    const schedule = this.scheduleRepository.create(data);
    return await this.scheduleRepository.save(schedule);
  }

  async update(id: number, data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity> {
    await this.scheduleRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.scheduleRepository.delete(id);
  }
}
