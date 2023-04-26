import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

/**
  Without the Stencil React Output Target (https://stenciljs.com/docs/react),
  you might need to make React aware of Custom Elements
  and make JSX recognize your custom element tags.

  import { defineCustomElements } from '@jsheroes/core/loader';
  import type { JSX as StencilJSX } from '@jsheroes/core/dist/types';

  declare global {
    namespace JSX {
      interface IntrinsicElements extends StencilJSX.IntrinsicElements {
        'jsh-currency-field': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          currency: string;
          value: string;
        };
      }
    }
  }

  defineCustomElements();
*/

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
