// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ⚙️ Cambia esto por el dominio de producción (afecta sitemap y URLs canónicas).
  site: 'https://movecard.pro',

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
