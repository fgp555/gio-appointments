// back/src/entities/patient.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AppointmentEntity } from './appointment.entity';

@Entity('patients')
export class PatientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  dni?: string;

  @Column({ nullable: true })
  phone: string;

  // Date of Birth
  @Column({ type: 'date', nullable: true })
  dob?: Date;

  @Column({ nullable: true })
  address?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => AppointmentEntity, appointment => appointment.patient)
  appointments: AppointmentEntity[];
}
