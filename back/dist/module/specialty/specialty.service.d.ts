import { Repository } from 'typeorm';
import { SpecialtyEntity } from '../../entities/specialty.entity';
export declare class SpecialtyService {
    private readonly specialtyRepository;
    constructor(specialtyRepository: Repository<SpecialtyEntity>);
    findAll(): Promise<SpecialtyEntity[]>;
    findOne(id: number): Promise<SpecialtyEntity>;
    create(data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity>;
    update(id: number, data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity>;
    delete(id: number): Promise<void>;
}
