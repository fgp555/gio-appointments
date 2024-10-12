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
exports.ProfessionalEntity = void 0;
const typeorm_1 = require("typeorm");
const specialty_entity_1 = require("./specialty.entity");
const appointment_entity_1 = require("./appointment.entity");
const professional_schedule_entity_1 = require("./professional_schedule.entity");
let ProfessionalEntity = class ProfessionalEntity {
};
exports.ProfessionalEntity = ProfessionalEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfessionalEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfessionalEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfessionalEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialty_entity_1.SpecialtyEntity, specialty => specialty.professionals),
    __metadata("design:type", specialty_entity_1.SpecialtyEntity)
], ProfessionalEntity.prototype, "specialty", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProfessionalEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProfessionalEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ProfessionalEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ProfessionalEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.AppointmentEntity, appointment => appointment.professional),
    __metadata("design:type", Array)
], ProfessionalEntity.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => professional_schedule_entity_1.ProfessionalScheduleEntity, schedule => schedule.professional),
    __metadata("design:type", Array)
], ProfessionalEntity.prototype, "schedules", void 0);
exports.ProfessionalEntity = ProfessionalEntity = __decorate([
    (0, typeorm_1.Entity)('professionals')
], ProfessionalEntity);
//# sourceMappingURL=professional.entity.js.map