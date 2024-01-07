import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AddressRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.AddressCreateArgs) {
    return this.prisma.address.create(createDto);
  }
}
