// back/src/seeder/seeder.service.ts

import { Injectable } from '@nestjs/common';
import { PatientSeeder } from './patient.seeder';
import { ProfessionalSeeder } from './professional.seeder';
import { AppointmentSeeder } from './appointment.seeder';
import { SpecialtySeeder } from './specialty.seeder';
import { ProfessionalScheduleSeeder } from './professional_schedule.seeder';
import { AdministrativeUserSeeder } from './administrative_user.seeder';

@Injectable()
export class SeederService {
  constructor(
    private readonly patientSeeder: PatientSeeder,
    private readonly professionalSeeder: ProfessionalSeeder,
    private readonly appointmentSeeder: AppointmentSeeder,
    private readonly specialtySeeder: SpecialtySeeder,
    private readonly scheduleSeeder: ProfessionalScheduleSeeder,
    private readonly adminUserSeeder: AdministrativeUserSeeder,
  ) {}

  async seedAll() {
    await this.specialtySeeder.seed();
    await this.patientSeeder.seed();
    await this.professionalSeeder.seed();
    await this.scheduleSeeder.seed();
    await this.appointmentSeeder.seed();
    await this.adminUserSeeder.seed();
  }
}
