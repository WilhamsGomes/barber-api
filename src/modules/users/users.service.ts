import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, name, password, cep, phone } = createUserDto;

    const user = await this.usersRepo.create({
      data: {
        email,
        name,
        cep,
        password,
        phone,
      },
    });

    return { user };
  }

  async findAll() {
    return await this.usersRepo.findAll();
  }

  async findOne(userId: string) {
    const user = await this.usersRepo.findFirst({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        cep: true,
        phone: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
