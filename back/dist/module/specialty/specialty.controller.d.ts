import { SpecialtyService } from './specialty.service';
import { SpecialtyEntity } from '../../entities/specialty.entity';
export declare class SpecialtyController {
    private readonly specialtyService;
    constructor(specialtyService: SpecialtyService);
    findAll(): Promise<SpecialtyEntity[]>;
    findOne(id: number): Promise<SpecialtyEntity>;
    create(data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity>;
    update(id: number, data: Partial<SpecialtyEntity>): Promise<SpecialtyEntity>;
    delete(id: number): Promise<void>;
}
