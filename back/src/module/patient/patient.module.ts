// back/src/module/patient/patient.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientEntity } from '../../entities/patient.entity';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])],
  providers: [PatientService],
  controllers: [PatientController],
})
export class PatientModule {}
