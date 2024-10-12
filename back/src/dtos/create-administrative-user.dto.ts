// back/src/dtos/create-administrative-user.dto.ts

import { IsString } from 'class-validator';

export class CreateAdministrativeUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  role: string;
}
