import { Repository } from 'typeorm';
import { ProfessionalScheduleEntity } from '../../entities/professional_schedule.entity';
export declare class ProfessionalScheduleService {
    private readonly scheduleRepository;
    constructor(scheduleRepository: Repository<ProfessionalScheduleEntity>);
    findAll(): Promise<ProfessionalScheduleEntity[]>;
    findOne(id: number): Promise<ProfessionalScheduleEntity>;
    create(data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity>;
    update(id: number, data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity>;
    delete(id: number): Promise<void>;
}
