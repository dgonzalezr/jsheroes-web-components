import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsHeroesModule, TextValueAccessor } from '@jsheroes/angular';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const VALUE_ACCESORS = [TextValueAccessor];

@NgModule({
  declarations: [AppComponent, ...VALUE_ACCESORS],
  imports: [JsHeroesModule.forRoot(), BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
