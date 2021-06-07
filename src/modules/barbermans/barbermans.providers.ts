import { Barberman } from './barberman.entity';
import { BARBERMAN_REPOSITORY } from '../../core/constants';

export const BarbermansProviders = [
  { provide: BARBERMAN_REPOSITORY, useValue: Barberman },
];
