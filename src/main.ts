import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
  window.console.log = function() {};
  window.console.info = function() {};
  window.console.warn = function() {};
  window.console.error = function() {};
  window.console.debug = function() {};
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  // tslint:disable-next-line: no-string-literal
  // @ts-ignore
  if (module['hot']) {
    // @ts-ignore
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server !');
    console.log('Are you using the --hmr flag for ng serve ?');
  }
} else {
  bootstrap().catch((err) => console.error(err));
}
