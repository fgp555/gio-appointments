import { AppointmentEntity } from './appointment.entity';
export declare class PatientEntity {
    id: number;
    firstName: string;
    lastName?: string;
    email?: string;
    dni?: string;
    phone: string;
    dob?: Date;
    address?: string;
    createdAt: Date;
    updatedAt: Date;
    appointments: AppointmentEntity[];
}
