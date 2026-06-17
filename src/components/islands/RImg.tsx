/**
 * RImg — equivalente React de Placeholder.astro (las islas no pueden
 * importar componentes .astro). Misma lógica: placeholder en dev,
 * <img> real cuando PUBLIC_USE_REAL_IMAGES=true. Lee la config compartida.
 */
import { USE_REAL_IMAGES, IMAGE_BASE } from '@lib/config';
import type { CSSProperties } from 'react';

interface Props {
  src: string;
  alt: string;
  ratio?: string;
  fit?: 'cover' | 'contain';
  rounded?: string;
  className?: string;
  style?: CSSProperties;
}

export default function RImg({
  src,
  alt,
  ratio = '4/3',
  fit = 'contain',
  rounded = 'var(--radius-md)',
  className,
  style,
}: Props) {
  const full = `${IMAGE_BASE}/${src}`;
  const box: CSSProperties = { aspectRatio: ratio, borderRadius: rounded, overflow: 'hidden', ...style };

  if (USE_REAL_IMAGES) {
    return (
      <img
        src={full}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        style={{ width: '100%', height: '100%', objectFit: fit, ...box }}
      />
    );
  }

  return (
    <div
      className={className}
      role="img"
      aria-label={alt}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 16,
        background:
          'repeating-linear-gradient(135deg,var(--grey-100) 0 12px,var(--grey-50) 12px 24px)',
        border: '1px dashed var(--grey-300)',
        color: 'var(--grey-500)',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        ...box,
      }}
    >
      <span>
        <i
          className="fa-regular fa-image"
          style={{ fontSize: 22, display: 'block', marginBottom: 8, color: 'var(--grey-400)' }}
        />
        <strong style={{ color: 'var(--grey-600)' }}>{alt}</strong>
        <br />
        <code style={{ fontSize: 11 }}>/{src}</code>
      </span>
    </div>
  );
}
