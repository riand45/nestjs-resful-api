import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsEmail
} from "class-validator";
import { SharedContextDto } from 'src/interfaces/rest/shared/dto/shared-context.dto';

export class V1CreateBarbermansDto extends SharedContextDto{
  @ApiProperty({
    example: 'Jackson',
    description: 'Barber man Name',
    required: true
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @ApiProperty({
    example: 1,
    description: 'Status of Barber man',
    required: true,
    enum: [0, 1],
  })
  @IsOptional()
  @IsNumber()
  @IsIn([0, 1])
  readonly status?: number;

  @ApiProperty({
    example: 35000,
    description: 'Barber man Net Price',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    example: 30000,
    description: 'Barber man Discount Price',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price_discount: number;

  @ApiProperty({
    example: 1,
    description: 'Barber man Location Ids',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly location_id: number;

  @ApiProperty({
    example: 1,
    description: 'Barber man Status Service',
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly service: number;

  @ApiProperty({
    example: 'jackson@gmail.com',
    description: 'Barber man email',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    example: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA',
    description: 'Base64 image',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  readonly photo?: any;
}