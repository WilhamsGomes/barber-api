import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseUUIDPipe) userId: string,
  ) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) userId: string) {
    return this.usersService.delete(userId);
  }
}
