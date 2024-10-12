import { Repository } from 'typeorm';
import { AppointmentEntity } from '../../entities/appointment.entity';
export declare class AppointmentService {
    private readonly appointmentRepository;
    constructor(appointmentRepository: Repository<AppointmentEntity>);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<AppointmentEntity>;
    create(data: Partial<AppointmentEntity>): Promise<AppointmentEntity>;
    update(id: number, data: Partial<AppointmentEntity>): Promise<AppointmentEntity>;
    delete(id: number): Promise<void>;
}
