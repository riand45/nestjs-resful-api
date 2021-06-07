import { Inject, Injectable } from '@nestjs/common';
import { Service } from './service.entity';
import { SERVICE_REPOSITORY } from '../../core/constants';

@Injectable()
export class ServicesService {
  constructor(
    @Inject(SERVICE_REPOSITORY)
    private readonly serviceRepository: typeof Service,
  ) { }

  async findAll(): Promise<Service[]> {
    return await this.serviceRepository.findAll<Service>();
  }
}
