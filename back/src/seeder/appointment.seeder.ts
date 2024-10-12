// back/src/seeder/appointment.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentEntity } from '../entities/appointment.entity';
import { PatientEntity } from '../entities/patient.entity';
import { ProfessionalEntity } from '../entities/professional.entity';

@Injectable()
export class AppointmentSeeder {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>,
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
    @InjectRepository(ProfessionalEntity)
    private readonly professionalRepository: Repository<ProfessionalEntity>,
  ) {}

  async seed() {
    const patients = await this.patientRepository.find();
    const professionals = await this.professionalRepository.find();

    const appointments = [
      {
        patient: patients[0],
        professional: professionals[0],
        appointmentDate: new Date('2024-10-12 09:00:00'),
        status: 'confirmada',
        reason: 'Consulta de rutina',
      },
      {
        patient: patients[1],
        professional: professionals[1],
        appointmentDate: new Date('2024-10-13 10:30:00'),
        status: 'pendiente',
        reason: 'Chequeo pediátrico',
      },
      {
        patient: patients[2],
        professional: professionals[2],
        appointmentDate: new Date('2024-10-14 14:00:00'),
        status: 'cancelada',
        reason: 'Consulta neurológica',
      },
    ];

    await this.appointmentRepository.save(appointments);
  }
}
