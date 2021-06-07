import { Module } from '@nestjs/common';

import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { BookingsProviders } from './bookings.providers';

@Module({
  providers: [BookingsService, ...BookingsProviders],
  controllers: [BookingsController],
})
export class BookingsModule { }
