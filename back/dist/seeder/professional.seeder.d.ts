import { Repository } from 'typeorm';
import { ProfessionalEntity } from '../entities/professional.entity';
import { SpecialtyEntity } from '../entities/specialty.entity';
export declare class ProfessionalSeeder {
    private readonly professionalRepository;
    private readonly specialtyRepository;
    constructor(professionalRepository: Repository<ProfessionalEntity>, specialtyRepository: Repository<SpecialtyEntity>);
    seed(): Promise<void>;
}
