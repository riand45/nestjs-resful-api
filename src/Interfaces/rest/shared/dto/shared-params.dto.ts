import { IsOptional } from 'class-validator';

export class SharedParamsDto {
  @IsOptional()
  readonly id?: string;
}