/**
 * ============================================================
 * FaqAccordion — FAQ categorizado con UN SOLO ítem abierto a la vez
 * en todo el set (al abrir uno se cierran los demás, sin importar la
 * categoría). El primero arranca abierto.
 * ------------------------------------------------------------
 * Recibe las categorías (src/lib/faq.ts). Anima la altura con
 * grid-template-rows (sin medir el DOM). Hidratar con client:visible.
 * ============================================================
 */
import { useState } from 'react';
import type { FaqCategory, FaqBlock } from '@lib/faq';

function Blocks({ blocks }: { blocks: FaqBlock[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        typeof b === 'string' ? (
          <p key={i}>{b}</p>
        ) : (
          <ul key={i}>
            {b.list.map((li, j) => (
              <li key={j}>{li}</li>
            ))}
          </ul>
        ),
      )}
    </>
  );
}

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  // clave global "catIndex:itemIndex"; abierto el primero por defecto.
  const [open, setOpen] = useState<string>('0:0');

  return (
    <div className="faq">
      {categories.map((cat, ci) => (
        <section className="faq__cat" key={cat.n}>
          <h3 className="faq__cat-title">
            <span className="faq__cat-n">{cat.n}.</span> {cat.title}
          </h3>
          <div className="faq__items">
            {cat.items.map((it, ii) => {
              const key = `${ci}:${ii}`;
              const isOpen = open === key;
              return (
                <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={ii}>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? '' : key)}
                  >
                    <span>{it.q}</span>
                    <i className="fa-solid fa-chevron-down faq__chevron" aria-hidden="true" />
                  </button>
                  <div className="faq__panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="faq__panel-inner">
                      <div className="faq__a">
                        <Blocks blocks={it.a} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      <style>{`
        .faq { display: flex; flex-direction: column; gap: 40px; }
        .faq__cat-title { margin: 0 0 16px; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-h5); color: var(--text-strong); }
        .faq__cat-n { color: var(--text-accent); }
        .faq__items { display: flex; flex-direction: column; border-top: 1px solid var(--border-subtle); }
        .faq__item { border-bottom: 1px solid var(--border-subtle); }
        .faq__q {
          display: flex; align-items: center; justify-content: space-between; gap: 16px;
          width: 100%; padding: 18px 4px; background: transparent; border: none;
          cursor: pointer; text-align: left;
          font-family: var(--font-sans); font-weight: var(--fw-medium); font-size: var(--fs-body);
          color: var(--text-strong);
        }
        .faq__item.is-open .faq__q { color: var(--text-accent); }
        .faq__chevron { font-size: 13px; color: var(--text-muted); transition: transform var(--dur-base) var(--ease-out); flex-shrink: 0; }
        .faq__item.is-open .faq__chevron { transform: rotate(180deg); color: var(--text-accent); }
        .faq__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .faq__panel-inner { overflow: hidden; }
        .faq__a { padding: 0 4px 20px; color: var(--text-body); font-size: var(--fs-body); line-height: var(--lh-body); }
        .faq__a p { margin: 0 0 12px; }
        .faq__a p:last-child { margin-bottom: 0; }
        .faq__a ul { margin: 0 0 12px; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; }
        .faq__a ul:last-child { margin-bottom: 0; }
        .faq__a li { line-height: 1.5; }
      `}</style>
    </div>
  );
}
