import { Repository } from 'typeorm';
import { AppointmentEntity } from '../entities/appointment.entity';
import { PatientEntity } from '../entities/patient.entity';
import { ProfessionalEntity } from '../entities/professional.entity';
export declare class AppointmentSeeder {
    private readonly appointmentRepository;
    private readonly patientRepository;
    private readonly professionalRepository;
    constructor(appointmentRepository: Repository<AppointmentEntity>, patientRepository: Repository<PatientEntity>, professionalRepository: Repository<ProfessionalEntity>);
    seed(): Promise<void>;
}
