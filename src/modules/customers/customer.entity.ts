import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birth: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  qrcode: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  qrcode_image: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cuopon_curently: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cuopon_exchange: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;
}