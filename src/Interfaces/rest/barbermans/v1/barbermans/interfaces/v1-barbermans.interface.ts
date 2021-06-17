import {
  DataResponse,
  MetaResponse,
  Request,
} from 'src/interfaces/rest/shared/interfaces/global.interface';

export interface BarbermansListResponse
  extends DataResponse<BarbermansObject[]> {}

export interface BarbermansPaginateResponse extends BarbermansListResponse {
  meta: MetaResponse;
}

export interface RequestCreateBarberman extends Request {
  id: string;
  name: string;
  status: number;
  price: number;
  price_discount: number;
  location_id: number;
  service: number;
  email: string;
  photo: string;
}

interface BarbermansObject {
  id: string;
  name: string;
  status: number;
  price: number;
  price_discount: number;
  location_id: number;
  service: number;
  email: string;
  photo: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}