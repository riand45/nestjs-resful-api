import { Inject, Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CUSTOMER_REPOSITORY } from '../../core/constants';

@Injectable()
export class CustomersService {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepository: typeof Customer,
  ) { }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.findAll<Customer>();
  }

  async findOneByQrcode(qrcode: number): Promise<Customer> {
    return await this.customerRepository.findOne<Customer>({
      where: { qrcode, status: 1 },
    });
  }

  async findOneById(id: number): Promise<Customer> {
    return await this.customerRepository.findOne<Customer>({
      where: { id },
    });
  }
}
