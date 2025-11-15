import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://urban-board-collective.pages.dev',
  build: {
    format: 'directory'
  }
});
