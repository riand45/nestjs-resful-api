import { Controller, Get } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private serviceService: ServicesService) { }

  @Get()
  async all() {
    return await this.serviceService.findAll();
  }
}
