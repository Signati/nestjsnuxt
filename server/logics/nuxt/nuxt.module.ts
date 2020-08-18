import { Module } from '@nestjs/common';
import { Builder, Nuxt } from 'nuxt';

import { BundleBuilder } from '@nuxt/webpack';
import { Server } from '@nuxt/server';
import { NuxtAppOptions, Context, ServerMiddleware } from '@nuxt/types';
import { NuxtService } from './nuxt.service';
import config from '../../../nuxt.config';

type NextServerConstructor = Omit<NuxtAppOptions, 'staticMarkup'> & {
  dev?: boolean;
}

@Module({
  providers: [
    NuxtService,
  ],
  exports: [
    NuxtService,
  ],
})
export class NuxtModule {

  constructor(
    private readonly nuxt: NuxtService,
  ) {
  }

  public async prepare(options?: NextServerConstructor) {
    let app: any;
    if (process.env.mode === 'production') {
      config.dev = false;
      app = new Nuxt(config);
    } else if (process.env.IS_NUXT_ENABLED) {
      app = new Nuxt(config);
      new Builder(app).build();
    }
    // console.log(app);
    // return app.server().then(() => this.nuxt.setApp(app));
    return this.nuxt.setApp(app);
  }
}
