import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
import { UpdateBarberDto } from './dto/update-barber.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @IsPublic()
  @Post()
  create(@Body() createBarberDto: CreateBarberDto) {
    return this.barbersService.create(createBarberDto);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.barbersService.findAll();
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.barbersService.findOne(id);
  }

  @Patch('')
  update(@ActiveUserId() id: string, @Body() updateBarberDto: UpdateBarberDto) {
    return this.barbersService.update(id, updateBarberDto);
  }

  @Delete('')
  remove(@ActiveUserId() id: string) {
    return this.barbersService.remove(id);
  }
}
