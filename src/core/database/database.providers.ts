import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

import { Location } from '../../modules/locations/location.entity';
import { Service } from '../../modules/services/service.entity';
import { Barberman } from '../../modules/barbermans/barberman.entity';
import { Schedule } from '../../modules/schedules/schedule.entity';
import { Booking } from '../../modules/bookings/booking.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        Location, Service, Barberman, Schedule, Booking
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];