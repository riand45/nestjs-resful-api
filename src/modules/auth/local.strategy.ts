import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(qrcode: number, phone: string): Promise<any> {
    const customer = await this.authService.validateCustomer(qrcode, phone);
    if (!customer) {
      throw new UnauthorizedException('Invalid customer credentials');
    }
    return customer;
  }
}