// back/src/dtos/update-administrative-user.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministrativeUserDto } from './create-administrative-user.dto';

export class UpdateAdministrativeUserDto extends PartialType(CreateAdministrativeUserDto) {}
