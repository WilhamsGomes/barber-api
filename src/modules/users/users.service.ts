import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepository) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, name, password, cep, phone } = createUserDto;

    const isEmailExists = await this.usersRepo.findFirst({
      where: {
        email: email,
      },
    });

    if (isEmailExists) {
      throw new ConflictException('This email is already in use');
    }

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

  async update(userId: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const { name, password, phone, cep, email } = updateUserDto;

    return await this.usersRepo.update({
      where: { id: userId },
      data: {
        cep: cep,
        email: email,
        name: name,
        password: password,
        phone: phone,
      },
    });
  }

  async delete(userId: string) {
    const user = await this.findOne(userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepo.delete({
      where: { id: userId },
    });

    return null;
  }
}
