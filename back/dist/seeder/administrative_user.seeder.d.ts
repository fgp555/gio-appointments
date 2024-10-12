import { Repository } from 'typeorm';
import { AdministrativeUserEntity } from '../entities/administrative_user.entity';
export declare class AdministrativeUserSeeder {
    private readonly adminUserRepository;
    constructor(adminUserRepository: Repository<AdministrativeUserEntity>);
    seed(): Promise<void>;
}
