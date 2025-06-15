import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserEntityProvider } from './userentity.provider';
import { UserService } from './user.service';
import { UserController } from './user.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...UserEntityProvider, UserService],
})
export class UserModule {}