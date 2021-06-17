import { Type } from 'class-transformer';
import {
  Allow,
  IsOptional,
  IsObject,
  ValidateNested
} from 'class-validator';

import { SharedParamsDto } from './shared-params.dto';

export class SharedContextEntityDto {
  @Allow()
  @IsOptional()
  @IsObject()
  readonly query?: any;

  @Allow()
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => SharedParamsDto)
  readonly params?: SharedParamsDto;
}