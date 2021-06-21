import { Transaction } from 'sequelize';
export interface PaginateQuery {
  where?: string;
  keyword?: string;
  bind?: any;
  sort?: string;
  limit: string;
}

export interface Request {
  url?: string,
  method?: string,
  query?: string,
  transaction?: Transaction,
  route?: {
    path?: string
  },
}