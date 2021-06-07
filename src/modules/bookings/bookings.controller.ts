import { Controller, Get } from '@nestjs/common';

import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingService: BookingsService) { }

  @Get()
  async all() {
    return await this.bookingService.findAll();
  }
}
