import { Inject, Injectable } from '@nestjs/common';
import { Booking } from './booking.entity';
import { BOOKING_REPOSITORY } from '../../core/constants';

@Injectable()
export class BookingsService {
  constructor(
    @Inject(BOOKING_REPOSITORY)
    private readonly bookingRepository: typeof Booking,
  ) { }

  async findAll(): Promise<Booking[]> {
    return await this.bookingRepository.findAll<Booking>();
  }
}
