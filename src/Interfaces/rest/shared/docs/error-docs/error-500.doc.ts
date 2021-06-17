import { ApiProperty } from '@nestjs/swagger';

export class Error500 {
  @ApiProperty({
    description: 'Status Http Code',
    example: 500
  })
  status: number;

  @ApiProperty({
    description: 'Error Message',
    example: 'Something Wrong, Please Try Again'
  })
  message: string;

  @ApiProperty({
    description: 'Error Type Name of Http Status',
    example: 'Internal Server Error'
  })
  type: string;

  @ApiProperty({
    description: 'Custom Code for Error',
    example: null
  })
  code: number;
}