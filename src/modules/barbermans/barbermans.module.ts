import { Module } from '@nestjs/common';
import { BarbermansService } from './barbermans.service';
import { BarbermansController } from './barbermans.controller';
import { BarbermansProviders } from './barbermans.providers';

@Module({
  providers: [BarbermansService, ...BarbermansProviders],
  controllers: [BarbermansController]
})
export class BarbermansModule {}
