import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogicsModule } from './logics/logics.module';
import { NuxtModule } from '../server/logics/nuxt/nuxt.module';
import { NuxtMiddleware } from '../server/logics/nuxt/nuxt.middleware';

@Module({
  imports: [
    NuxtModule,
    LogicsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  public configure(consumer: MiddlewareConsumer) {
    //this.handleRoutes(consumer);
    this.handleAssets(consumer);
  }

  private handleRoutes(consumer: MiddlewareConsumer): void {

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
