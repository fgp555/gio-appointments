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
exports.ProfessionalScheduleController = void 0;
const common_1 = require("@nestjs/common");
const professional_schedule_service_1 = require("./professional-schedule.service");
let ProfessionalScheduleController = class ProfessionalScheduleController {
    constructor(scheduleService) {
        this.scheduleService = scheduleService;
    }
    async findAll() {
        return await this.scheduleService.findAll();
    }
    async findOne(id) {
        return await this.scheduleService.findOne(id);
    }
    async create(data) {
        return await this.scheduleService.create(data);
    }
    async update(id, data) {
        return await this.scheduleService.update(id, data);
    }
    async delete(id) {
        return await this.scheduleService.delete(id);
    }
};
exports.ProfessionalScheduleController = ProfessionalScheduleController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfessionalScheduleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfessionalScheduleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessionalScheduleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProfessionalScheduleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfessionalScheduleController.prototype, "delete", null);
exports.ProfessionalScheduleController = ProfessionalScheduleController = __decorate([
    (0, common_1.Controller)('professional-schedules'),
    __metadata("design:paramtypes", [professional_schedule_service_1.ProfessionalScheduleService])
], ProfessionalScheduleController);
//# sourceMappingURL=professional-schedule.controller.js.map