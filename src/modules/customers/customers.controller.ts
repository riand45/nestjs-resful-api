import { Controller, Get } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('Customers')
export class CustomersController {
  constructor(private customerService: CustomersService) { }

  @Get()
  async all() {
    return await this.customerService.findAll();
  }
}
