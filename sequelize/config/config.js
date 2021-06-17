// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const { env = {} } = process;
const {
  DB_DIALECT: dialect = 'postgres',
  NODE_ENV: nodeEnv = 'development'
} = env;

module.exports = {
  [nodeEnv]: {
    dialect,
    url: `${env.POSTGRE_DIALECT}://${env.POSTGRE_USER}:${env.POSTGRE_PASS}@${env.POSTGRE_HOST}:${env.POSTGRE_PORT}/${env.POSTGRE_DB_NAME}`,
    migrationStorageTableName: `_${env.PREFIX_NAME}_migrations`
  }
};
