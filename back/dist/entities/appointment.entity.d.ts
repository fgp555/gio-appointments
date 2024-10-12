import { PatientEntity } from './patient.entity';
import { ProfessionalEntity } from './professional.entity';
export declare class AppointmentEntity {
    id: number;
    patient: PatientEntity;
    professional: ProfessionalEntity;
    appointmentDate: Date;
    status: string;
    reason: string;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
}
