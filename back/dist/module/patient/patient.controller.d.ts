import { PatientService } from './patient.service';
import { PatientEntity } from '../../entities/patient.entity';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    findAll(): Promise<PatientEntity[]>;
    findOne(id: number): Promise<PatientEntity>;
    create(data: Partial<PatientEntity>): Promise<PatientEntity>;
    update(id: number, data: Partial<PatientEntity>): Promise<PatientEntity>;
    delete(id: number): Promise<void>;
}
