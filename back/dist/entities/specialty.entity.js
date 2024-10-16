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
exports.SpecialtyEntity = void 0;
const typeorm_1 = require("typeorm");
const professional_entity_1 = require("./professional.entity");
let SpecialtyEntity = class SpecialtyEntity {
};
exports.SpecialtyEntity = SpecialtyEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SpecialtyEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpecialtyEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => professional_entity_1.ProfessionalEntity, professional => professional.specialty),
    __metadata("design:type", Array)
], SpecialtyEntity.prototype, "professionals", void 0);
exports.SpecialtyEntity = SpecialtyEntity = __decorate([
    (0, typeorm_1.Entity)('specialties')
], SpecialtyEntity);
//# sourceMappingURL=specialty.entity.js.map