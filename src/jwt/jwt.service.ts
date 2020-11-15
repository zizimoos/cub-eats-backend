import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
<<<<<<< HEAD
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: JwtModuleOptions,
  ) {
    console.log(options);
  }

  sign(payload): string {
    return jwt.sign(payload, this.options.privateKey);
=======
  hello() {
    console.log('hello');
>>>>>>> parent of 6ef5f25... 5.5 JWT module done
  }
}
