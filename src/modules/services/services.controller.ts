import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post('')
  create(
    @ActiveUserId() barberId: string,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.servicesService.create(barberId, createServiceDto);
  }

  @Get('')
  findAll() {
    return this.servicesService.findAll();
  }

  @Get('/:barberId')
  findManyPerBarber(@Param('barberId') barberId: string) {
    return this.servicesService.findManyByBarber(barberId);
  }

  @Patch('/:id')
  update(
    @ActiveUserId() barberId: string,
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.servicesService.update(id, barberId, updateServiceDto);
  }

  @Delete('/:id')
  remove(@ActiveUserId() barberId: string, @Param('id') id: string) {
    return this.servicesService.remove(barberId, id);
  }
}
