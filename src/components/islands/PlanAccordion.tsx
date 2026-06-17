/**
 * ============================================================
 * ISLA REACT — Accordion (planes / FAQ)
 * ------------------------------------------------------------
 * Portado del DS (components/disclosure/Accordion.jsx). Single-open por
 * defecto, animación de altura con grid-template-rows (sin medir el DOM).
 * Pensado para la página de ejemplo /_ejemplo-pagina o un futuro FAQ.
 * Hidrátalo con client:visible.
 * ============================================================
 */
import { useState } from 'react';

export interface AccordionEntry {
  title: string;
  subtitle?: string;
  content: string;
}
interface Props {
  items: AccordionEntry[];
  defaultOpen?: number;
}

export default function PlanAccordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number>(defaultOpen);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? -1 : i));

  return (
    <div className="mc-acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className="mc-acc__item" key={it.title}>
            <button type="button" className="mc-acc__head" aria-expanded={isOpen} onClick={() => toggle(i)}>
              <span className="mc-acc__titles">
                <span className="mc-acc__title">{it.title}</span>
                {it.subtitle && <span className="mc-acc__subtitle">{it.subtitle}</span>}
              </span>
              <span className={`mc-acc__chevron ${isOpen ? 'is-open' : ''}`}>
                <i className="fa-solid fa-chevron-down" />
              </span>
            </button>
            <div className="mc-acc__panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="mc-acc__panel-inner">
                <div className="mc-acc__content">{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .mc-acc { border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); background: var(--surface-card); }
        .mc-acc__item { border-bottom: 1px solid var(--border-subtle); }
        .mc-acc__item:last-child { border-bottom: none; }
        .mc-acc__head {
          display: flex; align-items: center; gap: var(--space-4); width: 100%;
          padding: var(--space-5) var(--space-4); background: transparent; border: none; cursor: pointer; text-align: left;
        }
        .mc-acc__titles { flex: 1; display: flex; flex-direction: column; gap: 2px; }
        .mc-acc__title { font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: var(--fs-body-lg); color: var(--text-strong); }
        .mc-acc__subtitle { font-family: var(--font-sans); font-size: 14px; color: var(--text-muted); }
        .mc-acc__chevron {
          width: 32px; height: 32px; border-radius: var(--radius-pill); flex-shrink: 0;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--grey-100); color: var(--text-strong);
          transition: background var(--dur-fast) var(--ease-out);
        }
        .mc-acc__chevron.is-open { background: var(--amber-500); color: var(--white); }
        .mc-acc__chevron i { font-size: 13px; transition: transform var(--dur-base) var(--ease-out); }
        .mc-acc__chevron.is-open i { transform: rotate(180deg); }
        .mc-acc__panel { display: grid; transition: grid-template-rows var(--dur-base) var(--ease-out); }
        .mc-acc__panel-inner { overflow: hidden; }
        .mc-acc__content {
          padding: 0 var(--space-4) var(--space-5);
          font-family: var(--font-sans); font-size: var(--fs-body); line-height: var(--lh-body); color: var(--text-body);
        }
      `}</style>
    </div>
  );
}
