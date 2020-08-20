import { INestApplication, Module } from '@nestjs/common';
import { NuxtModule } from './nuxt/nuxt.module';
import { EnvModule } from './env/env.module';
import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    EnvModule,
    NuxtModule,
    AuthModule,
    SessionModule],
})
export class ConfigModule {
  public initialize(app: INestApplication) {
    // enable session store in PostgreSQL
    app.get(SessionModule).initialize(app);

    // enable passport session
    // NOTE: we must use this at the end of `app.use()` list
    app.get(AuthModule).initialize(app);
  }
}
