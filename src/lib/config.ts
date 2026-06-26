/**
 * ============================================================
 * CONFIGURACIÓN GLOBAL DEL SITIO — feature flags y constantes.
 * Se lee desde variables de entorno (PUBLIC_* para que lleguen al
 * cliente). Ver .env.example. Todas tienen un default seguro para dev.
 * ============================================================
 */

/**
 * 🖼️  GESTIÓN DE IMÁGENES (requisito del brief).
 * En desarrollo dejamos placeholders (no se necesitan assets reales).
 * Cuando tengas las imágenes en /public/assets/images/, define
 * PUBLIC_USE_REAL_IMAGES=true en tu .env y el componente <Placeholder />
 * servirá el archivo real en vez del bloque marcador.
 */
export const USE_REAL_IMAGES: boolean = import.meta.env.PUBLIC_USE_REAL_IMAGES === 'true';

/** Ruta base pública donde vivirán los assets de imagen. */
export const IMAGE_BASE = '/assets/images';

/**
 * 📊  ANALÍTICA / TRACKING.
 * Pega aquí (o en .env) el ID de Google Analytics 4. Si está vacío,
 * BaseLayout NO inyecta ningún script de tracking (ideal para dev/preview).
 * Ver el bloque <!-- ANALYTICS --> en src/layouts/BaseLayout.astro.
 */
export const GA_MEASUREMENT_ID: string = import.meta.env.PUBLIC_GA_ID ?? '';

/**
 * 🏷️  Google Tag Manager. Si está vacío, NO se inyecta GTM (así el preview
 * de Netlify para stakeholders no mide tráfico interno). Define PUBLIC_GTM_ID
 * SOLO en producción (Vercel): PUBLIC_GTM_ID=GTM-XXXXXXX.
 */
export const GTM_CONTAINER_ID: string = import.meta.env.PUBLIC_GTM_ID ?? '';

/**
 * 🔎  noindex. Cuando PUBLIC_NOINDEX=true, BaseLayout agrega
 * <meta name="robots" content="noindex"> — úsalo en el preview de Netlify
 * para que el sitio de staging no se indexe ni compita en Google.
 */
export const NOINDEX: boolean = import.meta.env.PUBLIC_NOINDEX === 'true';

/**
 * 🌐  URL canónica del sitio. En producción (Vercel) define PUBLIC_SITE_URL.
 * Default = dominio definitivo. Se le quita la barra final por prolijidad.
 */
const SITE_URL = (import.meta.env.PUBLIC_SITE_URL ?? 'https://movecar.pro').replace(/\/+$/, '');

/** Metadatos por defecto para <head>. */
export const SITE = {
  name: 'Move Card Pro',
  shortName: 'MoveCard',
  url: SITE_URL,
  defaultTitle: 'Move Card Pro — Genera ganancias sin auto propio',
  defaultDescription:
    'Súmate a la plataforma de electromovilidad más moderna de Chile. Genera ingresos manejando un vehículo eléctrico con seguro, mantención, carga y soporte 24/7 incluidos.',
  locale: 'es_CL',
  ogImage: `${IMAGE_BASE}/og/og-default.jpg`,
} as const;
