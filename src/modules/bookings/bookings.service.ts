import { Inject, Injectable } from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingDto } from './dto/booking.dto';
import { BOOKING_REPOSITORY } from '../../core/constants';

@Injectable()
export class BookingsService {
  constructor(
    @Inject(BOOKING_REPOSITORY)
    private readonly bookingRepository: typeof Booking,
  ) { }

  async findAll(): Promise<Booking[]> {
    return await this.bookingRepository.findAll();
  }

  // async create(bookingDto: any): Promise<Booking> {
  //   const booking = new Booking();
  //   booking.schedule_id = bookingDto.schedule_id;
  //   booking.customer_id = bookingDto.customer_id;
  //   booking.service_id = bookingDto.service_id;
  //   booking.date = bookingDto.date;
  //   booking.price = bookingDto.price;
  //   return this.bookingRepository.create(booking);
  // }

  async create(data: any): Promise<Booking> {
    console.log(data)
    return this.bookingRepository.create({ ...data });
  }
}
