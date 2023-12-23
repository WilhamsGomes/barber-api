import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repositories';
import { BarberRepository } from './repositories/barber.repositories';

@Global()
@Module({
  providers: [PrismaService, UserRepository, BarberRepository],
  exports: [PrismaService, UserRepository, BarberRepository],
})
export class DatabaseModule {}
