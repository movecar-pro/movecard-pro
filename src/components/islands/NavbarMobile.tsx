/**
 * ============================================================
 * ISLA REACT — Menú móvil (hamburguesa + drawer)
 * ------------------------------------------------------------
 * Ejemplo de "Isla de Astro": solo este fragmento envía JS al cliente.
 * Se hidrata con `client:idle` desde Navbar.astro. Toda la barra de
 * escritorio sigue siendo HTML estático.
 *
 * 🏝️  PATRÓN PARA NUEVAS ISLAS:
 *   1. Crea un .tsx aquí en /islands con tu componente React.
 *   2. Impórtalo en un .astro y úsalo con una directiva client:* :
 *        client:load   → hidrata inmediatamente (above the fold crítico)
 *        client:idle   → hidrata cuando el navegador está ocioso (este caso)
 *        client:visible→ hidrata al entrar en viewport (ideal abajo del fold)
 *        client:media  → hidrata según media query
 *   3. Pasa datos vía props serializables (strings, números, arrays…).
 * ============================================================
 */
import { useState, useEffect } from 'react';

interface NavLink {
  label: string;
  href: string;
}
interface Props {
  links: NavLink[];
  cta: string;
  active?: string;
}

export default function NavbarMobile({ links, cta, active }: Props) {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="mc-mobile">
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        className="mc-mobile__toggle"
        onClick={() => setOpen((v) => !v)}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>

      {open && (
        <div className="mc-mobile__drawer" role="dialog" aria-modal="true">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.label === active ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#postular" className="mc-mobile__cta" onClick={() => setOpen(false)}>
            {cta}
          </a>
        </div>
      )}

      {/* Estilos de la isla. Usan los tokens globales del DS. */}
      <style>{`
        .mc-mobile { display: none; }
        @media (max-width: 900px) { .mc-mobile { display: block; } }
        .mc-mobile__toggle {
          width: 44px; height: 44px; border: none; background: transparent;
          color: var(--text-strong); font-size: 22px; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .mc-mobile__drawer {
          position: fixed; inset: 76px 0 0 0; z-index: 49;
          background: var(--white); padding: var(--space-6) var(--page-gutter);
          display: flex; flex-direction: column; gap: var(--space-2);
          animation: mcDrawerIn var(--dur-base) var(--ease-out);
        }
        .mc-mobile__drawer a {
          font-family: var(--font-sans); font-weight: var(--fw-medium); font-size: 18px;
          color: var(--text-strong); text-decoration: none; padding: var(--space-3) 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .mc-mobile__drawer a.is-active { color: var(--text-accent); }
        .mc-mobile__cta {
          margin-top: var(--space-4); text-align: center; border: none !important;
          background: var(--color-primary); color: var(--white) !important;
          border-radius: var(--radius-sm); box-shadow: var(--shadow-amber);
          font-weight: var(--fw-semibold) !important;
        }
        @keyframes mcDrawerIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}
