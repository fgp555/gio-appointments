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
exports.ProfessionalScheduleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const professional_schedule_entity_1 = require("../../entities/professional_schedule.entity");
let ProfessionalScheduleService = class ProfessionalScheduleService {
    constructor(scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }
    async findAll() {
        return await this.scheduleRepository.find();
    }
    async findOne(id) {
        return await this.scheduleRepository.findOne({ where: { id } });
    }
    async create(data) {
        const schedule = this.scheduleRepository.create(data);
        return await this.scheduleRepository.save(schedule);
    }
    async update(id, data) {
        await this.scheduleRepository.update(id, data);
        return this.findOne(id);
    }
    async delete(id) {
        await this.scheduleRepository.delete(id);
    }
};
exports.ProfessionalScheduleService = ProfessionalScheduleService;
exports.ProfessionalScheduleService = ProfessionalScheduleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professional_schedule_entity_1.ProfessionalScheduleEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfessionalScheduleService);
//# sourceMappingURL=professional-schedule.service.js.map