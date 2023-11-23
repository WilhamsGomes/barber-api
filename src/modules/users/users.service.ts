import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, name, password, cep, phone } = createUserDto;

    // return this.prisma.user.create({
    //   data: {
    //     email,
    //     name,
    //     cep,
    //     password,
    //     phone,
    //   },
    // });
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
}
