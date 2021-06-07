import { Booking } from './booking.entity';
import { BOOKING_REPOSITORY } from '../../core/constants';

export const BookingsProviders = [
  { provide: BOOKING_REPOSITORY, useValue: Booking },
];
