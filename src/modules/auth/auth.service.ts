import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDto } from './dto/signin';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
import { JwtService } from '@nestjs/jwt';
import { BarberRepository } from 'src/shared/database/repositories/barber.repositories';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepo: UserRepository,
    private readonly barbersRepo: BarberRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.usersRepo.findFirst({
      where: { email: email },
    });

    if (user && user.password === password) {
      const acessToken = await this.jwtService.signAsync({
        sub: user.id,
        entity: 'user',
      });

      return { acessToken };
    }

    const barber = await this.barbersRepo.findFirst({
      where: { email: email },
    });

    if (barber && barber.password === password) {
      const acessToken = await this.jwtService.signAsync({
        sub: barber.id,
        entity: 'barber',
      });

      return { acessToken };
    }

    throw new UnauthorizedException('Invalid credentials');
  }
}
