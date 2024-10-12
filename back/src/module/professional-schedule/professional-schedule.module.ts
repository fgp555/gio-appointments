// back/src/module/professional-schedule/professional-schedule.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessionalScheduleEntity } from '../../entities/professional_schedule.entity';
import { ProfessionalScheduleService } from './professional-schedule.service';
import { ProfessionalScheduleController } from './professional-schedule.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProfessionalScheduleEntity])],
  providers: [ProfessionalScheduleService],
  controllers: [ProfessionalScheduleController],
})
export class ProfessionalScheduleModule {}
