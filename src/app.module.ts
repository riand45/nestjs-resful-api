import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { LocationsModule } from './modules/locations/locations.module';
import { ServicesModule } from './modules/services/services.module';
import { BarbermansModule } from './modules/barbermans/barbermans.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    SchedulesModule,
    BookingsModule,
    LocationsModule,
    ServicesModule,
    BarbermansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
