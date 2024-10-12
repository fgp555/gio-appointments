// back/src/seeder/professional_schedule.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalScheduleEntity } from '../entities/professional_schedule.entity';
import { ProfessionalEntity } from '../entities/professional.entity';

@Injectable()
export class ProfessionalScheduleSeeder {
  constructor(
    @InjectRepository(ProfessionalScheduleEntity)
    private readonly scheduleRepository: Repository<ProfessionalScheduleEntity>,
    @InjectRepository(ProfessionalEntity)
    private readonly professionalRepository: Repository<ProfessionalEntity>,
  ) {}

  async seed() {
    const professionals = await this.professionalRepository.find();

    const schedules = [
      {
        professional: professionals[0],
        dayOfWeek: 'Lunes',
        startTime: '09:00',
        endTime: '17:00',
      },
      {
        professional: professionals[1],
        dayOfWeek: 'Martes',
        startTime: '10:00',
        endTime: '18:00',
      },
      {
        professional: professionals[2],
        dayOfWeek: 'Miércoles',
        startTime: '08:00',
        endTime: '14:00',
      },
    ];

    await this.scheduleRepository.save(schedules);
  }
}
