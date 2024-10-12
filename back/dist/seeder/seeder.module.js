"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const patient_entity_1 = require("../entities/patient.entity");
const professional_entity_1 = require("../entities/professional.entity");
const appointment_entity_1 = require("../entities/appointment.entity");
const specialty_entity_1 = require("../entities/specialty.entity");
const professional_schedule_entity_1 = require("../entities/professional_schedule.entity");
const administrative_user_entity_1 = require("../entities/administrative_user.entity");
const seeder_service_1 = require("./seeder.service");
const patient_seeder_1 = require("./patient.seeder");
const professional_seeder_1 = require("./professional.seeder");
const appointment_seeder_1 = require("./appointment.seeder");
const specialty_seeder_1 = require("./specialty.seeder");
const professional_schedule_seeder_1 = require("./professional_schedule.seeder");
const administrative_user_seeder_1 = require("./administrative_user.seeder");
let SeederModule = class SeederModule {
};
exports.SeederModule = SeederModule;
exports.SeederModule = SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                patient_entity_1.PatientEntity,
                professional_entity_1.ProfessionalEntity,
                appointment_entity_1.AppointmentEntity,
                specialty_entity_1.SpecialtyEntity,
                professional_schedule_entity_1.ProfessionalScheduleEntity,
                administrative_user_entity_1.AdministrativeUserEntity,
            ]),
        ],
        providers: [
            seeder_service_1.SeederService,
            patient_seeder_1.PatientSeeder,
            professional_seeder_1.ProfessionalSeeder,
            appointment_seeder_1.AppointmentSeeder,
            specialty_seeder_1.SpecialtySeeder,
            professional_schedule_seeder_1.ProfessionalScheduleSeeder,
            administrative_user_seeder_1.AdministrativeUserSeeder,
        ],
        exports: [seeder_service_1.SeederService],
    })
], SeederModule);
//# sourceMappingURL=seeder.module.js.map