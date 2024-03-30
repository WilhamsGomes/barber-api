import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';
import { AddressRepository } from 'src/shared/database/repositories/address.repositories';

@Injectable()
export class BarbersService {
  constructor(
    private readonly barberRepos: BarberRepository,
    private readonly addressRepos: AddressRepository,
  ) {}

  async create(createBarberDto: CreateBarberDto) {
    const { email, name, owner, password, phone, street, zip, city } =
      createBarberDto;

    const isExistsEmail = await this.barberRepos.findFirst({
      where: {
        email: email,
      },
    });

    const isExistsPhone = await this.barberRepos.findFirst({
      where: {
        phone: phone,
      },
    });

    if (isExistsEmail) {
      throw new ConflictException('This email is already in use');
    }

    if (isExistsPhone) {
      throw new ConflictException('This phone is already in use');
    }

    const barber = await this.barberRepos.create({
      data: {
        email,
        name,
        owner,
        phone,
        password,
        addressId: {
          create: {
            city,
            street,
            zip,
          },
        },
      },
    });

    return barber;
  }

  async findAll() {
    const barbers = await this.barberRepos.findAll({
      include: {
        addressId: {
          select: {
            zip: true,
            street: true,
            city: true,
            latitude: true,
            longitude: true,
          },
        },
        Services: {
          select: {
            title: true,
            price: true,
            description: true,
            id: true,
          },
        },
      },
    });

    // Retirar o any!!!
    return barbers.map((item: any) => {
      const { addressId, Services, ...rest } = item;
      return {
        ...rest,
        address: addressId,
        services: Services,
      };
    });
  }

  async findOne(id: string) {
    const barber = await this.barberRepos.findFirst({
      where: {
        id: id,
      },
      include: {
        addressId: {
          select: {
            zip: true,
            street: true,
            city: true,
            latitude: true,
            longitude: true,
          },
        },
        Services: {
          select: {
            title: true,
            price: true,
            description: true,
            id: true,
          },
        },
      },
    });

    if (!barber) {
      throw new NotFoundException('Barber not found');
    }

    return barber;
  }

  async update(id: string, updateBarberDto: UpdateBarberDto) {
    const { email, name, owner, phone, street, zip, city } = updateBarberDto;

    const isExistsBarber = await this.barberRepos.findFirst({
      where: {
        id: id,
      },
    });

    if (!isExistsBarber) {
      throw new NotFoundException('Barber not found');
    }

    const isExistsEmail = await this.barberRepos.findFirst({
      where: {
        email: email,
      },
    });

    if (isExistsEmail) {
      throw new ConflictException('This email is already in use');
    }

    const barber = await this.barberRepos.update({
      data: {
        email,
        name,
        owner,
        phone,
        addressId: {
          update: {
            city,
            street,
            zip,
          },
        },
      },
      where: { id: id },
      include: {
        addressId: {
          select: {
            zip: true,
            street: true,
            city: true,
            latitude: true,
            longitude: true,
          },
        },
      },
    });

    return barber;
  }

  async remove(id: string) {
    const isExistsBarber = await this.barberRepos.findFirst({
      where: {
        id: id,
      },
    });

    if (!isExistsBarber) {
      throw new NotFoundException('Barber not found');
    }

    await this.barberRepos.delete({ where: { id: id } });

    return null;
  }
}
