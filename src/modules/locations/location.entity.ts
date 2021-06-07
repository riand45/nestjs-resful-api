import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Location extends Model<Location> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}