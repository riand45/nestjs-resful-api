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

  async findAll(barbermanId: number, start_date: string, end_date: string): Promise<Schedule[]> {
    return await this.scheduleRepository.findAll<Schedule>({
      attributes: [
        'id',
        'barberman_id',
        'day_id',
        'time_id',
        'status',
        [
          Sequelize.literal(
            `( SELECT IF(bookings.date >= '${start_date}' AND bookings.date <= '${end_date}', bookings.customer_id, NULL) )`,
          ),
          'booking_customer',
        ],
        [
          Sequelize.literal(
            `( SELECT IF(bookings.date >= '${start_date}' AND bookings.date <= '${end_date}', bookings.date, NULL)  )`,
          ),
          'booking_date',
        ],
      ],
      include: [{ model: Booking, required: false }],
      where: { barberman_id: barbermanId }
    });
  }
}
