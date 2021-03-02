import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthService } from './health/health.service';
import { DiamondsController } from './diamonds/diamonds.controller';
import { DiamondsService } from './diamonds/diamonds.service';
import { DiamondsModule } from './diamonds/diamonds.module';

@Module({
  imports: [DiamondsModule],
  controllers: [AppController],
  providers: [AppService, HealthService],
})
export class AppModule {}
