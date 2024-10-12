// back/src/dtos/create-professional.dto.ts

import { IsString, IsEmail, IsOptional } from 'class-validator';
import { IsUUID } from 'class-validator';

export class CreateProfessionalDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsUUID()
  specialtyId: string;
}
