// back/src/entities/professional.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { SpecialtyEntity } from './specialty.entity';
import { AppointmentEntity } from './appointment.entity';
import { ProfessionalScheduleEntity } from './professional_schedule.entity';

@Entity('professionals')
export class ProfessionalEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => SpecialtyEntity, specialty => specialty.professionals)
  specialty: SpecialtyEntity;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => AppointmentEntity, appointment => appointment.professional)
  appointments: AppointmentEntity[];

  @OneToMany(() => ProfessionalScheduleEntity, schedule => schedule.professional)
  schedules: ProfessionalScheduleEntity[];
}
