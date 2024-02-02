import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesRepository } from 'src/shared/database/repositories/services.repositories';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';

@Injectable()
export class ServicesService {
  constructor(
    private readonly serviceRepos: ServicesRepository,
    private readonly barberRepos: BarberRepository,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    const { title, price, description, barberId } = createServiceDto;

    const barberExists = await this.barberRepos.findFirst({
      where: {
        id: barberId,
      },
    });

    if (!barberExists) {
      throw new NotFoundException('barber not found');
    }

    const barber = await this.serviceRepos.create({
      data: {
        title,
        description,
        price,
        barberId,
      },
    });

    return { barber };
  }

  async findAll() {
    return await this.serviceRepos.findAll();
  }

  async findOne(id: string) {
    const service = await this.serviceRepos.findFirst({
      where: {
        id: id,
      },
    });

    if (!service) {
      throw new NotFoundException('service not found');
    }

    return service;
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    const { title, description, price } = updateServiceDto;

    const isExistsService = await this.serviceRepos.findFirst({
      where: {
        id: id,
      },
    });

    if (!isExistsService) {
      throw new NotFoundException('service not found');
    }

    const service = await this.serviceRepos.update({
      data: {
        title,
        description,
        price,
      },
      where: { id: id },
    });

    return service;
  }

  async remove(id: string) {
    const isExistsService = await this.serviceRepos.findFirst({
      where: {
        id: id,
      },
    });

    if (!isExistsService) {
      throw new NotFoundException('service not found');
    }

    await this.serviceRepos.delete({ where: { id: id } });

    return null;
  }
}
