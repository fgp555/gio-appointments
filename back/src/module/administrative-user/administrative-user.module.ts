// back/src/module/administrative-user/administrative-user.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministrativeUserEntity } from '../../entities/administrative_user.entity';
import { AdministrativeUserService } from './administrative-user.service';
import { AdministrativeUserController } from './administrative-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdministrativeUserEntity])],
  providers: [AdministrativeUserService],
  controllers: [AdministrativeUserController],
})
export class AdministrativeUserModule {}
