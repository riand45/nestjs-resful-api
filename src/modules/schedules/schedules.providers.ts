import { Schedule } from './schedule.entity';
import { SCHEDULE_REPOSITORY } from '../../core/constants';

export const schedulesProviders = [
  { provide: SCHEDULE_REPOSITORY, useValue: Schedule },
];
