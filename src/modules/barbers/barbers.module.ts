import { Module } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { BarbersController } from './barbers.controller';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';
import { AddressRepository } from 'src/shared/database/repositories/address.repositories';

@Module({
  controllers: [BarbersController],
  providers: [BarbersService, BarberRepository, AddressRepository],
})
export class BarbersModule {}
