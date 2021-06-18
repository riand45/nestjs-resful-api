import { BadRequestException, Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize/types';

import { BarbermansServices } from 'src/infrastructure/database/postgres/medea-db/services/barbermans.service';
import { V1CreateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-create.dto';
import { Barbermans } from "./interfaces/v1-barbermans-usecase.interface";
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

    const queries = {
      sort: sort && sortby ? `order by ${sortby} ${sort}` : '',
      limit: `limit ${limit} offset ${skip}`,
      bind,
    };

    console.log(queries);

    return this.barbermansServices.find(queries);
  }
}