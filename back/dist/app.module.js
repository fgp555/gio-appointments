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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("./config/typeorm");
const seeder_module_1 = require("./seeder/seeder.module");
const seeder_service_1 = require("./seeder/seeder.service");
const patient_module_1 = require("./module/patient/patient.module");
const professional_module_1 = require("./module/professional/professional.module");
const appointment_module_1 = require("./module/appointment/appointment.module");
const specialty_module_1 = require("./module/specialty/specialty.module");
const professional_schedule_module_1 = require("./module/professional-schedule/professional-schedule.module");
const administrative_user_module_1 = require("./module/administrative-user/administrative-user.module");
let AppModule = class AppModule {
    constructor(seederService) {
        this.seederService = seederService;
    }
    async onModuleInit() {
        try {
            await this.seederService.seedAll();
            console.log('Seeders ejecutados con éxito.');
        }
        catch (error) {
            console.error('Error ejecutando los seeders:', error);
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('typeorm'),
            }),
            seeder_module_1.SeederModule,
            patient_module_1.PatientModule,
            professional_module_1.ProfessionalModule,
            appointment_module_1.AppointmentModule,
            specialty_module_1.SpecialtyModule,
            professional_schedule_module_1.ProfessionalScheduleModule,
            administrative_user_module_1.AdministrativeUserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [seeder_service_1.SeederService])
], AppModule);
//# sourceMappingURL=app.module.js.map