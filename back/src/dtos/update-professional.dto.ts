// back/src/dtos/update-professional.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionalDto } from './create-professional.dto';

export class UpdateProfessionalDto extends PartialType(CreateProfessionalDto) {}
