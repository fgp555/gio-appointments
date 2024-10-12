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
exports.ProfessionalScheduleSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const professional_schedule_entity_1 = require("../entities/professional_schedule.entity");
const professional_entity_1 = require("../entities/professional.entity");
let ProfessionalScheduleSeeder = class ProfessionalScheduleSeeder {
    constructor(scheduleRepository, professionalRepository) {
        this.scheduleRepository = scheduleRepository;
        this.professionalRepository = professionalRepository;
    }
    async seed() {
        const professionals = await this.professionalRepository.find();
        const schedules = [
            {
                professional: professionals[0],
                dayOfWeek: 'Lunes',
                startTime: '09:00',
                endTime: '17:00',
            },
            {
                professional: professionals[1],
                dayOfWeek: 'Martes',
                startTime: '10:00',
                endTime: '18:00',
            },
            {
                professional: professionals[2],
                dayOfWeek: 'Miércoles',
                startTime: '08:00',
                endTime: '14:00',
            },
        ];
        await this.scheduleRepository.save(schedules);
    }
};
exports.ProfessionalScheduleSeeder = ProfessionalScheduleSeeder;
exports.ProfessionalScheduleSeeder = ProfessionalScheduleSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(professional_schedule_entity_1.ProfessionalScheduleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(professional_entity_1.ProfessionalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProfessionalScheduleSeeder);
//# sourceMappingURL=professional_schedule.seeder.js.map