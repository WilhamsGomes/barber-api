import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.UserCreateArgs) {
    return this.prisma.user.create(createDto);
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findFirst(findFirstDto: Prisma.UserFindFirstArgs) {
    return this.prisma.user.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.UserUpdateArgs) {
    return this.prisma.user.update(updateDto);
  }

  delete(deleteDto: Prisma.UserDeleteArgs) {
    return this.prisma.user.delete(deleteDto);
  }
}
