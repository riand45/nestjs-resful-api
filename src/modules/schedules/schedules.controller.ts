import { Controller, Get } from '@nestjs/common';
import { SchedulesService } from './schedules.service';

@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) { }

  @Get()
  async all() {
    return await this.schedulesService.findAll();
  }
}
