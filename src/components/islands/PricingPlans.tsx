/**
 * ============================================================
 * PricingPlans — planes en 2 grupos (MoveElectric / MoveGas).
 * ------------------------------------------------------------
 * DESKTOP: tarjetas centradas (2 por grupo) con descripción, precio en UF,
 *          checklist y botón "Contratar" (outline).
 * MÓVIL: acordeón con UN solo plan abierto a la vez (el primero por defecto),
 *        cada cabecera muestra badge + nombre + precio.
 * Se renderizan ambos layouts; el CSS muestra el adecuado por breakpoint.
 * ============================================================
 */
import { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
}
interface Group {
  label: string;
  fuel: 'ev' | 'gas';
  plans: Plan[];
}

function Price({ price, period }: { price: string; period: string }) {
  return (
    <div className="pp__price">
      <span className="pp__amount">{price}</span>
      <span className="pp__period">{period}</span>
    </div>
  );
}
function Features({ items }: { items: string[] }) {
  return (
    <ul className="pp__features">
      {items.map((f, i) => (
        <li key={i}>
          <i className="fa-solid fa-check" aria-hidden="true" />
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function PricingPlans({ groups }: { groups: Group[] }) {
  const allIds = groups.flatMap((g) => g.plans.map((p) => p.id));
  const [open, setOpen] = useState<string>(allIds[0] ?? '');

  return (
    <div className="pp">
      {groups.map((g) => (
        <div className="pp__group" key={g.label}>
          <h3 className="pp__group-label">{g.label}</h3>

          {/* DESKTOP: tarjetas */}
          <div className="pp__cards">
            {g.plans.map((p) => (
              <article className="pp__card" key={p.id}>
                <h4 className="pp__name">{p.name}</h4>
                <p className="pp__desc">{p.description}</p>
                <Price price={p.price} period={p.period} />
                <Features items={p.features} />
                <a className="pp__cta" href="#postular">
                  {p.cta}
                </a>
              </article>
            ))}
          </div>

          {/* MÓVIL: acordeón (single-open global) */}
          <div className="pp__acc">
            {g.plans.map((p) => {
              const isOpen = open === p.id;
              return (
                <div className="pp__acc-item" key={p.id}>
                  <button
                    type="button"
                    className="pp__acc-head"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? '' : p.id)}
                  >
                    <span className="pp__acc-titles">
                      {p.badge && (
                        <span className={`pp__badge ${g.fuel === 'gas' ? 'is-gas' : ''}`}>{p.badge}</span>
                      )}
                      <span className="pp__name">{p.name}</span>
                    </span>
                    <span className="pp__acc-right">
                      <span className="pp__acc-price">
                        {p.price} <span>{p.period}</span>
                      </span>
                      <i className="fa-solid fa-chevron-down pp__acc-chevron" aria-hidden="true" />
                    </span>
                  </button>
                  <div className="pp__acc-panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="pp__acc-inner">
                      <div className="pp__acc-body">
                        <p className="pp__desc">{p.description}</p>
                        <Features items={p.features} />
                        <a className="pp__cta" href="#postular">
                          {p.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <style>{`
        .pp { display: flex; flex-direction: column; gap: 48px; }
        .pp__group-label {
          margin: 0 0 24px; text-align: center;
          font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-h5); color: var(--text-strong);
        }

        /* Comunes */
        .pp__name { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h4); color: var(--text-strong); margin: 0; }
        .pp__desc { margin: 0; font-size: var(--fs-small); line-height: 1.55; color: var(--text-muted); }
        .pp__price { display: flex; align-items: baseline; justify-content: center; gap: 8px; }
        .pp__amount { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: 44px; line-height: 1; color: var(--text-accent); }
        .pp__period { font-size: var(--fs-small); font-weight: var(--fw-semibold); color: var(--text-accent); }
        .pp__features { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .pp__features li { display: flex; align-items: flex-start; gap: 12px; font-size: var(--fs-small); color: var(--text-body); }
        .pp__features i { color: var(--green-700); margin-top: 3px; font-size: 13px; }
        /* Botón outline (como el diseño) */
        .pp__cta {
          display: flex; align-items: center; justify-content: center; padding: 13px 26px;
          background: transparent; color: var(--amber-600);
          border: 1px solid var(--amber-500); border-radius: var(--radius-sm);
          font-family: var(--font-sans); font-weight: var(--fw-semibold); letter-spacing: 0.03em;
          font-size: var(--fs-small); text-transform: uppercase; text-decoration: none;
          transition: background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out);
        }
        .pp__cta:hover { background: var(--amber-500); color: var(--white); }

        /* DESKTOP cards */
        .pp__cards { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .pp__card {
          display: flex; flex-direction: column; gap: 18px; text-align: center;
          background: var(--surface-card); border-radius: var(--radius-xl);
          padding: var(--space-7); box-shadow: var(--shadow-lg);
        }
        /* La checklist se alinea a la izquierda dentro de la tarjeta centrada */
        .pp__card .pp__features { text-align: left; margin-top: 4px; }
        .pp__card .pp__cta { margin-top: auto; }

        /* MÓVIL acordeón (oculto en desktop) */
        .pp__acc { display: none; flex-direction: column; gap: 12px; }
        .pp__acc-item { border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-md); background: var(--surface-card); }
        .pp__acc-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 18px 20px; background: transparent; border: none; cursor: pointer; text-align: left; }
        .pp__acc-titles { display: flex; flex-direction: column; gap: 6px; align-items: flex-start; }
        .pp__badge { background: var(--green-100); color: var(--green-700); font-size: 11px; font-weight: var(--fw-semibold); padding: 3px 10px; border-radius: var(--radius-pill); }
        .pp__badge.is-gas { background: var(--grey-100); color: var(--ink-600); }
        .pp__acc-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .pp__acc-price { font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-body-lg); color: var(--text-accent); white-space: nowrap; }
        .pp__acc-price span { font-weight: var(--fw-regular); font-size: 11px; color: var(--text-accent); }
        .pp__acc-chevron { font-size: 14px; color: var(--text-accent); transition: transform var(--dur-base) var(--ease-out); }
        .pp__acc-item [aria-expanded='true'] .pp__acc-chevron { transform: rotate(180deg); }
        .pp__acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .pp__acc-inner { overflow: hidden; }
        .pp__acc-body { display: flex; flex-direction: column; gap: 16px; padding: 0 20px 20px; }

        @media (max-width: 900px) {
          .pp__cards { display: none; }
          .pp__acc { display: flex; }
        }
      `}</style>
    </div>
  );
}
