import { SpecialtyEntity } from './specialty.entity';
import { AppointmentEntity } from './appointment.entity';
import { ProfessionalScheduleEntity } from './professional_schedule.entity';
export declare class ProfessionalEntity {
    id: number;
    firstName: string;
    lastName: string;
    specialty: SpecialtyEntity;
    email: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    appointments: AppointmentEntity[];
    schedules: ProfessionalScheduleEntity[];
}
