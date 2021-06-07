import { Test, TestingModule } from '@nestjs/testing';
import { BarbermansService } from './barbermans.service';

describe('BarbermansService', () => {
  let service: BarbermansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BarbermansService],
    }).compile();

    service = module.get<BarbermansService>(BarbermansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
