import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TimeRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.TimeCreateArgs) {
    return this.prisma.time.create(createDto);
  }

  findAll(findAllDto?: Prisma.TimeFindManyArgs) {
    return this.prisma.time.findMany(findAllDto);
  }

  findFirst(findFirstDto: Prisma.TimeFindFirstArgs) {
    return this.prisma.time.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.TimeUpdateArgs) {
    return this.prisma.time.update(updateDto);
  }

  delete(deleteDto: Prisma.TimeDeleteArgs) {
    return this.prisma.time.delete(deleteDto);
  }
}
