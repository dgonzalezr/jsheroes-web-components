import TailwindCssForms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['packages/jsheroes/**/*.{jsx,js,tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [TailwindCssForms],
};

export default config;
