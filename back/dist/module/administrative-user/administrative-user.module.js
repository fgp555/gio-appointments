"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeUserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const administrative_user_entity_1 = require("../../entities/administrative_user.entity");
const administrative_user_service_1 = require("./administrative-user.service");
const administrative_user_controller_1 = require("./administrative-user.controller");
let AdministrativeUserModule = class AdministrativeUserModule {
};
exports.AdministrativeUserModule = AdministrativeUserModule;
exports.AdministrativeUserModule = AdministrativeUserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([administrative_user_entity_1.AdministrativeUserEntity])],
        providers: [administrative_user_service_1.AdministrativeUserService],
        controllers: [administrative_user_controller_1.AdministrativeUserController],
    })
], AdministrativeUserModule);
//# sourceMappingURL=administrative-user.module.js.map