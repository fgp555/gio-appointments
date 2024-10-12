import { ProfessionalService } from './professional.service';
import { ProfessionalEntity } from '../../entities/professional.entity';
export declare class ProfessionalController {
    private readonly professionalService;
    constructor(professionalService: ProfessionalService);
    findAll(): Promise<ProfessionalEntity[]>;
    findOne(id: number): Promise<ProfessionalEntity>;
    create(data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity>;
    update(id: number, data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity>;
    delete(id: number): Promise<void>;
}
