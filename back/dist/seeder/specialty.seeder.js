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
exports.SpecialtySeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const specialty_entity_1 = require("../entities/specialty.entity");
let SpecialtySeeder = class SpecialtySeeder {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    async seed() {
        const specialties = [
            { name: 'Cardiología' },
            { name: 'Pediatría' },
            { name: 'Neurología' },
        ];
        await this.specialtyRepository.save(specialties);
    }
};
exports.SpecialtySeeder = SpecialtySeeder;
exports.SpecialtySeeder = SpecialtySeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specialty_entity_1.SpecialtyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpecialtySeeder);
//# sourceMappingURL=specialty.seeder.js.map