/**
 * ============================================================
 * HeroCarousel — carrusel transparente del hero.
 * ------------------------------------------------------------
 * Muestra modelos de auto que rotan AUTOMÁTICAMENTE con cross-fade,
 * SIN controles (es decorativo). Las imágenes van apiladas y solo la
 * activa queda visible (opacity), sobre el fondo del hero (transparente).
 *   · Intervalo: AUTOPLAY_MS (4,5 s — pausa cómoda para apreciar cada modelo).
 *   · Respeta prefers-reduced-motion: muestra solo el primero, sin rotar.
 *   · Se oculta en móvil vía CSS del hero (.hero__media), por lo que aquí
 *     además pausamos el timer si el contenedor no es visible.
 * ============================================================
 */
import { useEffect, useRef, useState } from 'react';
import RImg from './RImg';

const AUTOPLAY_MS = 4500;

interface Item {
  src: string;
  alt: string;
}

export default function HeroCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (items.length <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      if (timer) return;
      timer = setInterval(() => setIndex((i) => (i + 1) % items.length), AUTOPLAY_MS);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    // Solo rota cuando el carrusel es visible (no en móvil oculto / fuera de viewport).
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.1 },
    );
    if (rootRef.current) io.observe(rootRef.current);

    return () => {
      stop();
      io.disconnect();
    };
  }, [items.length]);

  return (
    <div className="hcar" ref={rootRef} aria-hidden="true">
      {items.map((it, i) => (
        <div className={`hcar__slide ${i === index ? 'is-active' : ''}`} key={it.src}>
          <RImg src={it.src} alt={it.alt} ratio="4/3" fit="contain" rounded="0" />
        </div>
      ))}

      <style>{`
        .hcar { position: relative; width: 100%; aspect-ratio: 4 / 3; }
        .hcar__slide {
          position: absolute; inset: 0;
          opacity: 0; transform: scale(0.98);
          transition: opacity 700ms var(--ease-out), transform 700ms var(--ease-out);
          filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.45));
        }
        .hcar__slide.is-active { opacity: 1; transform: none; }
        .hcar__slide :global(img),
        .hcar__slide :global(div) { width: 100%; height: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .hcar__slide { transition: none; }
        }
      `}</style>
    </div>
  );
}
