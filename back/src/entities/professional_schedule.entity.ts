// back/src/entities/professional_schedule.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProfessionalEntity } from './professional.entity';

@Entity('professional_schedules')
export class ProfessionalScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProfessionalEntity, professional => professional.schedules)
  professional: ProfessionalEntity;

  @Column()
  dayOfWeek: string; // Podría ser un enum para los días de la semana

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;
}
