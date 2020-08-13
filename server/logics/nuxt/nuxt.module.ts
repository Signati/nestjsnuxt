import { Module } from '@nestjs/common';
import { Nuxt } from '@nuxt/core';
import { BundleBuilder } from '@nuxt/webpack';
import { Builder } from '@nuxt/builder';
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
    const app = await new Nuxt(config);
    config.dev = !(process.env.NODE_ENV === 'production');
    if (config.dev) {
      new Builder(app).build();
    }
    // console.log(app);
    return this.nuxt.setApp(app);
  }
}
