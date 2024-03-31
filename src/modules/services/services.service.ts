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

  async create(barberId: string, createServiceDto: CreateServiceDto) {
    const { title, price, description } = createServiceDto;

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

  async findManyByBarber(barberId: string) {
    const services = await this.serviceRepos.findAll({
      where: {
        barberId: barberId,
      },
    });

    if (!services) {
      throw new NotFoundException('services not found in barber');
    }

    return services;
  }

  async update(
    id: string,
    barberId: string,
    updateServiceDto: UpdateServiceDto,
  ) {
    const { title, description, price } = updateServiceDto;

    const isExistsService = await this.serviceRepos.findFirst({
      where: {
        id: id,
        barberId: barberId,
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

  async remove(barberId: string, id: string) {
    const isExistsService = await this.serviceRepos.findFirst({
      where: {
        id: id,
        barberId: barberId,
      },
    });

    if (!isExistsService) {
      throw new NotFoundException('service not found');
    }

    await this.serviceRepos.delete({ where: { id: id } });

    return null;
  }
}
