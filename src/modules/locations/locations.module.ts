import { Module } from '@nestjs/common';

import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { LocationsProviders } from './locations.providers';

@Module({
  providers: [LocationsService, ...LocationsProviders],
  controllers: [LocationsController],
})
export class LocationsModule {}
