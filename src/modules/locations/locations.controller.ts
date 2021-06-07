import { Controller, Get } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) { }

  @Get()
  async all() {
    return await this.locationService.findAll();
  }
}
