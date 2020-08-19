import { Module } from '@nestjs/common';
import { NuxtModule } from '../logics/nuxt/nuxt.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    NuxtModule,
  ],
})
export class SystemModule {
}
