// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://edige.info', // 👈 Necesario para generar el sitemap
  integrations: [
    tailwind(),
    sitemap() // 👈 Agregado
  ],

  experimental: {
  },

  adapter: vercel({}),
});