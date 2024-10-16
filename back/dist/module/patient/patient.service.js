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
exports.PatientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patient_entity_1 = require("../../entities/patient.entity");
let PatientService = class PatientService {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async findAll() {
        return await this.patientRepository.find();
    }
    async findOne(id) {
        const patient = await this.patientRepository.findOne({
            where: { id },
            relations: {
                appointments: {
                    professional: true,
                },
            },
        });
        const mappedAppointments = patient.appointments.map((appointment) => ({
            ...appointment,
            professional: `${appointment.professional.firstName} ${appointment.professional.lastName}`,
        }));
        return {
            ...patient,
            appointments: mappedAppointments,
        };
    }
    async create(data) {
        const patient = this.patientRepository.create(data);
        return await this.patientRepository.save(patient);
    }
    async update(id, data) {
        await this.patientRepository.update(id, data);
        return this.findOne(id);
    }
    async delete(id) {
        await this.patientRepository.delete(id);
    }
};
exports.PatientService = PatientService;
exports.PatientService = PatientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.PatientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PatientService);
//# sourceMappingURL=patient.service.js.map