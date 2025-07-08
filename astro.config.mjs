// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

console.log("🔧 SITE_ENV:", process.env.SITE_ENV);

const isProd = process.env.SITE_ENV === 'prod';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: isProd
    ? 'https://integratedresponsegroup.com'
    : 'https://dev.integratedresponsegroup.com',
  base: '/',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss(), svgr()],
  },
});
