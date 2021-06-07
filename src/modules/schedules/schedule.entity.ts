import {
  Table,
  Column,
  Model,
  DataType,
  DefaultScope,
  HasMany,
} from 'sequelize-typescript';
import { Booking } from '../bookings/booking.entity';

@DefaultScope(() => ({
  attributes: ['id', 'barberman_id', 'day_id', 'time_id', 'status']
}))

@Table
export class Schedule extends Model<Schedule> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  barberman_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  day_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  time_id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status: boolean;

  @HasMany(() => Booking)
  bookings: Booking;
}