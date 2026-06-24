/**
 * ============================================================
 * VehicleModal — ficha de un vehículo (screenshot 2).
 * ------------------------------------------------------------
 * Presentacional: recibe el vehículo + open/onClose. Lo controla el
 * FleetCarousel (viven en la misma isla, sin event-bus).
 * Estructura: cabecera (badge + nombre serif + descripción) → grupos de
 * features (grid) → imágenes → grupos inferiores.
 * ============================================================
 */
import Modal from './Modal';
import RImg from './RImg';

interface FeatureGroup {
  icon: string;
  title: string;
  items: string[];
}
export interface Vehicle {
  id: string;
  name: string;
  badge?: string;
  fuel?: 'ev' | 'gas';
  tags?: string[];
  image: string;
  detail: {
    description: string;
    images: { src: string; alt: string }[];
    groupsTop: FeatureGroup[];
    groupsBottom: FeatureGroup[];
  };
}

function Group({ g }: { g: FeatureGroup }) {
  return (
    <div className="vm__group">
      <span className="vm__group-icon" aria-hidden="true">
        <i className={`fa-solid ${g.icon}`} />
      </span>
      <div>
        <h4 className="vm__group-title">{g.title}</h4>
        <ul className="vm__group-list">
          {g.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function VehicleModal({
  vehicle,
  open,
  onClose,
}: {
  vehicle: Vehicle | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="vehicle-modal-name" size="xl">
      {vehicle && (
        <div className="vm">
          {/* Imagen del auto al inicio — SOLO móvil */}
          <div className="vm__hero">
            <RImg src={vehicle.image} alt={vehicle.name} ratio="16/10" fit="contain" rounded="var(--radius-lg)" />
          </div>

          {/* Cabecera (columna izquierda) + grilla de grupos (3 columnas) */}
          <div className="vm__top">
            <header className="vm__head">
              {vehicle.badge && (
                <span className={`vm__badge ${vehicle.fuel === 'gas' ? 'vm__badge--gas' : ''}`}>
                  {vehicle.badge}
                </span>
              )}
              <h2 id="vehicle-modal-name" className="vm__name">
                {vehicle.name}
              </h2>
              <p className="vm__desc">{vehicle.detail.description}</p>
            </header>
            <div className="vm__groups">
              {vehicle.detail.groupsTop.map((g, i) => (
                <Group key={i} g={g} />
              ))}
            </div>
          </div>

          {/* Imágenes */}
          {vehicle.detail.images.length > 0 && (
            <div className="vm__images" data-count={vehicle.detail.images.length}>
              {vehicle.detail.images.map((img, i) => (
                <div className="vm__image mix-blend-multiply" key={i}>
                  <RImg src={img.src} alt={img.alt} ratio="16/10" fit="contain" rounded="var(--radius-lg)" />
                </div>
              ))}
            </div>
          )}

          {/* Grupos inferiores */}
          {vehicle.detail.groupsBottom.length > 0 && (
            <div className="vm__bottom">
              {vehicle.detail.groupsBottom.map((g, i) => (
                <Group key={i} g={g} />
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        .vm { display: flex; flex-direction: column; gap: 32px; }
        /* Imagen hero: solo se muestra en móvil (≤600px) */
        .vm__hero { display: none; background: var(--grey-50); border-radius: var(--radius-lg); padding: 12px; }
        /* Cabecera a la izquierda + grilla de grupos a la derecha (3 columnas) */
        .vm__top {
          display: grid;
          grid-template-columns: 1fr 2.8fr;
          gap: 28px 40px;
          align-items: start;
        }
        .vm__groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px 32px;
        }
        /* Grupos inferiores: fila completa de 4 columnas */
        .vm__bottom {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px 32px;
        }
        .vm__head { display: flex; flex-direction: column; gap: 12px; }
        .vm__badge {
          align-self: flex-start; background: var(--green-100); color: var(--green-700);
          font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: 12px;
          padding: 5px 12px; border-radius: var(--radius-pill);
        }
        .vm__badge--gas { background: var(--grey-100); color: var(--ink-600); }
        .vm__name { margin: 0; font-family: var(--font-display); font-weight: var(--fw-semibold); font-size: 38px; line-height: 1.05; color: var(--text-strong); position: relative; }
        .vm__name::after { content: ''; display: block; width: 48px; height: 3px; background: var(--amber-500); margin-top: 14px; border-radius: 2px; }
        .vm__desc { margin: 0; font-size: 14px; line-height: 1.6; color: var(--text-muted); }

        .vm__group { display: grid; grid-template-columns: 32px 1fr; gap: 12px; align-items: start; }
        .vm__group-icon { width: 32px; height: 32px; border-radius: var(--radius-pill); border: 1px solid var(--amber-300); color: var(--amber-500); display: inline-flex; align-items: center; justify-content: center; font-size: 13px; }
        .vm__group-title { margin: 0 0 8px; font-family: var(--font-sans); font-weight: var(--fw-bold); font-size: 15px; color: var(--text-strong); }
        .vm__group-list { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
        .vm__group-list li { font-size: 14px; line-height: 1.45; color: var(--text-body); }

        .vm__images { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; margin: 0 -3rem; }
        .vm__images[data-count="1"] { grid-template-columns: 1fr; max-width: 640px; margin-inline: auto; }
        .vm__image { background: var(--grey-50); padding: 0; }

        @media (max-width: 1024px) {
          .vm__top { grid-template-columns: 1fr; }
          .vm__groups { grid-template-columns: repeat(2, 1fr); }
          .vm__bottom { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .vm__groups, .vm__bottom { grid-template-columns: 1fr; }
          .vm__hero { display: block; }
          .vm__images { display: none; } /* en móvil basta la imagen hero de arriba */
          .vm__name { font-size: 30px; }
        }
      `}</style>
    </Modal>
  );
}
