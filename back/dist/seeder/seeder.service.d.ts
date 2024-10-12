import { PatientSeeder } from './patient.seeder';
import { ProfessionalSeeder } from './professional.seeder';
import { AppointmentSeeder } from './appointment.seeder';
import { SpecialtySeeder } from './specialty.seeder';
import { ProfessionalScheduleSeeder } from './professional_schedule.seeder';
import { AdministrativeUserSeeder } from './administrative_user.seeder';
export declare class SeederService {
    private readonly patientSeeder;
    private readonly professionalSeeder;
    private readonly appointmentSeeder;
    private readonly specialtySeeder;
    private readonly scheduleSeeder;
    private readonly adminUserSeeder;
    constructor(patientSeeder: PatientSeeder, professionalSeeder: ProfessionalSeeder, appointmentSeeder: AppointmentSeeder, specialtySeeder: SpecialtySeeder, scheduleSeeder: ProfessionalScheduleSeeder, adminUserSeeder: AdministrativeUserSeeder);
    seedAll(): Promise<void>;
}
