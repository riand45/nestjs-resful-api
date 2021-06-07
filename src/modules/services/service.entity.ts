import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Service extends Model<Service> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  type: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;
}