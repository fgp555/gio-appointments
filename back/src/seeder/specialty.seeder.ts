// back/src/seeder/specialty.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecialtyEntity } from '../entities/specialty.entity';

@Injectable()
export class SpecialtySeeder {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private readonly specialtyRepository: Repository<SpecialtyEntity>,
  ) {}

  async seed() {
    const specialties = [
      { name: 'Cardiología' },
      { name: 'Pediatría' },
      { name: 'Neurología' },
    ];

    await this.specialtyRepository.save(specialties);
  }
}
