import { BadRequestException, Inject, Injectable } from '@nestjs/common';

import sequelize from "sequelize";
import { Transaction } from "sequelize/types";
import { Barbermans } from 'src/domain/repositories/interfaces/barbermans-services.interface';
import { MEDEA_DB } from 'src/infrastructure/constants/general.constant';
import { BarbermansRepository } from 'src/domain/repositories/barbermans.repository';
import { V1CreateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-create.dto';

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
        INSERT INTO "public"."bookings"
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

  async findOneByID(id: number, transaction: Transaction): Promise<Barbermans> {
    return await this.sequelize.query(
      `select 
        barber.id,
        barber.status,
        barber.price,
        barber.price_discount,
        barber.location_id,
        barber.service,
        barber.email,
        barber.photo
        from bookings as barber
        where barber.id = $id;`,
        {
          transaction,
          type: sequelize.QueryTypes.SELECT,
          bind: { id },
          logging: false,
          plain: true
        }
    );
  }
}