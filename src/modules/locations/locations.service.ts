import { Inject, Injectable } from '@nestjs/common';
import { Location } from './location.entity';
import { LOCATION_REPOSITORY } from '../../core/constants';

@Injectable()
export class LocationsService {
  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepository: typeof Location,
  ) { }

  async findAll(): Promise<Location[]> {
    return await this.locationRepository.findAll<Location>();
  }
}
