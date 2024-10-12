import { ProfessionalEntity } from './professional.entity';
export declare class ProfessionalScheduleEntity {
    id: number;
    professional: ProfessionalEntity;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
}
