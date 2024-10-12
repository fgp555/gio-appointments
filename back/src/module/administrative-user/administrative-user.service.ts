// back/src/module/administrative-user/administrative-user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministrativeUserEntity } from '../../entities/administrative_user.entity';

@Injectable()
export class AdministrativeUserService {
  constructor(
    @InjectRepository(AdministrativeUserEntity)
    private readonly adminUserRepository: Repository<AdministrativeUserEntity>,
  ) {}

  async findAll(): Promise<AdministrativeUserEntity[]> {
    return await this.adminUserRepository.find();
  }

  async findOne(id: number): Promise<AdministrativeUserEntity> {
    return await this.adminUserRepository.findOne({ where: { id } });
  }

  async create(data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity> {
    const user = this.adminUserRepository.create(data);
    return await this.adminUserRepository.save(user);
  }

  async update(id: number, data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity> {
    await this.adminUserRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.adminUserRepository.delete(id);
  }
}
