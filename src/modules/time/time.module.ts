import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { TimeRepository } from 'src/shared/database/repositories/time.repositories';

@Module({
  controllers: [TimeController],
  providers: [TimeService, TimeRepository],
})
export class TimeModule {}
