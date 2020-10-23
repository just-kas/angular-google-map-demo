import { NgModuleRef, ApplicationRef } from '@angular/core';

import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = async (module: any, bootstrap: () => Promise<NgModuleRef<any>>) => {
  module.hot.accept();
  const ngModule = await bootstrap();

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((component) => component.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
};
