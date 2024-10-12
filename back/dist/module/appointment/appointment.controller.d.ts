import { AppointmentService } from './appointment.service';
import { AppointmentEntity } from '../../entities/appointment.entity';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    findAll(): Promise<AppointmentEntity[]>;
    findOne(id: number): Promise<AppointmentEntity>;
    create(data: Partial<AppointmentEntity>): Promise<AppointmentEntity>;
    update(id: number, data: Partial<AppointmentEntity>): Promise<AppointmentEntity>;
    delete(id: number): Promise<void>;
}
