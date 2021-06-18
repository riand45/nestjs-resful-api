import { ApiProperty } from '@nestjs/swagger';

export class Meta {
  @ApiProperty({
    description: 'Amount Skip Data from list',
    example: 0
  })
  skip: number;

  @ApiProperty({
    description: 'Amount Total Data from list per page',
    example: 10
  })
  limit: number;

  @ApiProperty({
    description: 'Amount total data',
    example: 1
  })
  total: number;
}