import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from '../app.service';
import { NuxtService } from '../logics/nuxt/nuxt.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly nuxt: NuxtService) {
  }

  @Get('/login')
  about(@Req() req: Request, @Res() res: Response) {
    return this.nuxt.render('/auth/login', req, res);
  }
}
