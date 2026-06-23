/**
 * ============================================================
 * FleetCarousel — carrusel de modelos que abre VehicleModal.
 * ------------------------------------------------------------
 * La "caja" (track) se desplaza lateralmente con transform translateX.
 * Combina:
 *   · AUTOPLAY: avanza un auto a la derecha cada AUTOPLAY_MS (5 s, buen
 *     balance entre alcanzar a leer la tarjeta y dinamismo). Hace loop.
 *   · CONTROLES MANUALES: flechas prev/next + puntos (dots) por posición.
 *   · PAUSA inteligente: se detiene al pasar el mouse, al enfocar con
 *     teclado y mientras un modal está abierto (no avanza por detrás).
 *   · RESPONSIVE: 1 / 2 / 3 autos visibles según ancho (mobile/tablet/desktop).
 *   · ACCESIBILIDAD: respeta prefers-reduced-motion (sin autoplay ni
 *     transición), roles aria y etiquetas en los controles.
 * ============================================================
 */
import { useEffect, useRef, useState } from 'react';
import VehicleModal, { type Vehicle } from './VehicleModal';
import RImg from './RImg';

const AUTOPLAY_MS = 5000; // tiempo entre avances automáticos
const TRANSITION_MS = 600; // duración del deslizamiento

function getVisible(width: number): number {
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
}

export default function FleetCarousel({ vehicles }: { vehicles: Vehicle[] }) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<Vehicle | null>(null);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  const maxIndex = Math.max(0, vehicles.length - visible);

  // Visibles según ancho + preferencia de movimiento.
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onResize = () => setVisible(getVisible(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Clampa el índice si cambian las columnas visibles.
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, vehicles.length - visible)));
  }, [visible, vehicles.length]);

  // Autoplay: avanza y hace loop. Se pausa con hover/foco, con modal abierto
  // y si el usuario pidió menos movimiento.
  useEffect(() => {
    if (reduced.current || paused || active) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, active, maxIndex]);

  const go = (i: number) => setIndex(Math.max(0, Math.min(i, maxIndex)));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const trackStyle = {
    transform: `translateX(-${(index * 100) / visible}%)`,
    transition: reduced.current ? 'none' : `transform ${TRANSITION_MS}ms var(--ease-out)`,
  };

  return (
    <div
      className="fc"
      role="group"
      aria-roledescription="carrusel"
      aria-label="Modelos de la flota"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="fc__viewport">
        <div className="fc__track" style={trackStyle}>
          {vehicles.map((v) => (
            <div className="fc__slide" key={v.id} style={{ flexBasis: `${100 / visible}%` }}>
              <button
                type="button"
                className="fc__card"
                onClick={() => setActive(v)}
                aria-label={`Ver detalle de ${v.name}`}
              >
                {v.badge && (
                  <span className={`fc__badge ${v.fuel === 'gas' ? 'fc__badge--gas' : ''}`}>
                    {v.badge}
                  </span>
                )}
                <div className="fc__media mix-blend-multiply">
                  <RImg src={v.image} alt={v.name} ratio="3/2" fit="contain" rounded="0" />
                </div>
                <div className="fc__body">
                  <h3 className="fc__name">{v.name}</h3>
                  {v.tags && v.tags.length > 0 && (
                    <div className="fc__tags">
                      {v.tags.map((t, i) => (
                        <span key={i} className="fc__tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="fc__detail">
                    Ver detalle <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Controles: flechas + dots */}
      <div className="fc__controls">
        <button type="button" className="fc__arrow" aria-label="Modelo anterior" onClick={prev}>
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
        </button>
        <div className="fc__dots" role="tablist" aria-label="Ir a posición">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`fc__dot ${i === index ? 'is-active' : ''}`}
              aria-label={`Posición ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="fc__arrow" aria-label="Modelo siguiente" onClick={next}>
          <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </button>
      </div>

      <VehicleModal vehicle={active} open={!!active} onClose={() => setActive(null)} />

      <style>{`
        .fc { display: flex; flex-direction: column; gap: 24px; }
        .fc__viewport { overflow: hidden; }
        .fc__track { display: flex; will-change: transform; }
        .fc__slide { flex: 0 0 auto; box-sizing: border-box; padding: 8px 12px; }

        .fc__card {
          width: 100%; height: 100%; text-align: left; cursor: pointer;
          display: flex; flex-direction: column;
          background: var(--surface-card); border: none;
          border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
          overflow: hidden; padding: 0; position: relative;
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
        }
        .fc__card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
        .fc__card:focus-visible { outline: 2px solid var(--amber-500); outline-offset: 2px; }
        .fc__badge {
          position: absolute; top: 12px; left: 12px; z-index: 1;
          background: var(--green-100); color: var(--green-700);
          font-size: 11px; font-weight: var(--fw-semibold);
          padding: 4px 10px; border-radius: var(--radius-pill);
        }
        .fc__badge--gas { background: var(--grey-100); color: var(--ink-600); }
        .fc__media { background: var(--grey-50); padding: 16px; }
        .fc__body { display: flex; flex-direction: column; gap: 12px; padding: 20px 24px 24px; flex: 1; }
        .fc__name { margin: 0; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: 22px; color: var(--text-strong); }
        .fc__tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .fc__tag { background: var(--grey-100); color: var(--text-body); font-size: 13px; padding: 5px 11px; border-radius: var(--radius-xs); }
        .fc__detail { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; color: var(--text-accent); font-weight: var(--fw-semibold); font-size: 14px; }

        .fc__controls { display: flex; gap: 16px; justify-content: center; align-items: center; }
        .fc__arrow {
          width: 44px; height: 44px; border-radius: var(--radius-pill);
          border: 1px solid var(--border-subtle); background: var(--white);
          color: var(--text-strong); cursor: pointer; font-size: 15px;
          display: inline-flex; align-items: center; justify-content: center;
          transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out);
        }
        .fc__arrow:hover { background: var(--amber-500); color: var(--white); border-color: var(--amber-500); }
        .fc__dots { display: flex; gap: 8px; align-items: center; }
        .fc__dot {
          width: 9px; height: 9px; padding: 0; border-radius: var(--radius-pill);
          border: none; background: var(--grey-300); cursor: pointer;
          transition: background var(--dur-fast) var(--ease-out), width var(--dur-fast) var(--ease-out);
        }
        .fc__dot.is-active { background: var(--amber-500); width: 24px; }
      `}</style>
    </div>
  );
}
