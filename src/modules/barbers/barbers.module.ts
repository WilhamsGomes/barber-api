import { Module } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { BarbersController } from './barbers.controller';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';

@Module({
  controllers: [BarbersController],
  providers: [BarbersService, BarberRepository],
})
export class BarbersModule {}
