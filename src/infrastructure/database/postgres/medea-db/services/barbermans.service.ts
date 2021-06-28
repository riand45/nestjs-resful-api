import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import sequelize from "sequelize";
import { Transaction } from "sequelize/types";
import { Barbermans, BarbermanQuery, } from 'src/domain/repositories/interfaces/barbermans-services.interface';
import { MEDEA_DB } from 'src/infrastructure/constants/general.constant';
import { PaginateQuery } from 'src/domain/repositories/interfaces/global.interface';
import { BarbermansRepository } from 'src/domain/repositories/barbermans.repository';
import { V1CreateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-create.dto';
import { V1UpdateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-update.dto';

@Injectable()
export class BarbermansServices implements BarbermansRepository {
  constructor(
    @Inject(MEDEA_DB)
    private readonly sequelize,
  ) {}

  async createBarbermans(
    body: V1CreateBarbermansDto,
    transaction: Transaction,
  ): Promise<any> {
    try {
      const barberman = await this.sequelize.query(`
        INSERT INTO "public"."barbermans"
        ("name", "status", "price", "price_discount", "location_id", "service", "email", "photo")
        VALUES
        ($name,$status,$price,$price_discount,$location_id,$service,$email, $photo)
        returning id;`,
        {
          transaction,
          type: sequelize.QueryTypes.SELECT,
          logging: false,
          plain: true,
          bind: {
            name: body.name,
            status: body.status,
            price: body.price,
            price_discount: body.price_discount,
            location_id: body.location_id,
            service: body.service,
            email: body.email,
            photo: body.photo
          }
        }
      );

      return await this.findOneByID(barberman.id, transaction);

    } catch (e) {
     console.log(e);
    }
  }

  async findOneByID(id: string, transaction: Transaction): Promise<Barbermans> {
    return await this.sequelize.query(
        `select
          barber.id,
          barber.name,
          barber.status,
          barber.price,
          barber.price_discount,
          barber.location_id,
          barber.service,
          barber.email,
          barber.photo
          from barbermans as barber
          where barber.id = $id`,
        {
          transaction,
          type: sequelize.QueryTypes.SELECT,
          bind: { id: id },
          logging: false,
          plain: true
        }
    );
  }

  async find(
    queries: PaginateQuery
  ): Promise<{ rows: Barbermans[]; }> {
    const rows = await this.sequelize.query(`
        SELECT
        barber.id,
        barber.name,
        barber.status,
        barber.price,
        barber.price_discount,
        barber.location_id,
        barber.service,
        barber.email,
        barber.photo,
        barber.created_at,
        barber.updated_at,
        barber.deleted_at
        from barbermans as barber
        WHERE
        barber.deleted_at IS NULL
        ${queries.sort} ${queries.limit};`,
      {
        raw: true,
        type: sequelize.QueryTypes.SELECT,
        bind: queries.bind,
        logging: false
      });

      return {
        rows,
      };
  }

  async updateBarbermans(
    id: string,
    queries: BarbermanQuery,
    transaction: Transaction
  ): Promise<Barbermans>{
    const barberman = await this.sequelize.query(
      `UPDATE
        barbermans
      SET
        ${queries.set}
      WHERE
        barbermans.id = '${id}'
      RETURNING *`,
      {
        raw: true,
        type: sequelize.QueryTypes.UPDATE,
        bind: queries.queryBind,
        transaction
      }
    );

    if (barberman.length > 0) {
      const data = barberman[0][0];

      return await this.findOneByID(data.id, transaction);
    } else {
      return null;
    }
  }
}