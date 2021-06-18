export interface PaginateQuery {
  where?: string;
  keyword?: string;
  bind?: any;
  sort?: string;
  limit: string;
}