import {
  IncomingMessage,
  ServerResponse,
} from 'http';
import { NuxtApp } from '@nuxt/types/app';
import { NuxtOptionsRender } from '@nuxt/types/config/render';
import { NuxtOptionsServer } from '@nuxt/types/config/server';

export class NuxtService {
  private app!: any;

  public setApp(app: any): void {
    this.app = app;
  }

  public getApp(): any {
    return this.app;
  }

  public async render(page: string, req: IncomingMessage, res: ServerResponse): Promise<void>

  public async render(page: string, data: any, req: IncomingMessage, res: ServerResponse): Promise<void>

  public async render(page: string, arg2: any, arg3: any, arg4?: any): Promise<void> {
    //console.log(this.app)
    if (this.isIncomingMessage(arg2)) {
      //console.log('es iscominmensage');
      await this.app.render(arg2, arg3, page);
    } else {
      //console.log(arg2);
      console.log(this.app.render);
      await this.app.render(arg3, arg4, page, arg2);
    }
  }

  private isIncomingMessage(arg: any): arg is IncomingMessage {
    return typeof arg.httpVersion === 'string';
  }
}
