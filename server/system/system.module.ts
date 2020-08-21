import { Module } from '@nestjs/common';
import { NuxtModule } from '../config/nuxt/nuxt.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

@Module({
  imports: [
    NuxtModule,
    AutenticacionModule,
  ],
})
export class SystemModule {
}
