import { Module } from '@nestjs/common';

import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { schedulesProviders } from './schedules.providers';

@Module({
  providers: [SchedulesService, ...schedulesProviders],
  controllers: [SchedulesController],
})
export class SchedulesModule { }
