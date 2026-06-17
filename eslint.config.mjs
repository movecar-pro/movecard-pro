// @ts-check
/**
 * ESLint flat config (ESLint 9) — entiende .astro, .ts/.tsx y .jsx.
 * - typescript-eslint: parser para TS (frontmatter .astro, islas, lib/).
 * - eslint-plugin-astro: parser + reglas para componentes Astro.
 * - jsx-a11y: accesibilidad en las islas React.
 * El ORDEN de clases Tailwind lo arregla Prettier (no ESLint) — ver .prettierrc.
 */
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    // Variables globales del navegador en scripts de cliente.
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
      },
    },
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'public/'],
  },
);
