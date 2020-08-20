import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly users: any[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
        pet: { name: 'alfred', picId: 1 },
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
        pet: { name: 'gopher', picId: 2 },
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
        pet: { name: 'jenny', picId: 3 },
      },
    ];
  }

  async validateUser(username, pass): Promise<any> {
    const user = await this.users.find((us) => us.username === username && us.password == pass);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }
}
