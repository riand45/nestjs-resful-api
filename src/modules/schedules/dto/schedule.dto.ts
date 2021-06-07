import { IsNotEmpty } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  readonly barberman_id: number;

  @IsNotEmpty()
  readonly day_id: number;

  @IsNotEmpty()
  readonly time_id: number;

  @IsNotEmpty()
  readonly status: boolean;
}