import { Repository } from 'typeorm';
import { PatientEntity } from '../../entities/patient.entity';
export declare class PatientService {
    private readonly patientRepository;
    constructor(patientRepository: Repository<PatientEntity>);
    findAll(): Promise<PatientEntity[]>;
    findOne(id: number): Promise<any>;
    create(data: Partial<PatientEntity>): Promise<PatientEntity>;
    update(id: number, data: Partial<PatientEntity>): Promise<PatientEntity>;
    delete(id: number): Promise<void>;
}
