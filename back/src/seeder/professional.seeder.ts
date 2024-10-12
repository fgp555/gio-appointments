// back/src/seeder/professional.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalEntity } from '../entities/professional.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';

@Injectable()
export class ProfessionalSeeder {
  constructor(
    @InjectRepository(ProfessionalEntity)
    private readonly professionalRepository: Repository<ProfessionalEntity>,
    @InjectRepository(SpecialtyEntity)
    private readonly specialtyRepository: Repository<SpecialtyEntity>,
  ) {}

  async seed() {
    // Insert demo specialties
    const specialties = await this.specialtyRepository.save([
      { name: 'Cardiología' },
      { name: 'Pediatría' },
      { name: 'Neurología' },
    ]);

    const professionals = [
      {
        firstName: 'Dr. Roberto',
        lastName: 'Sánchez',
        email: 'roberto.sanchez@example.com',
        phone: '555-4321',
        specialty: specialties[0],
      },
      {
        firstName: 'Dra. Ana',
        lastName: 'Martínez',
        email: 'ana.martinez@example.com',
        phone: '555-8765',
        specialty: specialties[1],
      },
      {
        firstName: 'Dr. Jorge',
        lastName: 'Fernández',
        email: 'jorge.fernandez@example.com',
        phone: '555-6543',
        specialty: specialties[2],
      },
    ];

    await this.professionalRepository.save(professionals);
  }
}
