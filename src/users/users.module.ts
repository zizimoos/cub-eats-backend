import { Module } from '@nestjs/common';
<<<<<<< HEAD
// import { ConfigService } from '@nestjs/config';
=======
>>>>>>> parent of 13c8979... .....
import { TypeOrmModule } from '@nestjs/typeorm';
// import { JwtService } from 'src/jwt/jwt.service';
import { User } from './entities/user.entity';
import { UsersResolver } from './users.resolvers';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
