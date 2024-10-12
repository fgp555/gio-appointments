// back/src/dtos/create-appointment.dto.ts

import { IsString, IsUUID, IsDate, IsOptional } from 'class-validator';

export class CreateAppointmentDto {
  @IsUUID()
  patientId: string;

  @IsUUID()
  professionalId: string;

  @IsDate()
  appointmentDate: Date;

  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  reason?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
