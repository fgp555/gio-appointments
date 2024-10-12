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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("../../entities/appointment.entity");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    async findAll() {
        const appointments = await this.appointmentRepository.find({
            relations: ['patient', 'professional'],
            order: {
                appointmentDate: 'ASC',
            },
        });
        return appointments.map((appointment) => ({
            ...appointment,
            patient: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
            professional: `${appointment.professional.firstName} ${appointment.professional.lastName}`,
        }));
    }
    async findOne(id) {
        return await this.appointmentRepository.findOne({ where: { id } });
    }
    async create(data) {
        const appointment = this.appointmentRepository.create(data);
        return await this.appointmentRepository.save(appointment);
    }
    async update(id, data) {
        await this.appointmentRepository.update(id, data);
        return this.findOne(id);
    }
    async delete(id) {
        await this.appointmentRepository.delete(id);
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.AppointmentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map