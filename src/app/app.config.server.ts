import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './core/services/interceptors/http/token.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), provideHttpClient(
    withInterceptors([TokenInterceptor])
  )],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
