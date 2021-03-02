import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsController } from './diamonds.controller';
import { DiamondsService } from './diamonds.service';

describe('DiamondsController', () => {
  let controller: DiamondsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiamondsController],
      providers: [DiamondsService],
    }).compile();

    controller = module.get<DiamondsController>(DiamondsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
