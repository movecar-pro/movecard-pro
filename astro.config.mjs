// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio para sitemap y URLs canónicas. En producción (Vercel) define
// PUBLIC_SITE_URL; default = dominio definitivo. Sin barra final.
const SITE_URL = (process.env.PUBLIC_SITE_URL ?? 'https://movecar.pro').replace(/\/+$/, '');

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  integrations: [
    // 🏝️  ISLAS REACT: habilita componentes interactivos .tsx con client:* directives.
    //     Ver src/components/islands/ y los comentarios en las secciones que las usan.
    react(),
    // 🗺️  Genera /sitemap-index.xml en build automáticamente.
    sitemap(),
  ],

  vite: {
    // 🎨 Tailwind v4 se integra como plugin de Vite (config "CSS-first", sin tailwind.config.js).
    //     Los tokens y el mapeo @theme viven en src/styles/global.css.
    plugins: [tailwindcss()],
  },
});
