import { IsNotEmpty } from 'class-validator';

export class BookingDto {
  // @IsNotEmpty()
  // readonly schedule_id: number;

  // @IsNotEmpty()
  // readonly customer_id: number;

  @IsNotEmpty()
  readonly date: string;

  @IsNotEmpty()
  readonly price: number;

  // @IsNotEmpty()
  // readonly service_id: number;

  @IsNotEmpty()
  readonly status: number;
}