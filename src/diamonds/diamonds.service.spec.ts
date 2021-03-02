import { Test, TestingModule } from '@nestjs/testing';
import { DiamondsService } from './diamonds.service';
import { CreateDiamondDto } from './dto/create-diamond.dto';
import { Color, Cut, Clarity } from './entities/diamond.entity';

describe('DiamondsService', () => {
  let service: DiamondsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiamondsService],
    }).compile();

    service = module.get<DiamondsService>(DiamondsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('/ POST', () => {
    const example1: CreateDiamondDto = {
      color: Color.G,
      cut: Cut.D,
      clarity: Clarity.SI1,
      caratWeight: 1,
    };
    const example1Hash =
      'b3356388001ac7219a88f08ab4ad03264acd01ef38be6ba8bbc5e76895f2ec4b';

    const example2: CreateDiamondDto = {
      color: Color.G,
      cut: Cut.GD,
      clarity: Clarity.VS1,
      caratWeight: 0.8,
    };
    const example2Hash =
      '8d9f1c1670723da55f5009f70af4a88e363f7fb879b23b540fe47339b620251e';

    it('correct hash for example 1', () => {
      expect(service.create(example1)).toBe(example1Hash);
    });

    it('correct hash for example 2', () => {
      expect(service.create(example2)).toBe(example2Hash);
    });

    it('works regardless of field order', () => {
      // create new DTO with caratWeight first.
      const example1Reordered = {
        caratWeight: example1.caratWeight,
        color: example1.color,
        cut: example1.cut,
        clarity: example1.clarity,
      };
      expect(service.create(example1Reordered)).toBe(example1Hash);
    });
  });
});
