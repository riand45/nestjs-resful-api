import { Test, TestingModule } from '@nestjs/testing';
import { BarbermansController } from './barbermans.controller';

describe('BarbermansController', () => {
  let controller: BarbermansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BarbermansController],
    }).compile();

    controller = module.get<BarbermansController>(BarbermansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
