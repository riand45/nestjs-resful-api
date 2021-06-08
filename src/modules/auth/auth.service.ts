import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CustomersService } from '../customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateCustomer(qrcode: number, numberPhone: string) {
    //find if customer exist with this qrcode
    const customer = await this.customerService.findOneByQrcode(qrcode);
    if (!customer) {
      return null;
    }

    //find if customer phone match
    const match = await (numberPhone === customer.phone);
    if (!match) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { phone, ...result } = customer['dataValues'];
    return result;
  }

  public async login(customer) {
    const token = await this.generateToken(customer);
    return { customer, token };
  }

  private async generateToken(customer) {
    const token = await this.jwtService.signAsync(customer);
    return token;
  }
}