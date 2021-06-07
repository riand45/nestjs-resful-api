import { Inject, Injectable } from '@nestjs/common';
import { Schedule } from './schedule.entity';
import { SCHEDULE_REPOSITORY } from '../../core/constants';
import { Sequelize } from 'sequelize-typescript';
import { Booking } from '../bookings/booking.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @Inject(SCHEDULE_REPOSITORY)
    private readonly scheduleRepository: typeof Schedule,
  ) { }

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.findAll<Schedule>({
      attributes: [
        'id',
        'barberman_id',
        'day_id',
        'time_id',
        'status',
        [
          Sequelize.literal(
            `( SELECT IF(bookings.date >= '2021-06-03' AND bookings.date <= '2021-06-10', bookings.customer_id, NULL) )`,
          ),
          'booking_customer',
        ],
        [
          Sequelize.literal(
            `( SELECT IF(bookings.date >= '2021-06-03' AND bookings.date <= '2021-06-10', bookings.date, NULL)  )`,
          ),
          'booking_date',
        ],
      ],
      include: [{ model: Booking, required: false }],
    });
  }
}
