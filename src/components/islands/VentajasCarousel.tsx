/**
 * ============================================================
 * VentajasCarousel — las 5 ventajas.
 * ------------------------------------------------------------
 * DESKTOP: grilla de 5 tarjetas (estática).
 * MÓVIL: carrusel de UNA tarjeta por vista, con dots de paginación,
 *        autoplay (4,5 s), swipe táctil y pausa al interactuar.
 *
 * Se renderizan ambos layouts; el CSS muestra el correcto por breakpoint.
 * La lógica del carrusel solo actúa en móvil (matchMedia). El icono va en
 * un círculo punteado, como el diseño.
 * ============================================================
 */
import { useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 4500;
const SWIPE_PX = 40;

interface Item {
  icon: string;
  title: string;
  body: string;
  bullets: string[];
}

function Card({ it }: { it: Item }) {
  return (
    <article className="vc__card">
      <span className="vc__icon" aria-hidden="true">
        <i className={`fa-solid ${it.icon}`} />
      </span>
      <h3 className="vc__card-title">{it.title}</h3>
      <ul className="vc__list">
        <li>{it.body}</li>
        {it.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export default function VentajasCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  // Detecta móvil (≤900px) y reacciona a resize.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)');
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Autoplay solo en móvil y si no está pausado / sin reduce-motion.
  useEffect(() => {
    if (!isMobile || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isMobile, paused, items.length]);

  const go = (i: number) => setIndex(((i % items.length) + items.length) % items.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current !== null) {
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (dx <= -SWIPE_PX) go(index + 1);
      else if (dx >= SWIPE_PX) go(index - 1);
    }
    touchX.current = null;
    setPaused(false);
  };

  return (
    <div className="vc">
      {/* DESKTOP: grilla */}
      <div className="vc__grid">
        {items.map((it) => (
          <Card key={it.title} it={it} />
        ))}
      </div>

      {/* MÓVIL: carrusel */}
      <div
        className="vc__carousel"
        role="group"
        aria-roledescription="carrusel"
        aria-label="Ventajas de Movecar"
      >
        <div className="vc__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className="vc__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((it) => (
              <div className="vc__slide" key={it.title} aria-hidden={items[index].title !== it.title}>
                <Card it={it} />
              </div>
            ))}
          </div>
        </div>
        <div className="vc__dots" role="tablist" aria-label="Seleccionar ventaja">
          {items.map((it, i) => (
            <button
              key={it.title}
              type="button"
              className={`vc__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Ventaja ${i + 1}: ${it.title}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* Tarjeta (compartida) */
        .vc__card {
          display: flex; flex-direction: column; gap: 12px; height: 100%;
          background: var(--surface-card); border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md); padding: 28px 24px; box-sizing: border-box;
        }
        .vc__icon {
          width: 48px; height: 48px; border-radius: var(--radius-pill);
          border: 2px dashed var(--amber-300); color: var(--ink-600);
          display: inline-flex; align-items: center; justify-content: center; font-size: 18px;
        }
        .vc__card-title { margin: 4px 0 0; font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: var(--fs-body-lg); color: var(--text-accent); }
        .vc__list { margin: 0; padding-left: 0; display: flex; flex-direction: column; gap: 8px; }
        .vc__list li { font-size: var(--fs-small); line-height: 1.55; color: var(--text-muted); }

        /* DESKTOP grilla */
        .vc__grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; align-items: stretch; }
        .vc__carousel { display: none; }

        /* MÓVIL carrusel */
        @media (max-width: 900px) {
          .vc__grid { display: none; }
          .vc__carousel { display: block; }
          .vc__viewport { overflow: hidden; }
          .vc__track { display: flex; transition: transform var(--dur-base) var(--ease-out); }
          .vc__slide { flex: 0 0 100%; box-sizing: border-box; padding: 4px; }
          .vc__dots { display: flex; gap: 8px; justify-content: center; margin-top: 24px; }
          .vc__dot {
            width: 9px; height: 9px; padding: 0; border: none; border-radius: var(--radius-pill);
            background: var(--grey-300); cursor: pointer;
            transition: background var(--dur-fast) var(--ease-out), width var(--dur-fast) var(--ease-out);
          }
          .vc__dot.is-active { background: var(--amber-500); width: 28px; }
          @media (prefers-reduced-motion: reduce) { .vc__track { transition: none; } }
        }
      `}</style>
    </div>
  );
}
