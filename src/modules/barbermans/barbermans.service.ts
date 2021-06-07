import { Inject, Injectable } from '@nestjs/common';
import { Barberman } from './barberman.entity';
import { BARBERMAN_REPOSITORY } from '../../core/constants';

@Injectable()
export class BarbermansService {
  constructor(
    @Inject(BARBERMAN_REPOSITORY)
    private readonly barbermanRepository: typeof Barberman,
  ) { }

  async findAll(): Promise<Barberman[]> {
    return await this.barbermanRepository.findAll<Barberman>();
  }
}
