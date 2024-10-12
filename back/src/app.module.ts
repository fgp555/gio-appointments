// back/src/app.module.ts

import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';
import { SeederModule } from './seeder/seeder.module';
import { SeederService } from './seeder/seeder.service'; // Importa el servicio de seeder
import { PatientModule } from './module/patient/patient.module';
import { ProfessionalModule } from './module/professional/professional.module';
import { AppointmentModule } from './module/appointment/appointment.module';
import { SpecialtyModule } from './module/specialty/specialty.module';
import { ProfessionalScheduleModule } from './module/professional-schedule/professional-schedule.module';
import { AdministrativeUserModule } from './module/administrative-user/administrative-user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    SeederModule, // Asegúrate de que el SeederModule esté importado
    PatientModule,
    ProfessionalModule,
    AppointmentModule,
    SpecialtyModule,
    ProfessionalScheduleModule,
    AdministrativeUserModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  // Ejecuta los seeders cuando el módulo se inicializa
  async onModuleInit() {
    try {
      await this.seederService.seedAll();
      console.log('Seeders ejecutados con éxito.');
    } catch (error) {
      console.error('Error ejecutando los seeders:', error);
    }
  }
}
