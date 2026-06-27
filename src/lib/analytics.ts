/**
 * ============================================================
 * analytics.ts — capa de eventos para GTM / GA4 / Meta.
 * ------------------------------------------------------------
 * GTM por sí solo NO mide clics de botones: solo pageviews. Aquí emitimos
 * eventos al dataLayer para que GTM (y desde ahí GA4 + Meta Pixel) puedan
 * medir las interacciones.
 *
 * `initClickTracking()` instala UN listener delegado en `document` que captura
 * el clic en cualquier <a> o <button> (sirve para HTML estático y para las
 * islas React por igual). Usa closest() para que un clic en un <i>/<span>
 * interno cuente igual al botón contenedor.
 *
 * Personalización por elemento (atributos opcionales):
 *   data-ga-event="cta_postular"   → nombre del evento (default: "cta_click")
 *   data-ga-location="navbar"      → de dónde se hizo clic
 *   data-ga-label="Quiero postular"→ etiqueta explícita (si no, usa el texto)
 *   data-ga-ignore                 → NO medir este elemento (ej. flechas/dots)
 * ============================================================
 */
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    __ctaTrackingReady?: boolean;
  }
}

/**
 * Mapa href → nombre de evento (conversiones clave). Se usa cuando el botón
 * no trae un data-ga-event explícito. Coincide por sufijo, así que sirve
 * tanto "#postular" como "/#postular".
 */
const HREF_EVENTS: Record<string, string> = {
  '#postular': 'cta_postular',
  '#descargar': 'cta_descarga',
  '#como-funciona': 'cta_como_funciona',
};

function eventFromHref(href: string): string | null {
  const match = Object.keys(HREF_EVENTS).find((k) => href === k || href.endsWith(k));
  return match ? HREF_EVENTS[match] : null;
}

/** Empuja un evento al dataLayer (lo crea si GTM aún no cargó). */
export function pushEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Instala el tracking de clics (idempotente). */
export function initClickTracking(): void {
  if (typeof document === 'undefined' || window.__ctaTrackingReady) return;
  window.__ctaTrackingReady = true;

  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>('a, button');
      if (!el || el.hasAttribute('data-ga-ignore')) return;

      const label = (el.dataset.gaLabel || el.getAttribute('aria-label') || el.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 100);

      const location =
        el.dataset.gaLocation ||
        el.closest<HTMLElement>('[data-ga-section]')?.dataset.gaSection ||
        '';

      // Prioridad: data-ga-event explícito → mapa por href → genérico.
      const eventName =
        el.dataset.gaEvent || eventFromHref(el.getAttribute('href') || '') || 'cta_click';

      pushEvent(eventName, {
        cta_label: label,
        cta_location: location,
        cta_href: el.getAttribute('href') || undefined,
      });
    },
    { capture: true },
  );
}
