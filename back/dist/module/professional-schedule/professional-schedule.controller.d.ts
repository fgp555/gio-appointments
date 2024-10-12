import { ProfessionalScheduleService } from './professional-schedule.service';
import { ProfessionalScheduleEntity } from '../../entities/professional_schedule.entity';
export declare class ProfessionalScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ProfessionalScheduleService);
    findAll(): Promise<ProfessionalScheduleEntity[]>;
    findOne(id: number): Promise<ProfessionalScheduleEntity>;
    create(data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity>;
    update(id: number, data: Partial<ProfessionalScheduleEntity>): Promise<ProfessionalScheduleEntity>;
    delete(id: number): Promise<void>;
}
