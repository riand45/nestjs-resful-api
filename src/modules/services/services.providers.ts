import { Service } from './service.entity';
import { SERVICE_REPOSITORY } from '../../core/constants';

export const ServicesProviders = [
  { provide: SERVICE_REPOSITORY, useValue: Service },
];
