import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locationService: LocationsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async all() {
    return await this.locationService.findAll();
  }
}
