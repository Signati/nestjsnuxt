import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { NuxtModule } from './config/nuxt/nuxt.module';
import { NuxtMiddleware } from './config/nuxt/nuxt.middleware';
import { SystemModule } from './system/system.module';
import { RedirectIfAuthenticatedMiddleware, RedirectIfNotAuthenticatedMiddleware } from './config/auth/middlewares';

@Module({
  imports: [
    NuxtModule,
    ConfigModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  public configure(consumer: MiddlewareConsumer) {
    // this.handleRoutes(consumer);
    this.handleAssets(consumer);
  }

  private handleRoutes(consumer: MiddlewareConsumer): void {
    consumer
      .apply(RedirectIfAuthenticatedMiddleware)
      .forRoutes({
        path: 'auth/register',
        method: RequestMethod.GET,
      });

    consumer
      .apply(RedirectIfAuthenticatedMiddleware)
      .forRoutes({
        path: 'auth/login',
        method: RequestMethod.GET,
      });

    consumer
      .apply(RedirectIfNotAuthenticatedMiddleware)
      .forRoutes(AppController);
  }

  private handleAssets(consumer: MiddlewareConsumer): void {
    consumer
      .apply(NuxtMiddleware)
      .forRoutes({
        path: '_nuxt*',
        method: RequestMethod.GET,
      }).apply(NuxtMiddleware).forRoutes({
      path: '__webpack_hmr*',
      method: RequestMethod.GET,
    });
  }
}
