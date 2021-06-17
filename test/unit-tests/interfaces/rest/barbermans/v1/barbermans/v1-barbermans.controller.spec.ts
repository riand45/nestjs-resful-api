import { Test, TestingModule } from '@nestjs/testing';
import { Transaction } from "sequelize";

import { V1BarbermansUseCase } from 'src/application/use-cases/barbermans/v1/v1-barbermans.usecase';
import { V1BarbermanController } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.controller';
import { V1BarbermansTransformer } from 'src/Interfaces/rest/barbermans/v1/barbermans/v1-barbermans.transofrmer';

//Mock
import { barbermanResponse } from "test/shared/mocks/controllers/barbermans/barberman-data.mock";

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
});