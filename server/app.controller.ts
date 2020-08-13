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

    // @ts-ignore
    req.data = { amir: 'hol' };
    return this.nuxt.render('/', req, res);
  }
}
