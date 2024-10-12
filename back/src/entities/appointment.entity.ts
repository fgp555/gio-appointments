// back/src/entities/appointment.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { PatientEntity } from './patient.entity';
import { ProfessionalEntity } from './professional.entity';

@Entity('appointments')
export class AppointmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PatientEntity, patient => patient.appointments)
  patient: PatientEntity;

  @ManyToOne(() => ProfessionalEntity, professional => professional.appointments)
  professional: ProfessionalEntity;

  @Column({ type: 'timestamp' })
  appointmentDate: Date;

  @Column()
  status: string; // Puede ser un enum en lugar de string

  @Column({ nullable: true })
  reason: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
