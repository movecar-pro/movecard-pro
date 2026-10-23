/**
 * ============================================================
 * LegalModal — modales de Términos y Política de Privacidad.
 * ------------------------------------------------------------
 * Escucha clics globales en [data-legal-modal="terms|privacy"] (los links
 * legales del footer) y abre el documento correspondiente en el shell Modal.
 * Recibe el contenido (docs) como prop serializable.
 * ============================================================
 */
import { useEffect, useState } from 'react';
import Modal from './Modal';

type LegalBlock = string | { list: string[] } | { sub: string } | { table: string[][] };
interface LegalSection {
  heading: string;
  body: LegalBlock[];
}
export interface LegalDoc {
  title: string;
  updated: string;
  sections: LegalSection[];
}
type DocKey = 'terms' | 'privacy';

export default function LegalModal({ docs }: { docs: Record<DocKey, LegalDoc> }) {
  const [active, setActive] = useState<DocKey | null>(null);

  // Delegación global: cualquier [data-legal-modal] abre el documento.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest('[data-legal-modal]');
      if (!trigger) return;
      const key = trigger.getAttribute('data-legal-modal');
      if (key === 'terms' || key === 'privacy') {
        e.preventDefault();
        setActive(key);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const doc = active ? docs[active] : null;

  return (
    <Modal open={!!doc} onClose={() => setActive(null)} labelledBy="legal-modal-title" size="lg">
      {doc && (
        <article className="lm">
          <h2 id="legal-modal-title" className="lm__title">
            {doc.title}
          </h2>
          {doc.updated && <p className="lm__updated">{doc.updated}</p>}
          {doc.sections.map((s, i) => (
            <section className="lm__section" key={i}>
              <h3>{s.heading}</h3>
              {s.body.map((b, j) =>
                typeof b === 'string' ? (
                  <p key={j}>{b}</p>
                ) : 'sub' in b ? (
                  <h4 key={j} className="lm__sub">
                    {b.sub}
                  </h4>
                ) : 'table' in b ? (
                  <div key={j} className="lm__table-wrap">
                    <table className="lm__table">
                      <thead>
                        <tr>
                          {b.table[0].map((c, k) => (
                            <th key={k} scope="col">
                              {c}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.table.slice(1).map((r, k) => (
                          <tr key={k}>
                            {r.map((c, m) => (
                              <td key={m}>{c}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <ul key={j} className="lm__list">
                    {b.list.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}

          <style>{`
            .lm { display: flex; flex-direction: column; gap: 20px; }
            .lm__title { margin: 0; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: var(--fs-h3); color: var(--text-strong); }
            .lm__updated { margin: -12px 0 0; font-size: var(--fs-small); color: var(--ink-700); }
            .lm__section { display: flex; flex-direction: column; gap: 8px; }
            .lm__section h3 { margin: 0; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: var(--fs-body-lg); color: var(--text-strong); }
            .lm__sub { margin: 10px 0 0; font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: var(--fs-body); color: var(--text-strong); }
            .lm__section p { margin: 0; font-size: var(--fs-small); line-height: 1.65; color: var(--text-body); }
            .lm__table-wrap { overflow-x: auto; }
            .lm__table { width: 100%; border-collapse: collapse; font-size: var(--fs-small); color: var(--text-body); }
            .lm__table th, .lm__table td { padding: 8px 10px; border: 1px solid var(--border-subtle); text-align: left; line-height: 1.4; }
            .lm__table th { background: var(--surface-subtle); font-weight: var(--fw-semibold); color: var(--text-strong); }
            .lm__list { margin: 0; padding-left: 22px; list-style: disc; }
            .lm__list li { font-size: var(--fs-small); line-height: 1.6; color: var(--text-body); display: list-item; }
            .lm__list li + li { margin-top: 6px; }
          `}</style>
        </article>
      )}
    </Modal>
  );
}
