import { BadRequestException, Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize/types';

import { BarbermansServices } from 'src/infrastructure/database/postgres/medea-db/services/barbermans.service';
import { V1CreateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-create.dto';
import { Barbermans, UpdateBarbermanPayload } from "./interfaces/v1-barbermans-usecase.interface";
/**
 * This Class contain bussiness logic and some function
 * for complement and help main method to solve bussiness logic
 */

@Injectable()
export class V1BarbermansUseCase {
  constructor(
    private barbermansServices: BarbermansServices
  ) {
  }

  public async create(
    body: V1CreateBarbermansDto,
    transaction: Transaction,
  ): Promise<any> {
    const barbermans = await this.barbermansServices.createBarbermans(body, transaction);

    return {
      data: barbermans,
    };
  }

  public async find(
    query: any
  ): Promise<{ rows: Barbermans[]; }> {
    let { sort, sortby, skip, limit } = query;
    const bind = {};

    if (sortby !== undefined) {
      if (sortby === 'id') {
        sortby = 'barber.id';
      }
    }

    const queries = {
      sort: sort && sortby ? `order by ${sortby} ${sort}` : '',
      limit: `limit ${limit} offset ${skip}`,
      bind: bind,
    };

    return this.barbermansServices.find(queries);
  }

  public async update(
    id: string,
    body: UpdateBarbermanPayload,
    transaction: Transaction
  ): Promise<Barbermans>{
    let set = '';
    const bind = {};

    if (body.name !== undefined) {
      set = `${set} name = $name`
      bind['name'] = body.name;
    }

    if (body.status !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} status=$status`;
      bind['status'] = body.status;
    }

    if (body.price !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} price=$price`;
      bind['price'] = body.price;
    }

    if (body.price_discount !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} price_discount=$price_discount`;
      bind['price_discount'] = body.price_discount;
    }

    if (body.location_id !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} location_id=$location_id`;
      bind['location_id'] = body.location_id;
    }

    if (body.service !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} service=$service`;
      bind['service'] = body.service;
    }

    if (body.email !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} email=$email`;
      bind['email'] = body.email;
    }

    if (body.photo !== undefined) {
      const comma = Object.keys(bind).length > 0 ? ',' : '';
      set = `${set} ${comma} photo=$photo`;
      bind['photo'] = body.photo;
    }

    const queries = {
      set,
      queryBind: bind,
    };

    return this.barbermansServices.updateBarbermans(id,queries,transaction)
  }
}