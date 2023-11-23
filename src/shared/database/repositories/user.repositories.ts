import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    return this.prisma.user.create(createDto);
  }
}
