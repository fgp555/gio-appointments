// back/src/entities/specialty.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProfessionalEntity } from './professional.entity';

@Entity('specialties')
export class SpecialtyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProfessionalEntity, professional => professional.specialty)
  professionals: ProfessionalEntity[];
}
