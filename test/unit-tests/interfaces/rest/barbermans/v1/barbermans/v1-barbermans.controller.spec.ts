import { Test, TestingModule } from '@nestjs/testing';
import { Transaction } from "sequelize";

import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
import { V1BarbermanController } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.controller';
import { V1BarbermansTransformer } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.transofrmer';

//Mock
import {
  barbermanBody,
  barbermanResponse,
  RequestCreateBarbermans
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
      expect(result.data).toHaveProperty('id');
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
      const { data } = await barbermanController.create(
        RequestCreateBarbermans,
        barbermanBody
      );
      expect(data.id).toEqual(expect.any(Number));
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
        await barbermanController.create(
          RequestCreateBarbermans,
          barbermanBody
        );
      } catch (err) {
        expect(err.message).toEqual('Something Wrong Please Try Again');
      }
    });
  });
});
