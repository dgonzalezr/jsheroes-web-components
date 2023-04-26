import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'JsHeroes Angular-Demo';

  currency = 'usd';
  currencyValue = '999.80';

  /**
    Normally, the two-way binding wouldn't work without using the Angular Output Wrapper from Stencil.
    Meaning that to update the variable in the controller, we should do it manually, something like e.g:

    <jsh-currency-field currency="usd" [value]="currencyValue" (jshChange)="onChangeValue($event)"></jsh-currency-field>

    onChangeValue(ev: Event) {
      const { value } = (ev as CustomEvent).detail as { value: string };
      this.currencyValue = value;
    }
  */

  onChangeValue() {
    console.log('Value changed', this.currencyValue);
  }
}
