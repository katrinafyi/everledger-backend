import { Injectable, Get } from '@nestjs/common';

@Injectable()
export class HealthService {
  private startTime: Date;

  constructor() {
    this.startTime = new Date();
  }

  @Get()
  getUptime(): number {
    return new Date().getTime() - this.startTime.getTime();
  }
}
