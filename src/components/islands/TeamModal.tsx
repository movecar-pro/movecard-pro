/**
 * ============================================================
 * TeamModal — perfil completo de un integrante (screenshot 1).
 * ------------------------------------------------------------
 * Patrón de integración: la grilla del equipo es HTML ESTÁTICO (mejor SEO
 * y performance). Cada tarjeta lleva `data-team-modal="<id>"`. Esta isla
 * escucha clics delegados en todo el documento y abre el modal del miembro
 * correspondiente. Recibe los datos del equipo por props (desde la colección
 * de contenido), así no duplica nada.
 * ============================================================
 */
import { useEffect, useMemo, useState } from 'react';
import Modal from './Modal';
import RImg from './RImg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleShort?: string;
  photo: string;
  bioShort: string;
  linkedin?: string;
  meta?: string[];
  location?: string;
  credentials?: { icon: string; text: string }[];
  sections?: { icon: string; title: string; paragraphs: string[] }[];
  funFacts?: string[];
}

export default function TeamModal({ members }: { members: TeamMember[] }) {
  const byId = useMemo(() => Object.fromEntries(members.map((m) => [m.id, m])), [members]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement).closest('[data-team-modal]');
      if (!trigger) return;
      // No interceptar clics en el enlace de LinkedIn dentro de la tarjeta.
      if ((e.target as HTMLElement).closest('[data-team-ignore]')) return;
      e.preventDefault();
      setActiveId(trigger.getAttribute('data-team-modal'));
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const m = activeId ? byId[activeId] : null;

  return (
    <Modal open={!!m} onClose={() => setActiveId(null)} labelledBy="team-modal-name" size="lg">
      {m && (
        <div className="tm">
          {/* Aside: foto, identidad, credenciales */}
          <aside className="tm__aside">
            <RImg src={m.photo} alt={m.name} ratio="1/1" fit="cover" rounded="var(--radius-lg)" />
            <h2 id="team-modal-name" className="tm__name">
              {m.name}
            </h2>
            <p className="tm__role">{m.roleShort ?? m.role}</p>
            {m.meta && m.meta.length > 0 && (
              <p className="tm__meta">{m.meta.join('  ·  ')}</p>
            )}
            {m.credentials && m.credentials.length > 0 && (
              <ul className="tm__creds">
                {m.credentials.map((c, i) => (
                  <li key={i}>
                    <i className={`fa-solid ${c.icon}`} aria-hidden="true" />
                    <span>{c.text}</span>
                  </li>
                ))}
              </ul>
            )}
            {m.linkedin && (
              <a className="tm__linkedin" href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${m.name}`}>
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
              </a>
            )}
          </aside>

          {/* Main: secciones + fun facts */}
          <div className="tm__main">
            {m.sections?.map((s, i) => (
              <section className="tm__section" key={i}>
                <span className="tm__icon" aria-hidden="true">
                  <i className={`fa-solid ${s.icon}`} />
                </span>
                <div className="tm__section-body">
                  <h3 className="tm__section-title">{s.title}</h3>
                  {s.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {m.funFacts && m.funFacts.length > 0 && (
              <div className="tm__facts">
                <i className="fa-solid fa-quote-left" aria-hidden="true" />
                <div>
                  {m.funFacts.map((f, i) => (
                    <p key={i}>{f}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .tm {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: clamp(24px, 4vw, 56px);
          align-items: start;
        }
        .tm__aside { display: flex; flex-direction: column; gap: 12px; position: sticky; top: 0; }
        .tm__name { margin: 8px 0 0; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: 32px; line-height: 1.1; color: var(--text-strong); }
        .tm__role { margin: 0; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: 16px; color: var(--text-accent); }
        .tm__meta { margin: 4px 0 8px; font-size: 12px; color: var(--text-muted); }
        .tm__creds { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .tm__creds li { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-body); }
        .tm__creds i { color: var(--amber-500); width: 18px; text-align: center; }
        .tm__linkedin { margin-top: 8px; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; color: var(--ink-700); font-size: 24px; }
        .tm__linkedin:hover { color: var(--amber-600); }

        .tm__main { display: flex; flex-direction: column; gap: 28px; }
        .tm__section { display: grid; grid-template-columns: 32px 1fr; gap: 16px; }
        .tm__icon { width: 32px; height: 32px; border-radius: var(--radius-sm); background: var(--amber-50); color: var(--amber-600); display: inline-flex; align-items: center; justify-content: center; font-size: 14px; }
        .tm__section-body { display: flex; flex-direction: column; gap: 10px; }
        .tm__section-title { margin: 0 0 2px; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: 16px; color: var(--text-strong); }
        .tm__section-body p { margin: 0; font-size: 15px; line-height: 1.6; color: var(--text-body); }

        .tm__facts { display: grid; grid-template-columns: 32px 1fr; gap: 14px; background: var(--amber-50); border-radius: var(--radius-lg); padding: 24px 28px; margin-top: 8px; }
        .tm__facts > i { color: var(--amber-500); font-size: 22px; }
        .tm__facts p { margin: 0 0 8px; font-size: 14px; line-height: 1.6; color: var(--ink-600); }
        .tm__facts p:last-child { margin-bottom: 0; }

        @media (max-width: 820px) {
          .tm { grid-template-columns: 1fr; }
          .tm__aside { position: static; max-width: 320px; }
        }
      `}</style>
    </Modal>
  );
}
