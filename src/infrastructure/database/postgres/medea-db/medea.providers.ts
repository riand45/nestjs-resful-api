import { Sequelize } from 'sequelize-typescript';
import {
  DEMO,
  DEVELOPMENT,
  LOCAL,
  LOCAL_RR,
  MEDEA_DB,
  PRODUCTION,
  RELEASE,
  STAGING
} from '../../../constants/general.constant';
import { medeaConfig } from './medea.config';

export const medeaProviders = [
  {
    provide: MEDEA_DB,
    useFactory: async () => {
      let config: any;

      switch (process.env.NODE_ENV) {
        case LOCAL:
          config = medeaConfig.single;
          break;
        case LOCAL_RR:
          config = medeaConfig.masterSlave;
          break;
        case STAGING:
        case RELEASE:
        case DEMO:
        case PRODUCTION:
          config = medeaConfig.masterSlave;
          break;
        case DEVELOPMENT:
          config = medeaConfig.single;
          break;
        default:
          config = medeaConfig.single;
      }
      const sequelize = new Sequelize(config);
      return sequelize;
    },
  },
];