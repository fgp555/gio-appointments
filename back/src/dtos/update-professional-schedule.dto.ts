// back/src/dtos/update-professional-schedule.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalScheduleDto } from './create-professional-schedule.dto';

export class UpdateProfessionalScheduleDto extends PartialType(CreateProfessionalScheduleDto) {}
