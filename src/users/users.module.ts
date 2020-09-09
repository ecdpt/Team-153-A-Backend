import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule }  from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolvers';
import { User } from './models/user.model';
import { Address } from './models/address.model';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UserResolver, UsersService],
  exports:[UsersService]
})
export class UsersModule {}

