import { Injectable } from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';

@Injectable()
export class BarbersService {
  constructor(private readonly barberRepos: BarberRepository) {}
  async create(createBarberDto: CreateBarberDto) {
    const {
      address,
      cep,
      city,
      district,
      email,
      name,
      number,
      owner,
      password,
      phone,
      state,
    } = createBarberDto;

    const barber = await this.barberRepos.create({
      data: {
        address,
        cep,
        city,
        district,
        email,
        name,
        number,
        owner,
        phone,
        state,
        password,
      },
    });

    return barber;
  }

  findAll() {
    return `This action returns all barbers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} barber`;
  }

  update(id: number, updateBarberDto: UpdateBarberDto) {
    return `This action updates a #${id} barber`;
  }

  remove(id: number) {
    return `This action removes a #${id} barber`;
  }
}
