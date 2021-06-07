import { Location } from './location.entity';
import { LOCATION_REPOSITORY } from '../../core/constants';

export const LocationsProviders = [
  { provide: LOCATION_REPOSITORY, useValue: Location },
];
