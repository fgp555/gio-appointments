import { Repository } from 'typeorm';
import { ProfessionalScheduleEntity } from '../entities/professional_schedule.entity';
import { ProfessionalEntity } from '../entities/professional.entity';
export declare class ProfessionalScheduleSeeder {
    private readonly scheduleRepository;
    private readonly professionalRepository;
    constructor(scheduleRepository: Repository<ProfessionalScheduleEntity>, professionalRepository: Repository<ProfessionalEntity>);
    seed(): Promise<void>;
}
