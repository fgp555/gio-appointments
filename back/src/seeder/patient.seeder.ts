// back/src/seeder/patient.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientEntity } from '../entities/patient.entity';

@Injectable()
export class PatientSeeder {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
  ) {}

  async seed() {
    const patients = [
      {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@example.com',
        phone: '555-1234',
        dob: new Date('1980-05-12'),
        address: 'Calle Falsa 123',
      },
      {
        firstName: 'María',
        lastName: 'Gómez',
        email: 'maria.gomez@example.com',
        phone: '555-5678',
        dob: new Date('1990-11-22'),
        address: 'Avenida Siempre Viva 456',
      },
      {
        firstName: 'Carlos',
        lastName: 'Rodríguez',
        email: 'carlos.rodriguez@example.com',
        phone: '555-9876',
        dob: new Date('1975-02-18'),
        address: 'Calle Los Olivos 789',
      },
    ];

    await this.patientRepository.save(patients);
  }
}
