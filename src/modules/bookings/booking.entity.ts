import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Schedule } from '../schedules/schedule.entity';
import { Customer } from '../customers/customer.entity';

@Table
export class Booking extends Model<Booking> {
  @ForeignKey(() => Schedule)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  schedule_id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  date: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service_id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  status: boolean;

  @BelongsTo(() => Schedule)
  schedule: Schedule;
}