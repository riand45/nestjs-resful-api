import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookingsService } from './bookings.service';
import { BookingDto } from './dto/booking.dto';
import { Booking } from './booking.entity';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingService: BookingsService) { }

  @Get()
  async all() {
    return await this.bookingService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Body(new ValidationPipe()) booking: BookingDto,
    @Body('schedule_id') schedule_id: number,
    @Body('customer_id') customer_id: number,
    @Body('date') date: string,
    @Body('price') price: number,
    @Body('service_id') service_id: number,
    @Body('status') status: number,
  ): Promise<Booking> {
    console.log(booking);
    return await this.bookingService.create({
      schedule_id,
      customer_id,
      date,
      price,
      service_id,
      status,
    });
  }
}
