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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const patient_seeder_1 = require("./patient.seeder");
const professional_seeder_1 = require("./professional.seeder");
const appointment_seeder_1 = require("./appointment.seeder");
const specialty_seeder_1 = require("./specialty.seeder");
const professional_schedule_seeder_1 = require("./professional_schedule.seeder");
const administrative_user_seeder_1 = require("./administrative_user.seeder");
let SeederService = class SeederService {
    constructor(patientSeeder, professionalSeeder, appointmentSeeder, specialtySeeder, scheduleSeeder, adminUserSeeder) {
        this.patientSeeder = patientSeeder;
        this.professionalSeeder = professionalSeeder;
        this.appointmentSeeder = appointmentSeeder;
        this.specialtySeeder = specialtySeeder;
        this.scheduleSeeder = scheduleSeeder;
        this.adminUserSeeder = adminUserSeeder;
    }
    async seedAll() {
        await this.specialtySeeder.seed();
        await this.patientSeeder.seed();
        await this.professionalSeeder.seed();
        await this.scheduleSeeder.seed();
        await this.appointmentSeeder.seed();
        await this.adminUserSeeder.seed();
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [patient_seeder_1.PatientSeeder,
        professional_seeder_1.ProfessionalSeeder,
        appointment_seeder_1.AppointmentSeeder,
        specialty_seeder_1.SpecialtySeeder,
        professional_schedule_seeder_1.ProfessionalScheduleSeeder,
        administrative_user_seeder_1.AdministrativeUserSeeder])
], SeederService);
//# sourceMappingURL=seeder.service.js.map