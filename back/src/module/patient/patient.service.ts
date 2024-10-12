// back/src/module/patient/patient.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientEntity } from '../../entities/patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientRepository: Repository<PatientEntity>,
  ) {}

  async findAll(): Promise<PatientEntity[]> {
    return await this.patientRepository.find();
  }

  // ========== findOne... ==========
  async findOne(id: number): Promise<any> {
    const patient = await this.patientRepository.findOne({
      where: { id },
      relations: {
        appointments: {
          professional: true,
        },
      },
    });

    // Mapea los resultados para devolver el nombre completo del profesional como un string
    const mappedAppointments = patient.appointments.map((appointment) => ({
      ...appointment,
      professional: `${appointment.professional.firstName} ${appointment.professional.lastName}`,
    }));

    return {
      ...patient,
      appointments: mappedAppointments,
    };
  }
  // ========== findOne. ==========

  async create(data: Partial<PatientEntity>): Promise<PatientEntity> {
    const patient = this.patientRepository.create(data);
    return await this.patientRepository.save(patient);
  }

  async update(
    id: number,
    data: Partial<PatientEntity>,
  ): Promise<PatientEntity> {
    await this.patientRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.patientRepository.delete(id);
  }
}
