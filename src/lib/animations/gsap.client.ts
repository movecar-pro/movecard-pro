/**
 * ============================================================
 * GSAP — REGISTRO CENTRAL (solo cliente)
 * ------------------------------------------------------------
 * Punto único donde se importa y se registran los plugins de GSAP.
 * Cualquier animación del sitio debe importar `gsap` y `ScrollTrigger`
 * desde AQUÍ, no desde 'gsap' directamente, para garantizar que los
 * plugins están registrados una sola vez.
 *
 * ➕ ¿Necesitas otro plugin (Flip, Draggable, SplitText…)? Impórtalo
 *    aquí, regístralo en `registerGsap()` y reexpórtalo abajo.
 * ============================================================
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/** Registra los plugins una sola vez. Idempotente. */
export function registerGsap(): void {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  // Easing por defecto alineado al token de marca --ease-out.
  gsap.defaults({ ease: 'power3.out', duration: 0.8 });
  registered = true;
}

/** ¿El usuario pidió menos movimiento? Respetar accesibilidad. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export { gsap, ScrollTrigger };
