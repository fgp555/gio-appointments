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
exports.AppointmentSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("../entities/appointment.entity");
const patient_entity_1 = require("../entities/patient.entity");
const professional_entity_1 = require("../entities/professional.entity");
let AppointmentSeeder = class AppointmentSeeder {
    constructor(appointmentRepository, patientRepository, professionalRepository) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.professionalRepository = professionalRepository;
    }
    async seed() {
        const patients = await this.patientRepository.find();
        const professionals = await this.professionalRepository.find();
        const appointments = [
            {
                patient: patients[0],
                professional: professionals[0],
                appointmentDate: new Date('2024-10-12 09:00:00'),
                status: 'confirmada',
                reason: 'Consulta de rutina',
            },
            {
                patient: patients[1],
                professional: professionals[1],
                appointmentDate: new Date('2024-10-13 10:30:00'),
                status: 'pendiente',
                reason: 'Chequeo pediátrico',
            },
            {
                patient: patients[2],
                professional: professionals[2],
                appointmentDate: new Date('2024-10-14 14:00:00'),
                status: 'cancelada',
                reason: 'Consulta neurológica',
            },
        ];
        await this.appointmentRepository.save(appointments);
    }
};
exports.AppointmentSeeder = AppointmentSeeder;
exports.AppointmentSeeder = AppointmentSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.AppointmentEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(patient_entity_1.PatientEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(professional_entity_1.ProfessionalEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AppointmentSeeder);
//# sourceMappingURL=appointment.seeder.js.map