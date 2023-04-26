import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import tailwind, { tailwindGlobal, tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';

import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

import tailwindConf from '../../tailwind.config';

/**
 * Stencil will use this config below to create the Value Accessor for Angular.
 * Once you build the Stencil library, you can check the output in this file:
 * `packages/jsheroes-angular/src/directives/text-value-accessor.ts`
 */
const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['jsh-currency-field'],
    event: 'jshChange',
    targetAttr: 'value',
    type: 'text',
  },
];

const tailwindOpts = {
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
  stripComments: true,
  tailwindCssPath: resolve(__dirname, 'src/global/styles/tailwind.pcss').replace(/\\/g, '/'),
  tailwindConf: tailwindConf,
};

export const config: Config = {
  namespace: 'jsheroes',
  taskQueue: 'async',
  extras: {
    experimentalImportInjection: true,
  },
  globalStyle: resolve(__dirname, './src/global/styles/default.scss').replace(/\\/g, '/'),
  plugins: [
    sass({
      includePaths: [
        resolve(__dirname, '../../node_modules').replace(/\\/g, '/'),
        resolve(__dirname, 'src/global/styles').replace(/\\/g, '/'),
      ],
      outputStyle: 'compressed',
      sourceMap: true,
      sourceMapEmbed: true,
      sourceMapContents: true,
    }),
    tailwindGlobal(tailwindOpts),
    tailwind(tailwindOpts),
    tailwindHMR({
      tailwindConf: tailwindConf,
    }),
  ],
  outputTargets: [
    { type: 'docs-readme' },
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'docs-vscode', file: 'custom-elements.json' },
    { type: 'dist-custom-elements', customElementsExportBehavior: 'auto-define-custom-elements' },
    { type: 'www', serviceWorker: null },
    // Framework targets
    angularOutputTarget({
      componentCorePackage: '@jsheroes/core',
      directivesProxyFile: resolve(__dirname, '../jsheroes-angular/src/directives/components.ts').replace(/\\/g, '/'),
      directivesArrayFile: resolve(__dirname, '../jsheroes-angular/src/directives/index.ts').replace(/\\/g, '/'),
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    reactOutputTarget({
      componentCorePackage: '@jsheroes/core',
      proxiesFile: resolve(__dirname, '../jsheroes-react/src/components.ts').replace(/\\/g, '/'),
      includeDefineCustomElements: true,
    }),
  ],
  devServer: {
    openBrowser: false,
    port: 8001,
  },
};
