import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { BarbersModule } from './modules/barbers/barbers.module';
import { DatabaseModule } from './shared/database/database.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [UsersModule, DatabaseModule, BarbersModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
