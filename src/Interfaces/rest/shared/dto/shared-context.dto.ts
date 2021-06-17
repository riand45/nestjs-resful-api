import { Type } from 'class-transformer';
import {
  IsOptional,
  Allow,
  IsObject,
  IsNotEmptyObject,
  ValidateNested
} from 'class-validator';
import { SharedContextEntityDto } from "./shared-context-entity.dto";

export class SharedContextDto {
  @Allow()
  @IsOptional()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => SharedContextEntityDto)
  readonly context?: SharedContextEntityDto;
}