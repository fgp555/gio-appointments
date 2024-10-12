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
exports.PatientSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const patient_entity_1 = require("../entities/patient.entity");
let PatientSeeder = class PatientSeeder {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async seed() {
        const patients = [
            {
                firstName: 'Juan',
                lastName: 'Pérez',
                email: 'juan.perez@example.com',
                phone: '555-1234',
                dob: new Date('1980-05-12'),
                address: 'Calle Falsa 123',
            },
            {
                firstName: 'María',
                lastName: 'Gómez',
                email: 'maria.gomez@example.com',
                phone: '555-5678',
                dob: new Date('1990-11-22'),
                address: 'Avenida Siempre Viva 456',
            },
            {
                firstName: 'Carlos',
                lastName: 'Rodríguez',
                email: 'carlos.rodriguez@example.com',
                phone: '555-9876',
                dob: new Date('1975-02-18'),
                address: 'Calle Los Olivos 789',
            },
        ];
        await this.patientRepository.save(patients);
    }
};
exports.PatientSeeder = PatientSeeder;
exports.PatientSeeder = PatientSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(patient_entity_1.PatientEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PatientSeeder);
//# sourceMappingURL=patient.seeder.js.map