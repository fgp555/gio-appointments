import { Repository } from 'typeorm';
import { SpecialtyEntity } from '../entities/specialty.entity';
export declare class SpecialtySeeder {
    private readonly specialtyRepository;
    constructor(specialtyRepository: Repository<SpecialtyEntity>);
    seed(): Promise<void>;
}
