import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { TimeRepository } from 'src/shared/database/repositories/time.repositories';

@Injectable()
export class TimeService {
  constructor(private readonly timeRepository: TimeRepository) {}

  async create(createTimeDto: CreateTimeDto, barberId: string) {
    const { time, status } = createTimeDto;

    const alreadyRegistered = await this.timeRepository.findFirst({
      where: {
        barberId: barberId,
        time: time,
      },
    });

    if (alreadyRegistered) {
      throw new ConflictException('This time is already in use');
    }

    const newTime = await this.timeRepository.create({
      data: {
        time: time,
        status: status,
        barberId: barberId,
      },
    });
    return newTime;
  }

  async findAllBarber(barberId: string) {
    const times = await this.timeRepository.findAll({
      where: {
        barberId: barberId,
        AND: {
          status: true,
        },
      },
    });
    return times;
  }

  async findOne(timeId: string, barberId: string) {
    const times = await this.timeRepository.findFirst({
      where: {
        barberId: barberId,
        id: timeId,
      },
    });
    return times;
  }

  async update(timeId: string, barberId: string, updateTimeDto: UpdateTimeDto) {
    const { status } = updateTimeDto;

    const verifyTimeExist = await this.timeRepository.findFirst({
      where: {
        id: timeId,
        barberId: barberId,
      },
    });

    if (!verifyTimeExist) {
      throw new ConflictException('This time is already in use');
    }

    const timeUpdated = await this.timeRepository.update({
      where: {
        id: timeId,
      },
      data: {
        status: status,
      },
    });

    return timeUpdated;
  }

  async remove(timeId: string, barberId: string) {
    const verifyTimeExist = await this.timeRepository.findFirst({
      where: {
        id: timeId,
        barberId: barberId,
      },
    });

    if (!verifyTimeExist) {
      throw new NotFoundException('This time not found');
    }

    await this.timeRepository.delete({ where: { id: timeId } });

    return null;
  }
}
