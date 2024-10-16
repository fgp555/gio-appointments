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
exports.ProfessionalScheduleEntity = void 0;
const typeorm_1 = require("typeorm");
const professional_entity_1 = require("./professional.entity");
let ProfessionalScheduleEntity = class ProfessionalScheduleEntity {
};
exports.ProfessionalScheduleEntity = ProfessionalScheduleEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProfessionalScheduleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => professional_entity_1.ProfessionalEntity, professional => professional.schedules),
    __metadata("design:type", professional_entity_1.ProfessionalEntity)
], ProfessionalScheduleEntity.prototype, "professional", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfessionalScheduleEntity.prototype, "dayOfWeek", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], ProfessionalScheduleEntity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], ProfessionalScheduleEntity.prototype, "endTime", void 0);
exports.ProfessionalScheduleEntity = ProfessionalScheduleEntity = __decorate([
    (0, typeorm_1.Entity)('professional_schedules')
], ProfessionalScheduleEntity);
//# sourceMappingURL=professional_schedule.entity.js.map