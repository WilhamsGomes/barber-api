import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServicesRepository } from 'src/shared/database/repositories/services.repositories';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService, ServicesRepository, BarberRepository],
})
export class ServicesModule {}
