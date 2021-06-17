import { ApiProperty } from '@nestjs/swagger';

export class Error403 {
  @ApiProperty({
    description: 'Status Http Code',
    example: 403
  })
  status: number;

  @ApiProperty({
    description: 'Error Message',
    example: 'This <Property> Phone already exist'
  })
  message: string;

  @ApiProperty({
    description: 'Error Type Name of Http Status',
    example: 'Forbidden'
  })
  type: string;

  @ApiProperty({
    description: 'Custom Code for Error',
    example: null
  })
  code: number;
}
