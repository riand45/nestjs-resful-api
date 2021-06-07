import { Controller, Get } from '@nestjs/common';
import { BarbermansService } from './barbermans.service';

@Controller('barbermans')
export class BarbermansController {
  constructor(private barbermanService: BarbermansService) { }

  @Get()
  async all() {
    return await this.barbermanService.findAll();
  }
}
