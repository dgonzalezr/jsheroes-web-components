import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { defineCustomElements } from '@jsheroes/core/loader';

import { DIRECTIVES } from './directives';

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        return defineCustomElements();
      },
    },
  ],
})
export class JsHeroesModule {
  static forRoot(): ModuleWithProviders<JsHeroesModule> {
    return {
      ngModule: JsHeroesModule,
    };
  }
}
