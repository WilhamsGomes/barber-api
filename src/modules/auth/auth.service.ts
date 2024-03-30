import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDto } from './dto/signin';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findFirst({
      where: { email: email },
    });

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const acessToken = await this.jwtService.signAsync({ sub: user.id });

    return { acessToken };
  }
}
