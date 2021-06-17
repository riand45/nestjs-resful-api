import * as dotenv from 'dotenv';

import { DbMedeaConfig } from './interfaces/medea.interface';

dotenv.config();

export const medeaConfig: DbMedeaConfig = {
  // Connection if you use master slave db scheme
  masterSlave: {
    dialect: process.env.POSTGRE_MEDEA_DIALECT,
    replication: {
      read: [
        {
          port: process.env.POSTGRE_MEDEA_PORT_READ_0,
          host: process.env.POSTGRE_MEDEA_HOST_READ_0,
          username: process.env.POSTGRE_MEDEA_USER_READ_0,
          password: process.env.POSTGRE_MEDEA_PASS_READ_0,
          database: process.env.POSTGRE_MEDEA_DB_NAME_READ_0
        }
      ],
      write: {
        port: process.env.POSTGRE_MEDEA_PORT,
        host: process.env.POSTGRE_MEDEA_HOST,
        username: process.env.POSTGRE_MEDEA_USER,
        password: process.env.POSTGRE_MEDEA_PASS,
        database: process.env.POSTGRE_MEDEA_DB_NAME
      }
    },
    pool: {
      min: parseInt(process.env.POSTGRE_MEDEA_POOL_MIN),
      max: parseInt(process.env.POSTGRE_MEDEA_POOL_MAX),
      acquire: parseInt(process.env.POSTGRE_MEDEA_POOL_ACQUIRE),
      idle: parseInt(process.env.POSTGRE_MEDEA_POOL_IDLE)
    }
  },
  // Connection if you use single db
  single: {
    username: process.env.POSTGRE_MEDEA_USER,
    password: process.env.POSTGRE_MEDEA_PASS,
    database: process.env.POSTGRE_MEDEA_DB_NAME,
    host: process.env.POSTGRE_MEDEA_HOST,
    port: process.env.POSTGRE_MEDEA_PORT,
    dialect: process.env.POSTGRE_MEDEA_DIALECT,
    pool: {
      min: parseInt(process.env.POSTGRE_MEDEA_POOL_MIN),
      max: parseInt(process.env.POSTGRE_MEDEA_POOL_MAX),
      acquire: parseInt(process.env.POSTGRE_MEDEA_POOL_ACQUIRE),
      idle: parseInt(process.env.POSTGRE_MEDEA_POOL_IDLE)
    }
  },
};