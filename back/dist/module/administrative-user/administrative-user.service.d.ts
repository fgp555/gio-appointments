import { Repository } from 'typeorm';
import { AdministrativeUserEntity } from '../../entities/administrative_user.entity';
export declare class AdministrativeUserService {
    private readonly adminUserRepository;
    constructor(adminUserRepository: Repository<AdministrativeUserEntity>);
    findAll(): Promise<AdministrativeUserEntity[]>;
    findOne(id: number): Promise<AdministrativeUserEntity>;
    create(data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity>;
    update(id: number, data: Partial<AdministrativeUserEntity>): Promise<AdministrativeUserEntity>;
    delete(id: number): Promise<void>;
}
