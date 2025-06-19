// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://dev.integratedresponsegroup.com',
  base: '/',
  // base: '/integrated-response-group/',
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});
