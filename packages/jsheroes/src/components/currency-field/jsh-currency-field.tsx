import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'jsh-currency-field',
  styleUrl: './jsh-currency-field.scss',
  shadow: true,
})
export class JshCurrencyField {
  // Own Properties
  // ====================

  private currencies: string[] = ['eur', 'usd', 'pound'];

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  /** The amount value */
  @Prop({ mutable: true }) value: string;

  /** Represent the type of currency to use */
  @Prop({ mutable: true }) currency: string = 'eur';

  // Prop lifecycle events
  // =======================

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  @Event() jshChange: EventEmitter;

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  private handleCurrencyChange = (ev: Event) => {
    const select = ev.target as HTMLSelectElement;
    if (!(select instanceof HTMLSelectElement)) return;

    this.currency = select.value;
    this.emitChangeEvent();
  };

  private handleValueChange = (ev: Event) => {
    const input = ev.target as HTMLInputElement;
    if (!(input instanceof HTMLInputElement)) return;

    this.value = input.value;
    this.emitChangeEvent();
  };

  private emitChangeEvent = () =>
    this.jshChange.emit({ currency: this.currency, value: this.value });

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <div>
        <label htmlFor="price" class="block text-sm font-medium leading-6 text-gray-900">
          Price
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {this.currency === 'eur' && <span class="text-gray-500 sm:text-sm">€</span>}
            {this.currency === 'usd' && <span class="text-gray-500 sm:text-sm">$</span>}
            {this.currency === 'pound' && <span class="text-gray-500 sm:text-sm">£</span>}
          </div>
          <input
            type="text"
            name="price"
            id="price"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            value={this.value}
            onChange={this.handleValueChange}
          />
          <div class="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" class="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              onChange={this.handleCurrencyChange}
            >
              {this.currencies.map((currency: string) => (
                <option value={currency} selected={this.currency === currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
