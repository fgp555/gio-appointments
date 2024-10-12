// back/src/module/appointment/appointment.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEntity } from '../../entities/appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentEntity])],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
