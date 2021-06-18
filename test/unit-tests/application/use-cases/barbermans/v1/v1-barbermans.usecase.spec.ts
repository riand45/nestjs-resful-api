import { Test, TestingModule } from '@nestjs/testing';
import { Transaction } from 'sequelize/types';
import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
import { BarbermansServices } from 'src/infrastructure/database/postgres/medea-db/services/barbermans.service';
import {
  responseBarbermans,
  barbermanBody,
  transactionObject
} from "test/shared/mocks/use-cases/barbermans-usecase.mock";

describe('SCV1BarbermansUseCase', () => {
  let barbermansUseCase: V1BarbermansUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        V1BarbermansUseCase,
        {
          provide: BarbermansServices,
          useValue: {
            createBarbermans: jest.fn().mockResolvedValue(responseBarbermans)
          }
        }
      ]
    }).compile();

    barbermansUseCase = module.get<V1BarbermansUseCase>(V1BarbermansUseCase);
  });

  it('should be defined', () =>{
    expect(barbermansUseCase).toBeDefined();
  });

  describe('create barbermans success', () => {
    it('should return an object with these properties', async ()=> {
      const result = await barbermansUseCase.create(barbermanBody, transactionObject);

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

    it('should return a meta object with these properties and values', async () => {
      const { data } = await barbermansUseCase.create(barbermanBody, transactionObject);

      expect(data.name).toEqual(expect.any(String));
      expect(data.status).toEqual(expect.any(Number));
      expect(data.price).toEqual(expect.any(Number));
      expect(data.price_discount).toEqual(expect.any(Number));
      expect(data.location_id).toEqual(expect.any(Number));
      expect(data.service).toEqual(expect.any(Number));
      expect(data.email).toEqual(expect.any(String));
      expect(data.photo).toEqual(expect.any(String));
    })

    it('should return an error', async () => {
      barbermansUseCase.create = jest.fn().mockRejectedValue(new Error());
      try {
        await barbermansUseCase.create( barbermanBody, transactionObject);
      }catch (err) {
        expect(err.message).toEqual('');
      }
    })
  });
});