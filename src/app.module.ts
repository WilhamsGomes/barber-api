import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { BarbersModule } from './modules/barbers/barbers.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule, BarbersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
