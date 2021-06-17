import { ApiProperty } from '@nestjs/swagger';

export class Error401 {
  @ApiProperty({
    description: 'Status Http Code',
    example: 401
  })
  status: number;

  @ApiProperty({
    description: 'Error Message',
    example: 'Unauthorized'
  })
  message: string;

  @ApiProperty({
    description: 'Error Type Name of Http Status',
    example: 'Unauthorized'
  })
  type: string;

  @ApiProperty({
    description: 'Custom Code for Error',
    example: null
  })
  code: number;
}