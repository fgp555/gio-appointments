import { Repository } from 'typeorm';
import { PatientEntity } from '../entities/patient.entity';
export declare class PatientSeeder {
    private readonly patientRepository;
    constructor(patientRepository: Repository<PatientEntity>);
    seed(): Promise<void>;
}
