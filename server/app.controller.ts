import { Controller, Get, Req, Res } from '@nestjs/common';
import {
  Request,
  Response,
} from 'express';
import { AppService } from './app.service';
import { NuxtService } from './logics/nuxt/nuxt.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly nuxt: NuxtService,
  ) {
  }

  @Get()
  getHello(@Req() req: Request, @Res() res: Response) {
    return this.nuxt.render('/', { amir: 'amir' }, req, res);
  }

  @Get('/about')
  about(@Req() req: Request, @Res() res: Response) {
    return this.nuxt.render('/about', req, res);
  }

  @Get('/play/clock')
  api(@Req() req: Request, @Res() res: Response) {
    return this.nuxt.render('/play/clock', req, res);
  }
}
