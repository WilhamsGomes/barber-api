import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TimeService } from './time.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('time')
export class TimeController {
  constructor(private readonly timeService: TimeService) {}

  @Post()
  create(
    @Body() createTimeDto: CreateTimeDto,
    @ActiveUserId() barberId: string,
  ) {
    return this.timeService.create(createTimeDto, barberId);
  }

  @Get()
  findAll(@ActiveUserId() barberId: string) {
    return this.timeService.findAllBarber(barberId);
  }

  @Get(':id')
  findOne(@Param('id') timeId: string, @ActiveUserId() barberId: string) {
    return this.timeService.findOne(timeId, barberId);
  }

  @Patch(':id')
  update(
    @Param('id') timeId: string,
    @Body() updateTimeDto: UpdateTimeDto,
    @ActiveUserId() barberId: string,
  ) {
    return this.timeService.update(timeId, barberId, updateTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') timeId: string, @ActiveUserId() barberId: string) {
    return this.timeService.remove(timeId, barberId);
  }
}
