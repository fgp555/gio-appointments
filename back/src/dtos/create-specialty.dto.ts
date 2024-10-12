// back/src/dtos/create-specialty.dto.ts

import { IsString } from 'class-validator';

export class CreateSpecialtyDto {
  @IsString()
  name: string;
}
