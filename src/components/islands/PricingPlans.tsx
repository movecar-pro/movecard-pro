/**
 * ============================================================
 * PricingPlans — planes en 2 grupos (MoveElectric / MoveGas).
 * ------------------------------------------------------------
 * DESKTOP: tarjetas (2 por grupo).  MÓVIL: acordeón, con UN solo plan
 * abierto a la vez (el primero abierto por defecto).
 * Se renderizan ambos layouts y el CSS muestra el adecuado por breakpoint
 * (sin parpadeo de hidratación). El estado del acordeón solo aplica en móvil.
 * ============================================================
 */
import { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  schedule: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
  featured?: boolean;
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
          <i className="fa-solid fa-circle-check" aria-hidden="true" />
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
          <h3 className={`pp__group-label ${g.fuel === 'gas' ? 'is-gas' : ''}`}>
            <i className={`fa-solid ${g.fuel === 'ev' ? 'fa-bolt' : 'fa-gas-pump'}`} aria-hidden="true" />
            {g.label}
          </h3>

          {/* DESKTOP: tarjetas */}
          <div className="pp__cards">
            {g.plans.map((p) => (
              <article className={`pp__card ${p.featured ? 'is-featured' : ''}`} key={p.id}>
                <div className="pp__card-head">
                  <h4 className="pp__name">{p.name}</h4>
                  {p.badge && <span className="pp__badge">{p.badge}</span>}
                </div>
                <p className="pp__schedule">{p.schedule}</p>
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
                <div className={`pp__acc-item ${p.featured ? 'is-featured' : ''}`} key={p.id}>
                  <button
                    type="button"
                    className="pp__acc-head"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? '' : p.id)}
                  >
                    <span className="pp__acc-titles">
                      <span className="pp__name">{p.name}</span>
                      <span className="pp__acc-price">
                        {p.price} <span>{p.period}</span>
                      </span>
                    </span>
                    <i className="fa-solid fa-chevron-down pp__acc-chevron" aria-hidden="true" />
                  </button>
                  <div className="pp__acc-panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="pp__acc-inner">
                      <div className="pp__acc-body">
                        <p className="pp__schedule">{p.schedule}</p>
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
        .pp { display: flex; flex-direction: column; gap: 40px; }
        .pp__group-label {
          display: flex; align-items: center; gap: 10px; margin: 0 0 20px;
          font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-h5); color: var(--text-strong);
        }
        .pp__group-label i { color: var(--amber-500); }
        .pp__group-label.is-gas i { color: var(--ink-500); }

        /* Comunes */
        .pp__name { font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h4); color: var(--text-strong); margin: 0; }
        .pp__schedule { margin: 0; font-size: var(--fs-small); color: var(--text-muted); }
        .pp__price { display: flex; align-items: baseline; gap: 8px; }
        .pp__amount { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--fs-h2); color: var(--text-accent); }
        .pp__period { font-size: var(--fs-small); color: var(--text-muted); }
        .pp__features { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        .pp__features li { display: flex; align-items: flex-start; gap: 10px; font-size: var(--fs-small); color: var(--text-body); }
        .pp__features i { color: var(--green-700); margin-top: 3px; }
        .pp__cta {
          display: flex; align-items: center; justify-content: center; padding: 13px 26px;
          background: var(--color-primary); color: var(--white); border-radius: var(--radius-sm);
          box-shadow: var(--shadow-amber); font-family: var(--font-sans); font-weight: var(--fw-semibold);
          font-size: var(--fs-body); text-decoration: none; transition: background var(--dur-fast) var(--ease-out);
        }
        .pp__cta:hover { background: var(--color-primary-hover); }

        /* DESKTOP cards */
        .pp__cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .pp__card {
          display: flex; flex-direction: column; gap: 16px;
          background: var(--surface-card); border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl); padding: var(--space-7); box-shadow: var(--shadow-md);
        }
        .pp__card.is-featured { border-color: transparent; box-shadow: var(--shadow-amber), var(--shadow-lg); }
        .pp__card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .pp__badge { background: var(--amber-50); color: var(--amber-700); font-size: 12px; font-weight: var(--fw-semibold); padding: 5px 12px; border-radius: var(--radius-pill); }
        .pp__card .pp__cta { margin-top: auto; }

        /* MÓVIL acordeón (oculto en desktop) */
        .pp__acc { display: none; border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); background: var(--surface-card); }
        .pp__acc-item { border-bottom: 1px solid var(--border-subtle); }
        .pp__acc-item:last-child { border-bottom: none; }
        .pp__acc-item.is-featured { background: var(--amber-50); }
        .pp__acc-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; width: 100%; padding: 20px; background: transparent; border: none; cursor: pointer; text-align: left; }
        .pp__acc-titles { display: flex; flex-direction: column; gap: 4px; }
        .pp__acc-price { font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-body-lg); color: var(--text-accent); }
        .pp__acc-price span { font-weight: var(--fw-regular); font-size: 12px; color: var(--text-muted); }
        .pp__acc-chevron { font-size: 14px; color: var(--text-muted); transition: transform var(--dur-base) var(--ease-out); flex-shrink: 0; }
        .pp__acc-item [aria-expanded='true'] .pp__acc-chevron { transform: rotate(180deg); color: var(--text-accent); }
        .pp__acc-panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .pp__acc-inner { overflow: hidden; }
        .pp__acc-body { display: flex; flex-direction: column; gap: 16px; padding: 0 20px 20px; }

        @media (max-width: 900px) {
          .pp__cards { display: none; }
          .pp__acc { display: block; }
        }
      `}</style>
    </div>
  );
}
