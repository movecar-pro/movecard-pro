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

/** Metadatos por defecto para <head>. */
export const SITE = {
  name: 'Move Card Pro',
  shortName: 'MoveCard',
  url: 'https://movecard.pro',
  defaultTitle: 'Move Card Pro — Genera ganancias sin auto propio',
  defaultDescription:
    'Súmate a la plataforma de electromovilidad más moderna de Chile. Genera ingresos manejando un vehículo eléctrico con seguro, mantención, carga y soporte 24/7 incluidos.',
  locale: 'es_CL',
  ogImage: `${IMAGE_BASE}/og/og-default.jpg`,
} as const;
