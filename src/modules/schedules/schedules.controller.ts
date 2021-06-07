import { Controller, Get, Param } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) { }

  @Get(':barbermanId/:start_date/:end_date')
  async all(
    @Param('barbermanId') barbermanId: number,
    @Param('start_date') start_date: string,
    @Param('end_date') end_date: string
  ) {
    return await this.schedulesService.findAll(
      barbermanId, start_date, end_date
    );
  }
}
