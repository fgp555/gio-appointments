// back/src/seeder/administrative_user.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdministrativeUserEntity } from '../entities/administrative_user.entity';

@Injectable()
export class AdministrativeUserSeeder {
  constructor(
    @InjectRepository(AdministrativeUserEntity)
    private readonly adminUserRepository: Repository<AdministrativeUserEntity>,
  ) {}

  async seed() {
    const users = [
      {
        username: 'admin',
        password: 'admin123', // Asegúrate de que en producción uses un hash para la contraseña
        role: 'Administrador',
      },
      {
        username: 'reception1',
        password: 'reception123',
        role: 'Recepcionista',
      },
      {
        username: 'reception2',
        password: 'reception123',
        role: 'Recepcionista',
      },
    ];

    await this.adminUserRepository.save(users);
  }
}
