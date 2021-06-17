import { ApiProperty } from '@nestjs/swagger';

export class Error404 {
  @ApiProperty({
    description: 'Status Http Code',
    example: 404
  })
  status: number;

  @ApiProperty({
    description: 'Error Message',
    example: '<Property> is Not Found'
  })
  message: string;

  @ApiProperty({
    description: 'Error Type Name of Http Status',
    example: 'Not Found'
  })
  type: string;

  @ApiProperty({
    description: 'Custom Code for Error',
    example: null
  })
  code: number;
}