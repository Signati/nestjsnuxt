import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NuxtModule } from './logics/nuxt/nuxt.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public');
  app.get(NuxtModule).prepare().then(() => {
    app.listen(3000);
    // app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
    //   console.log(`[ ARK ] Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    // });
  });
}
bootstrap();
