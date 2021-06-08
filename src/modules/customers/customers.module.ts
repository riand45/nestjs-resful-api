import { Module } from '@nestjs/common';

import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { customersProviders } from './customers.providers';

@Module({
  providers: [CustomersService, ...customersProviders],
  exports: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule { }
