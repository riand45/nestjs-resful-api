import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  Post,
  UseGuards,
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
  @Post(':schedule_id/:service_id')
  async create(
    @Body() booking: BookingDto,
    @Param('schedule_id') schedule_id: number,
    @Param('service_id') service_id: number,
    @Request() req
  ): Promise<Booking> {
    return await this.bookingService.create({ ...booking, schedule_id, service_id, customer_id: req.user.id });
  }
}