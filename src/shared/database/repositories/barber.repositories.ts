import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BarberRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.BarberCreateArgs) {
    return this.prisma.barber.create(createDto);
  }

  findAll(findAllDto?: Prisma.BarberFindManyArgs) {
    return this.prisma.barber.findMany(findAllDto);
  }

  findFirst(findFirstDto: Prisma.BarberFindFirstArgs) {
    return this.prisma.barber.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.BarberUpdateArgs) {
    return this.prisma.barber.update(updateDto);
  }

  delete(deleteDto: Prisma.BarberDeleteArgs) {
    return this.prisma.barber.delete(deleteDto);
  }
}
