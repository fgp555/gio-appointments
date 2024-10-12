import { Repository } from 'typeorm';
import { ProfessionalEntity } from '../../entities/professional.entity';
export declare class ProfessionalService {
    private readonly professionalRepository;
    constructor(professionalRepository: Repository<ProfessionalEntity>);
    findAll(): Promise<ProfessionalEntity[]>;
    findOne(id: number): Promise<ProfessionalEntity>;
    create(data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity>;
    update(id: number, data: Partial<ProfessionalEntity>): Promise<ProfessionalEntity>;
    delete(id: number): Promise<void>;
}
