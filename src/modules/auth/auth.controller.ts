import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  authenticate(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}
