// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/integrated-response-group/',
  vite: {
    plugins: [tailwindcss()],
  },
});
