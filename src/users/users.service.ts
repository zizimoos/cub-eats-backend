import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';
<<<<<<< HEAD
import { ConfigService } from '@nestjs/config';
import { JwtService } from 'src/jwt/jwt.service';
=======
>>>>>>> parent of 13c8979... .....

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
<<<<<<< HEAD
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.jwtService.hello();
    console.log(this.config.get('SECRET_KEY'));
  }
=======
  ) {}
>>>>>>> parent of 13c8979... .....

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return { ok: false, error: 'There is a user with that email already' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      return { ok: false, error: "Couldn't create account" };
    }
    // hash the password
  }
  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    // find the user with the email
    // check if the password is correct
    // make a JWT and give it to the user
    try {
      const user = await this.users.findOne({ email });
      if (!user) {
        return {
          ok: false,
          error: 'user not found',
        };
      }
      const passwordCorrect = await user.checkPassword(password);
      if (!passwordCorrect) {
        return {
          ok: false,
          error: 'wrong password',
        };
      }
      return {
        ok: true,
        token: 'happy happy',
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
