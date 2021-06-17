import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DatabaseModule } from './core/database/database.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { ServicesModule } from './modules/services/services.module';
import { LocationsModule } from './modules/locations/locations.module';
import { BarbermansModule } from './modules/barbermans/barbermans.module';
import { CustomersModule } from './modules/customers/customers.module';
import { AuthModule } from './modules/auth/auth.module';

import { BARBERMAN_MODULE_LIST } from './barbermans-module.list';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ...BARBERMAN_MODULE_LIST,
    // DatabaseModule,
    // SchedulesModule,
    // BookingsModule,
    // ServicesModule,
    // LocationsModule,
    // BarbermansModule,
    // CustomersModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
