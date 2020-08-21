import { Module } from '@nestjs/common';
import { AutenticacionController } from './autenticacion.controller';
import { NuxtModule } from '../../config/nuxt/nuxt.module';

@Module({
  imports: [NuxtModule],
  controllers: [AutenticacionController],
})
export class AutenticacionModule {
}
