// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  experimental: {
    env: {
      schema: {
        FORM_ID: envField.string({
          context: 'client',
          access: 'public',
          optional: false,
        }),
      }
    },
    serverIslands: true,
  }
});