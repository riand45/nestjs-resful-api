import { ApiProperty } from '@nestjs/swagger';

export class Error400 {
  @ApiProperty({
    description: 'Status Http Code',
    example: 400
  })
  status: number;

  @ApiProperty({
    description: 'Error Message',
    example: '<Property> should not be empty'
  })
  message: string;

  @ApiProperty({
    description: 'Error Type Name of Http Status',
    example: 'Bad Request'
  })
  type: string;

  @ApiProperty({
    description: 'Custom Code for Error',
    example: null
  })
  code: number;
}