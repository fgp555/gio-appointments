// back/src/module/professional/professional.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfessionalEntity } from '../../entities/professional.entity';

@Injectable()
export class ProfessionalService {
  constructor(
    @InjectRepository(ProfessionalEntity)
    private readonly professionalRepository: Repository<ProfessionalEntity>,
  ) {}

  async findAll(): Promise<ProfessionalEntity[]> {
    return await this.professionalRepository.find();
  }

  async findOne(id: number): Promise<ProfessionalEntity> {
    return await this.professionalRepository.findOne({ where: { id } });
  }

  async create(data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity> {
    const professional = this.professionalRepository.create(data);
    return await this.professionalRepository.save(professional);
  }

  async update(id: number, data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity> {
    await this.professionalRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.professionalRepository.delete(id);
  }
}
