/**
 * ============================================================
 * Modal — shell accesible reutilizable (overlay + panel).
 * ------------------------------------------------------------
 * Lo usan TeamModal y VehicleModal. Encapsula el comportamiento que
 * todo modal necesita y que es fácil de hacer mal:
 *   · Cerrar con ESC y con clic en el backdrop.
 *   · Bloqueo de scroll del body mientras está abierto.
 *   · Mover el foco al panel al abrir y devolverlo al disparador al cerrar.
 *   · Animación de entrada (respeta prefers-reduced-motion).
 *   · Botón de cierre (círculo gris arriba a la derecha, como el diseño).
 *   · PORTAL a document.body: el modal se renderiza fuera del árbol de la
 *     isla, de modo que NINGÚN ancestro con `transform` (p. ej. los wrappers
 *     animados con GSAP) lo encierre. Así `position:fixed` siempre se ancla
 *     al viewport y cubre toda la interfaz.
 *
 * No conoce el contenido: recibe `open`, `onClose` y children.
 * ============================================================
 */
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  size?: 'lg' | 'xl';
  children: ReactNode;
}

export default function Modal({ open, onClose, labelledBy, size = 'lg', children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // Mueve el foco al panel para lectores de pantalla / teclado.
    const id = requestAnimationFrame(() => panelRef.current?.focus());

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
      cancelAnimationFrame(id);
      (lastFocused.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  // No renderizar nada cerrado o en SSR (document inexistente).
  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className="mc-modal">
      {/* Backdrop como botón real: cerrar al hacer clic, accesible y sin
          handlers sobre elementos no interactivos. */}
      <button type="button" className="mc-modal__backdrop" aria-label="Cerrar" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`mc-modal__panel mc-modal__panel--${size}`}
      >
        {children}
      </div>

      {/* Cierre FIJO al viewport (fuera del panel): siempre visible aunque el
          contenido haga scroll. Fondo con desenfoque para no camuflarse. */}
      <button type="button" className="mc-modal__close" aria-label="Cerrar" onClick={onClose}>
        <i className="fa-solid fa-xmark" aria-hidden="true" />
      </button>

      <style>{`
        .mc-modal {
          position: fixed; inset: 0; z-index: 100;
          display: flex; align-items: flex-start; justify-content: center;
          padding: clamp(12px, 4vh, 48px) 16px;
          background: rgba(17, 17, 17, 0.55);
          overflow-y: auto;
          animation: mcOverlayIn var(--dur-base) var(--ease-out);
        }
        .mc-modal__backdrop {
          position: fixed; inset: 0; z-index: 0;
          border: none; padding: 0; margin: 0;
          background: transparent; cursor: default;
        }
        .mc-modal__panel {
          position: relative; z-index: 1;
          width: 100%;
          background: var(--surface-card);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          padding: clamp(24px, 4vw, 48px);
          margin: auto;
          outline: none;
          animation: mcPanelIn var(--dur-slow) var(--ease-out);
        }
        .mc-modal__panel--lg { max-width: 1040px; }
        .mc-modal__panel--xl { max-width: 1200px; }
        .mc-modal__close {
          position: fixed; z-index: 120;
          top: clamp(12px, 3vh, 28px); right: clamp(12px, 3vw, 28px);
          width: 44px; height: 44px; border-radius: var(--radius-pill);
          border: 1px solid rgba(17, 17, 17, 0.08);
          /* Fondo translúcido + desenfoque para que no se camufle con el texto. */
          background: rgba(255, 255, 255, 0.72);
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          color: var(--ink-700); box-shadow: var(--shadow-md);
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 17px; cursor: pointer;
          transition: background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);
        }
        .mc-modal__close:hover { background: rgba(255, 255, 255, 0.95); transform: scale(1.05); }
        .mc-modal__close:focus-visible { outline: 2px solid var(--amber-500); outline-offset: 2px; }

        @keyframes mcOverlayIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes mcPanelIn {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mc-modal, .mc-modal__panel { animation: none; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
