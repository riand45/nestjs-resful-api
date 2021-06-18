import { ApiProperty } from '@nestjs/swagger';

export class BarbermansResponseData {
  @ApiProperty({
    example: 'Jackson',
  })
  name: string;

  @ApiProperty({
    example: 1,
  })
  status: number;

  @ApiProperty({
    example: 35000,
  })
  price: number;

  @ApiProperty({
    example: 30000,
  })
  price_discount: number;

  @ApiProperty({
    example: 1,
  })
  location_id: number;

  @ApiProperty({
    example: 1,
  })
  service: number;

  @ApiProperty({
    example: 'jackson@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA',
  })
  photo: string;
}