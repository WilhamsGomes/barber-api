import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ServicesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.ServicesCreateArgs) {
    return this.prisma.services.create(createDto);
  }

  findAll(findAllDto?: Prisma.ServicesFindManyArgs) {
    return this.prisma.services.findMany(findAllDto);
  }

  findFirst(findFirstDto: Prisma.ServicesFindFirstArgs) {
    return this.prisma.services.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.ServicesUpdateArgs) {
    return this.prisma.services.update(updateDto);
  }

  delete(deleteDto: Prisma.ServicesDeleteArgs) {
    return this.prisma.services.delete(deleteDto);
  }
}
