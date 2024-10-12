// back/src/module/appointment/appointment.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentEntity } from '../../entities/appointment.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(AppointmentEntity)
    private readonly appointmentRepository: Repository<AppointmentEntity>,
  ) {}

  // ========== findAll... ==========
  async findAll(): Promise<any[]> {
    const appointments = await this.appointmentRepository.find({
      relations: ['patient', 'professional'],
      order: {
        appointmentDate: 'ASC', // Ordena por appointmentDate de manera ascendente (más antiguo a más reciente)
      },
    });

    // Mapea los resultados para devolver solo los nombres completos de patient y professional
    return appointments.map((appointment) => ({
      ...appointment,
      patient: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
      professional: `${appointment.professional.firstName} ${appointment.professional.lastName}`,
    }));
  }
  // ========== findAll... ==========


  async findOne(id: number): Promise<AppointmentEntity> {
    return await this.appointmentRepository.findOne({ where: { id } });
  }

  async create(data: Partial<AppointmentEntity>): Promise<AppointmentEntity> {
    const appointment = this.appointmentRepository.create(data);
    return await this.appointmentRepository.save(appointment);
  }

  async update(
    id: number,
    data: Partial<AppointmentEntity>,
  ): Promise<AppointmentEntity> {
    await this.appointmentRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
