"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrative_user_entity_1 = require("../../entities/administrative_user.entity");
let AdministrativeUserService = class AdministrativeUserService {
    constructor(adminUserRepository) {
        this.adminUserRepository = adminUserRepository;
    }
    async findAll() {
        return await this.adminUserRepository.find();
    }
    async findOne(id) {
        return await this.adminUserRepository.findOne({ where: { id } });
    }
    async create(data) {
        const user = this.adminUserRepository.create(data);
        return await this.adminUserRepository.save(user);
    }
    async update(id, data) {
        await this.adminUserRepository.update(id, data);
        return this.findOne(id);
    }
    async delete(id) {
        await this.adminUserRepository.delete(id);
    }
};
exports.AdministrativeUserService = AdministrativeUserService;
exports.AdministrativeUserService = AdministrativeUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrative_user_entity_1.AdministrativeUserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministrativeUserService);
//# sourceMappingURL=administrative-user.service.js.map