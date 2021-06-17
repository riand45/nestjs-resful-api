import { Transaction } from 'sequelize';
/**
 * ===================
 * PARAMETER INTERFACE
 * ===================
 */
export interface Header {
  authorization?: string
}

export interface Request {
  url?: string,
  method?: string,
  query?: string,
  headers?: Header,
  transaction?: Transaction,
  route?: {
    path?: string
  },
  supplierId?:string
  supplierName?:string
}

/**
 * ===================
 * RESPONSES INTERFACE
 * ===================
 */
export interface Pagination {
  limit?: number,
  skip?: number
}

export interface MetaResponse {
  total: number,
  limit: number,
  skip: number
}

export interface DataResponse<T> {
  data: T
}

export interface MedeaPaginatedResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: Array<T>,
}
