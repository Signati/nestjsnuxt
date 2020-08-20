import {
  IncomingMessage,
  ServerResponse,
} from 'http';
import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NuxtService } from './nuxt.service';

@Injectable()
export class NuxtMiddleware implements NestMiddleware {
  constructor(
    private readonly nuxt: NuxtService,
  ) {
  }

  public use(req: IncomingMessage, res: ServerResponse) {
    const handle = this.nuxt.getApp();
   // console.log(handle.server.app.handle);
    handle.server.app.handle(req, res);
  }
}

