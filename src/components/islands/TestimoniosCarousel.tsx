/**
 * ============================================================
 * TestimoniosCarousel — carrusel de testimonios, escalable a N items.
 * ------------------------------------------------------------
 * · Por página: 3 en desktop (>1000px), 2 en tablet, 1 en móvil (≤600px).
 * · Navega DE A PÁGINAS (avanza/retrocede `visible` tarjetas por pasada),
 *   con flechas circulares + dots de paginación.
 * · El último "salto" se alinea al final (sin huecos) cuando la cantidad
 *   no es múltiplo exacto de las visibles.
 * · Track con transform translateX (animado). Respeta prefers-reduced-motion.
 *
 * Reutilizable: solo pásale `items`. La cantidad de páginas y dots se
 * calcula sola.
 * ============================================================
 */
import { useEffect, useState } from 'react';

export interface Testimonio {
  rating: number;
  quote: string;
  name: string;
  role?: string;
  income?: string;
}

function getVisible(w: number): number {
  if (w <= 600) return 1;
  if (w <= 1000) return 2;
  return 3;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="tc__stars" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ color: i < rating ? 'var(--amber-500)' : 'var(--grey-200)' }}
        />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonio }) {
  const initial = (t.name || '?').trim().charAt(0).toUpperCase();
  return (
    <article className="tc__card">
      <Stars rating={t.rating} />
      <p className="tc__quote">“{t.quote}”</p>
      <div className="tc__footer">
        <span className="tc__avatar">{initial}</span>
        <div className="tc__id">
          <span className="tc__name">{t.name}</span>
          {t.role && <span className="tc__role">{t.role}</span>}
        </div>
        {t.income && <span className="tc__income">{t.income}</span>}
      </div>
    </article>
  );
}

export default function TestimoniosCarousel({ items }: { items: Testimonio[] }) {
  const [visible, setVisible] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const onResize = () => setVisible(getVisible(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const pageCount = Math.max(1, Math.ceil(items.length / visible));
  const maxStart = Math.max(0, items.length - visible);

  // Clampa la página si cambian las visibles (resize).
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  // Desplazamiento alineado al final para la última página incompleta.
  const start = Math.min(page * visible, maxStart);
  const offset = start * (100 / visible);

  const go = (p: number) => setPage(((p % pageCount) + pageCount) % pageCount);

  return (
    <div className="tc" role="group" aria-roledescription="carrusel" aria-label="Testimonios">
      <div className="tc__viewport">
        <div
          className="tc__track"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {items.map((t, i) => (
            <div className="tc__slide" key={i} style={{ flexBasis: `${100 / visible}%` }}>
              <Card t={t} />
            </div>
          ))}
        </div>
      </div>

      <div className="tc__controls">
        <button type="button" className="tc__arrow" aria-label="Anteriores" data-ga-ignore onClick={() => go(page - 1)}>
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <div className="tc__dots" role="tablist" aria-label="Página de testimonios">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`tc__dot ${i === page ? 'is-active' : ''}`}
              aria-label={`Página ${i + 1}`}
              aria-current={i === page}
              data-ga-ignore
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="tc__arrow" aria-label="Siguientes" data-ga-ignore onClick={() => go(page + 1)}>
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </div>

      <style>{`
        .tc { display: flex; flex-direction: column; gap: 32px; }
        .tc__viewport { overflow: hidden; }
        .tc__track { display: flex; transition: transform var(--dur-base) var(--ease-out); }
        .tc__slide { flex-grow: 0; flex-shrink: 0; box-sizing: border-box; padding: 4px 12px; }
        @media (prefers-reduced-motion: reduce) { .tc__track { transition: none; } }

        /* Tarjeta (idéntica al diseño actual de Testimonial) */
        .tc__card {
          display: flex; flex-direction: column; gap: var(--space-4); height: 100%; box-sizing: border-box;
          background: var(--surface-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg); padding: var(--space-5); box-shadow: var(--shadow-sm);
        }
        .tc__stars { display: flex; gap: 3px; font-size: 14px; }
        .tc__quote { margin: 0; font-family: var(--font-sans); font-size: var(--fs-body); line-height: var(--lh-body); color: var(--text-body); flex: 1; }
        .tc__footer { display: flex; align-items: center; gap: var(--space-3); padding-top: var(--space-3); border-top: 1px solid var(--border-subtle); }
        .tc__avatar {
          width: 40px; height: 40px; border-radius: var(--radius-pill); flex-shrink: 0;
          background: var(--green-700); color: var(--white); display: inline-flex; align-items: center; justify-content: center;
          font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: 16px;
        }
        .tc__id { display: flex; flex-direction: column; gap: 2px; }
        .tc__name { font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: 14px; color: var(--text-strong); }
        .tc__role { font-family: var(--font-sans); font-size: 13px; color: var(--text-muted); }
        .tc__income {
          margin-left: auto; font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: 12px;
          color: var(--green-700); background: var(--green-50); padding: 5px 10px; border-radius: var(--radius-xs); white-space: nowrap;
        }

        /* Controles */
        .tc__controls { display: flex; gap: 16px; align-items: center; justify-content: center; }
        .tc__arrow {
          width: 48px; height: 48px; border-radius: var(--radius-pill); border: none; cursor: pointer;
          background: var(--amber-500); color: var(--white); font-size: 16px;
          display: inline-flex; align-items: center; justify-content: center;
          box-shadow: var(--shadow-amber); transition: background var(--dur-fast) var(--ease-out);
        }
        .tc__arrow:hover { background: var(--amber-600); }
        .tc__dots { display: flex; gap: 8px; align-items: center; }
        .tc__dot {
          width: 9px; height: 9px; padding: 0; border: none; border-radius: var(--radius-pill);
          background: var(--grey-300); cursor: pointer;
          transition: background var(--dur-fast) var(--ease-out), width var(--dur-fast) var(--ease-out);
        }
        .tc__dot.is-active { background: var(--amber-500); width: 28px; }
      `}</style>
    </div>
  );
}
