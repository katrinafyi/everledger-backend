import { Module } from '@nestjs/common';
import { DiamondsService } from './diamonds.service';
import { DiamondsController } from './diamonds.controller';

@Module({
  controllers: [DiamondsController],
  providers: [DiamondsService]
})
export class DiamondsModule {}
