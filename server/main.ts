import dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NuxtModule } from './config/nuxt/nuxt.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigModule } from './config/config.module';

const csurf = require('csurf');
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public');
  app.get(ConfigModule).initialize(app);
  app.use(csurf());
  app.get(NuxtModule).prepare().then(() => {
    app.listen(3000, () => {
      console.log(process.env);
      console.log(`[ SIGNATI ] Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    });
    // app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    //   console.log(`[ ARK ] Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    // });
  });
}

bootstrap();
