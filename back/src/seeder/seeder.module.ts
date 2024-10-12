// back/src/seeder/seeder.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from '../entities/patient.entity';
import { ProfessionalEntity } from '../entities/professional.entity';
import { AppointmentEntity } from '../entities/appointment.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
import { ProfessionalScheduleEntity } from '../entities/professional_schedule.entity';
import { AdministrativeUserEntity } from '../entities/administrative_user.entity';

import { SeederService } from './seeder.service';
import { PatientSeeder } from './patient.seeder';
import { ProfessionalSeeder } from './professional.seeder';
import { AppointmentSeeder } from './appointment.seeder';
import { SpecialtySeeder } from './specialty.seeder';
import { ProfessionalScheduleSeeder } from './professional_schedule.seeder';
import { AdministrativeUserSeeder } from './administrative_user.seeder';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PatientEntity,
      ProfessionalEntity,
      AppointmentEntity,
      SpecialtyEntity,
      ProfessionalScheduleEntity,
      AdministrativeUserEntity,
    ]),
  ],
  providers: [
    SeederService,
    PatientSeeder,
    ProfessionalSeeder,
    AppointmentSeeder,
    SpecialtySeeder,
    ProfessionalScheduleSeeder,
    AdministrativeUserSeeder,
  ],
  exports: [SeederService],
})
export class SeederModule {}
