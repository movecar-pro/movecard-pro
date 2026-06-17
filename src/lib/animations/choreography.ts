/**
 * ============================================================
 * COREOGRAFÍA DE ANIMACIONES — HOME
 * ------------------------------------------------------------
 * Define la "danza" de entrada de la landing. Filosofía (nivel Awwwards):
 *   · Restraint > exceso: opacidad + desplazamientos cortos (y/clip),
 *     nunca rebotes ni loops infinitos (alineado al readme del DS).
 *   · Jerarquía: el hero entra en timeline secuenciado (eyebrow → título
 *     → subtítulo → CTAs → bullets → imagen) para guiar la mirada.
 *   · El resto entra "on scroll" con ScrollTrigger y un leve stagger.
 *   · Easing y duración derivados de los tokens de marca.
 *
 * 🧩 CÓMO AÑADIR UNA NUEVA ANIMACIÓN (sin fricción):
 *   1. En tu markup, marca el elemento con `data-gsap="<preset>"`
 *      (p.ej. data-gsap="fade-up"). Estados iniciales en `PRESETS`.
 *   2. Si es un grupo con stagger, envuelve en un contenedor con
 *      `data-gsap-group` y los hijos con `data-gsap`.
 *   3. Para algo a medida, añade un bloque nuevo dentro de
 *      `initHomeChoreography()` siguiendo los ejemplos. Mantén todo
 *      aquí para no esparcir lógica de animación por los componentes.
 * ============================================================
 */
import { registerGsap, gsap, ScrollTrigger, prefersReducedMotion } from './gsap.client';

/** Estados iniciales reutilizables. La clave coincide con data-gsap="…". */
const PRESETS: Record<string, gsap.TweenVars> = {
  'fade-up': { opacity: 0, y: 32 },
  'fade-in': { opacity: 0 },
  'fade-left': { opacity: 0, x: 40 },
  'fade-right': { opacity: 0, x: -40 },
  'scale-in': { opacity: 0, scale: 0.94 },
};

/** Aplica el estado final (lo "anima a visible") según el preset. */
function toVars(preset: string): gsap.TweenVars {
  switch (preset) {
    case 'fade-up':
      return { opacity: 1, y: 0 };
    case 'fade-left':
    case 'fade-right':
      return { opacity: 1, x: 0 };
    case 'scale-in':
      return { opacity: 1, scale: 1 };
    default:
      return { opacity: 1 };
  }
}

/**
 * Inicializa toda la coreografía de la home.
 * Llamar una vez desde index.astro (dentro de un <script> de cliente).
 */
export function initHomeChoreography(): void {
  document.documentElement.classList.add('gsap-ready');

  // ♿ Accesibilidad: si se pide menos movimiento, no ocultamos nada.
  //    El CSS ya fuerza opacity:1 vía media query; aquí simplemente salimos.
  if (prefersReducedMotion()) return;

  registerGsap();

  // ----------------------------------------------------------
  // 1) HERO — timeline secuenciado al cargar (above the fold).
  // ----------------------------------------------------------
  const hero = document.querySelector('[data-anim="hero"]');
  if (hero) {
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });
    tl.from('[data-anim="hero"] [data-gsap="hero-eyebrow"]', { opacity: 0, y: 16 })
      .from('[data-anim="hero"] [data-gsap="hero-title"]', { opacity: 0, y: 28 }, '-=0.4')
      .from('[data-anim="hero"] [data-gsap="hero-subtitle"]', { opacity: 0, y: 20 }, '-=0.45')
      .from('[data-anim="hero"] [data-gsap="hero-cta"]', { opacity: 0, y: 16 }, '-=0.45')
      .from(
        '[data-anim="hero"] [data-gsap="hero-bullet"]',
        { opacity: 0, y: 12, stagger: 0.08 },
        '-=0.4',
      )
      .from(
        '[data-anim="hero"] [data-gsap="hero-media"]',
        { opacity: 0, x: 48, scale: 0.96, duration: 0.9 },
        '-=0.6',
      );
  }

  // ----------------------------------------------------------
  // 2) REVEAL ON SCROLL — cualquier [data-gsap] con preset conocido.
  //    (Excluye los del hero, ya animados arriba.)
  // ----------------------------------------------------------
  const revealEls = gsap.utils.toArray<HTMLElement>('[data-gsap]').filter((el) => {
    const preset = el.dataset.gsap ?? '';
    return preset in PRESETS && !el.closest('[data-anim="hero"]');
  });

  revealEls.forEach((el) => {
    const preset = el.dataset.gsap as string;
    gsap.set(el, PRESETS[preset]);
    gsap.to(el, {
      ...toVars(preset),
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ----------------------------------------------------------
  // 3) GRUPOS CON STAGGER — contenedores [data-gsap-group].
  //    Sus hijos directos con [data-gsap-child] entran escalonados.
  // ----------------------------------------------------------
  gsap.utils.toArray<HTMLElement>('[data-gsap-group]').forEach((group) => {
    const children = group.querySelectorAll<HTMLElement>('[data-gsap-child]');
    if (!children.length) return;
    gsap.set(children, { opacity: 0, y: 28 });
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      scrollTrigger: { trigger: group, start: 'top 80%' },
    });
  });

  // ----------------------------------------------------------
  // 4) PARALLAX SUTIL — el motivo de "motion streaks" se desplaza
  //    levemente con el scroll en secciones marcadas con [data-parallax].
  // ----------------------------------------------------------
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement ?? el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // ----------------------------------------------------------
  // 5) CONTADORES — números de la franja de confianza [data-count].
  //    Anima de 0 al valor numérico cuando entra en viewport.
  // ----------------------------------------------------------
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count ?? '0');
    const suffix = el.dataset.countSuffix ?? '';
    if (!target) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.4,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toLocaleString('es-CL') + suffix;
      },
    });
  });

  // Recalcular triggers cuando carguen fuentes/imágenes (evita desfases).
  ScrollTrigger.refresh();
}
