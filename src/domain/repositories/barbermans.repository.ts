import { Transaction } from "sequelize/types";
import { V1CreateBarbermansDto } from 'src/interfaces/rest/barbermans/v1/barbermans/dto/v1-barbermans-create.dto';
export interface BarbermansRepository {
  createBarbermans(
    body: V1CreateBarbermansDto,
    newParams: any,
    transaction: Transaction,
  ): Promise<any>;
}