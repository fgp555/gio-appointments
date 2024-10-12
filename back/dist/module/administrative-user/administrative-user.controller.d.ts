import { AdministrativeUserService } from './administrative-user.service';
import { AdministrativeUserEntity } from '../../entities/administrative_user.entity';
export declare class AdministrativeUserController {
    private readonly adminUserService;
    constructor(adminUserService: AdministrativeUserService);
    findAll(): Promise<AdministrativeUserEntity[]>;
    findOne(id: number): Promise<AdministrativeUserEntity>;
    create(data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity>;
    update(id: number, data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity>;
    delete(id: number): Promise<void>;
}
