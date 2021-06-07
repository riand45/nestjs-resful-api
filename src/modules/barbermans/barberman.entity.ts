import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Barberman extends Model<Barberman> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  photo: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price_discount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  location_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;
}