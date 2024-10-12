// back/src/module/specialty/specialty.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecialtyEntity } from '../../entities/specialty.entity';

@Injectable()
export class SpecialtyService {
  constructor(
    @InjectRepository(SpecialtyEntity)
    private readonly specialtyRepository: Repository<SpecialtyEntity>,
  ) {}

  async findAll(): Promise<SpecialtyEntity[]> {
    return await this.specialtyRepository.find();
  }

  async findOne(id: number): Promise<SpecialtyEntity> {
    return await this.specialtyRepository.findOne({ where: { id } });
  }

  async create(data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity> {
    const specialty = this.specialtyRepository.create(data);
    return await this.specialtyRepository.save(specialty);
  }

  async update(id: number, data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity> {
    await this.specialtyRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.specialtyRepository.delete(id);
  }
}
