import { Test, TestingModule } from '@nestjs/testing';
import { Transaction } from "sequelize";
import { UpdateBarbermanPayload } from 'src/application/use-cases/barbermans/v1/interfaces/v1-barbermans-usecase.interface';

import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
import { generateRequest } from 'src/infrastructure/helper/generate-request';
import { V1BarbermanController } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.controller';
import { V1BarbermansTransformer } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.transformer';

//Mock
import {
  barbermanBody,
  barbermanUpdateBody,
  barbermanResponse,
  barbermanFindResponse,
  barbermanUpdateResponse,
  RequestCreateBarbermans,
  RequestBarbermanFindQuery,
 } from "test/shared/mocks/controllers/barbermans/barberman-data.mock";

describe('All Function On Barberman Controller', () => {
  let barbermanController: V1BarbermanController;
  let barbermansTransformer: V1BarbermansTransformer;
  let barbermansUseCase: V1BarbermansUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1BarbermanController],
      providers: [
        V1BarbermansTransformer,
        {
          provide: V1BarbermansUseCase,
          useValue: {
            create: jest
              .fn()
              .mockImplementation(
                (body: any, transaction: Transaction) => Promise.resolve(barbermanResponse),
              ),
            find: jest
              .fn()
              .mockImplementation(
                (body: any, transaction: Transaction) => Promise.resolve(barbermanFindResponse),
              ),
            update: jest
              .fn()
              .mockImplementation(
                (id: string, body: UpdateBarbermanPayload, transaction: Transaction) => Promise.resolve(barbermanUpdateResponse)
              ),
          }
        }
      ]
    }).compile();

    barbermanController = module.get<V1BarbermanController>(V1BarbermanController);
    barbermansUseCase = module.get<V1BarbermansUseCase>(V1BarbermansUseCase);
    barbermansTransformer = module.get<V1BarbermansTransformer>(V1BarbermansTransformer);
  });

  it('should be defined', () => {
    expect(barbermanController).toBeDefined();
    expect(barbermansUseCase).toBeDefined();
    expect(barbermansTransformer).toBeDefined();
  });

  describe('create barbermans success', () => {
    it('should return an object with data andd meta properties', async () => {
      const result = await barbermanController.create(
        RequestCreateBarbermans,
        barbermanBody
      );
      expect(typeof result).toEqual('object');
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty('name');
      expect(result.data).toHaveProperty('status');
      expect(result.data).toHaveProperty('price');
      expect(result.data).toHaveProperty('price_discount');
      expect(result.data).toHaveProperty('location_id');
      expect(result.data).toHaveProperty('service');
      expect(result.data).toHaveProperty('email');
      expect(result.data).toHaveProperty('photo');
    });

    it('should return a meta object with these propeties and values', async () => {
      const { data } = await barbermanController.create(RequestCreateBarbermans, barbermanBody);
      expect(data.name).toEqual(expect.any(String));
      expect(data.status).toEqual(expect.any(Number));
      expect(data.price).toEqual(expect.any(Number));
      expect(data.price_discount).toEqual(expect.any(Number));
      expect(data.location_id).toEqual(expect.any(Number));
      expect(data.service).toEqual(expect.any(Number));
      expect(data.email).toEqual(expect.any(String));
      expect(data.photo).toEqual(expect.any(String));
    });

    it('should return an error', async () => {
      barbermansUseCase.create = jest.fn().mockRejectedValue(new Error());
      try {
        await barbermanController.create(RequestCreateBarbermans, barbermanBody);
      } catch (err) {
        expect(err.message).toEqual('Something Wrong Please Try Again');
      }
    });
  });

  describe('list barbermans success', () => {
    it('should return an object with data and meta properties', async () => {
      const result = await barbermanController.find(RequestBarbermanFindQuery);
      const data = result.data[0];

      expect(typeof result).toEqual('object');
      expect(result).toHaveProperty('data');
      expect(data).toHaveProperty('name');
      expect(data).toHaveProperty('status');
      expect(data).toHaveProperty('price');
      expect(data).toHaveProperty('price_discount');
      expect(data).toHaveProperty('location_id');
      expect(data).toHaveProperty('service');
      expect(data).toHaveProperty('email');
      expect(data).toHaveProperty('photo');
    });

    it('should return a meta object with these properties and values', async () => {
      const result = await barbermanController.find(RequestBarbermanFindQuery);
      const data = result.data[0];

      expect(data.name).toEqual(expect.any(String));
      expect(data.status).toEqual(expect.any(Number));
      expect(data.price).toEqual(expect.any(Number));
      expect(data.price_discount).toEqual(expect.any(Number));
      expect(data.location_id).toEqual(expect.any(Number));
      expect(data.service).toEqual(expect.any(Number));
      expect(data.email).toEqual(expect.any(String));
      expect(data.photo).toEqual(expect.any(String));
    });

    it('should return an error', async () => {
      barbermansUseCase.find = jest.fn().mockRejectedValue(new Error());
      try {
        await barbermanController.find(RequestBarbermanFindQuery);
      } catch (err) {
        expect(err.message).toEqual('Something Wrong Please Try Again');
      }
    });
  });

  const patchRequest = generateRequest('put', 'v1', 'barbermans'); // method,version,endpoint
  describe('update barberman assignment success', () => {
    it('should return an object with data and meta properties', async () => {
      const result = await barbermanController.update(patchRequest, barbermanUpdateBody);

      expect(typeof result).toEqual('object');
      expect(result).toHaveProperty('data');
      expect(result.data).toHaveProperty('name');
      expect(result.data).toHaveProperty('status');
      expect(result.data).toHaveProperty('price');
      expect(result.data).toHaveProperty('price_discount');
      expect(result.data).toHaveProperty('location_id');
      expect(result.data).toHaveProperty('service');
      expect(result.data).toHaveProperty('email');
      expect(result.data).toHaveProperty('photo');

    it('should return a meta object with these properties and values', async () => {
      const { data } = await barbermanController.update(patchRequest,barbermanUpdateBody);

      expect(typeof data).toEqual('object');
      expect(data.productId).toEqual(expect.any(String));
      expect(data.name).toEqual(expect.any(String));
      expect(data.information).toEqual(expect.any(String));
      expect(data.description).toEqual(expect.any(String));
      expect(data.detail).toEqual(expect.any(String));
      expect(data.catalogueWeight).toEqual(expect.any(Number));
      if (data.catalogueDimension !== null)
        expect(data.catalogueDimension).toEqual(expect.any(Number));
      else expect(data.catalogueDimension).toEqual(null);
      if (data.packagedWeight !== null)
        expect(data.packagedWeight).toEqual(expect.any(Number));
      else expect(data.packagedWeight).toEqual(null);
      expect(data.minQty).toEqual(expect.any(Number));
      if (data.maxQty !== null) expect(data.maxQty).toEqual(expect.any(Number));
      else expect(data.maxQty).toEqual(null);
      expect(data.multipleQty).toEqual(expect.any(Number));
      expect(data.isBonus).toEqual(expect.any(Boolean));
      expect(data.isExclusive).toEqual(expect.any(Boolean));
      expect(data.isMaximum).toEqual(expect.any(Boolean));
      expect(data.catalogueTax).toEqual(expect.any(String));
      expect(data.categoryCode).toEqual(expect.any(String));
      expect(data.brand).toEqual(expect.any(String));
      expect(data.subBrand).toEqual(expect.any(String));
      expect(data.status).toEqual(expect.any(String));
      expect(data.retailBuyingPrice).toEqual(expect.any(Number));
    });

    it('should return an error', async () => {
      cataloguesUseCase.updateInfo = jest.fn().mockRejectedValue(new Error());
      try {
        await cataloguesController.patch(patchRequest, requestPayload);
      } catch (err) {
        expect(err.message).toEqual('Something Wrong Please Try Again');
      }
    });
  });
});
