"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalScheduleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const professional_schedule_entity_1 = require("../../entities/professional_schedule.entity");
const professional_schedule_service_1 = require("./professional-schedule.service");
const professional_schedule_controller_1 = require("./professional-schedule.controller");
let ProfessionalScheduleModule = class ProfessionalScheduleModule {
};
exports.ProfessionalScheduleModule = ProfessionalScheduleModule;
exports.ProfessionalScheduleModule = ProfessionalScheduleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([professional_schedule_entity_1.ProfessionalScheduleEntity])],
        providers: [professional_schedule_service_1.ProfessionalScheduleService],
        controllers: [professional_schedule_controller_1.ProfessionalScheduleController],
    })
], ProfessionalScheduleModule);
//# sourceMappingURL=professional-schedule.module.js.map