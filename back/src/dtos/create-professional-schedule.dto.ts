// back/src/dtos/create-professional-schedule.dto.ts

import { IsString, IsUUID } from 'class-validator';

export class CreateProfessionalScheduleDto {
  @IsUUID()
  professionalId: string;

  @IsString()
  dayOfWeek: string;

  @IsString()
  startTime: string; // Esperamos que sea una cadena con el formato HH:mm

  @IsString()
  endTime: string; // Esperamos que sea una cadena con el formato HH:mm
}
