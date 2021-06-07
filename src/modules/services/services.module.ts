import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServicesProviders } from './services.providers';

@Module({
  providers: [ServicesService, ...ServicesProviders],
  controllers: [ServicesController]
})
export class ServicesModule {}
