import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumberString,
} from 'class-validator';
import { SORT_TYPE } from 'src/infrastructure/constants/dictionary.constant';
import { SharedContextDto } from 'src/interfaces/rest/shared/dto/shared-context.dto';

const sortFields = ['id', 'name', 'created_at'];

export class V1FindBarbermansDto extends SharedContextDto {
  @ApiProperty({
    example: '0',
    description: 'Offset Data from List Pagination',
    required: true,
  })
  @IsNotEmpty()
  @IsNumberString()
  readonly skip: string;

  @ApiProperty({
    example: '10',
    description: 'Limit Data from List Pagination',
    required: true,
  })
  @IsNotEmpty()
  @IsNumberString()
  readonly limit: string;

  @ApiProperty({
    example: 'asc',
    description: 'Type of sort data',
    required: false,
    enum: SORT_TYPE,
  })
  @IsOptional()
  @IsString()
  @IsIn(SORT_TYPE)
  readonly sort?: string;

  @ApiProperty({
    example: 'id',
    description: 'Key of sort data',
    required: false,
    enum: sortFields,
  })
  @IsOptional()
  @IsString()
  @IsIn(sortFields)
  readonly sortby?: string;
}
