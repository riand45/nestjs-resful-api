import { generateMeta } from 'src/infrastructure/helper/generate-meta';
import * as moment from 'moment';
import { Pagination } from '../../../shared/interfaces/global.interface';
import { BarbermansPaginateResponse } from './interfaces/v1-barbermans.interface';

export class V1BarbermansTransformer {
  public transformFindOne(barberman: any): any {
    const newData = {
      name: barberman.name,
      status: barberman.status,
      price: barberman.price,
      price_discount: barberman.price_discount,
      location_id: barberman.location_id,
      service: barberman.service,
      email: barberman.email,
      photo: barberman.photo
    }

    return {
      data: newData,
      meta: generateMeta(10, 1, 0),
    };
  }

  public transformFind(
    barbermans: any,
    params: Pagination,
  ): BarbermansPaginateResponse {
    const newData = barbermans.map((barberman) => ({
      id: barberman.id,
      name: barberman.name,
      status: barberman.status,
      price: barberman.price,
      price_discount: barberman.price_discount,
      location_id: barberman.location_id,
      service: barberman.service,
      email: barberman.email,
      photo: barberman.photo,
      created_at: barberman.created_at,
    }));

    return {
      data: newData,
      meta: generateMeta(params.limit, params.skip),
    };
  }
}