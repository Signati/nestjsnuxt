import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NuxtService } from '../../config/nuxt/nuxt.service';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private readonly nuxt: NuxtService) {
  }

  @Get('/login')
  about(@Req() req: Request, @Res() res: Response) {
    return this.nuxt.render('/autenticacion/login', { amir: 'hola' }, req, res);
  }
}
