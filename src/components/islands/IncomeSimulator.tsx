/**
 * ============================================================
 * ISLA REACT — Simulador de ingresos
 * ------------------------------------------------------------
 * Recrea el control interactivo del DS (Select + RangeSlider + cálculo
 * en vivo). Se hidrata con `client:visible` desde Simulador.astro porque
 * está bajo el fold: no carga JS hasta que el usuario se acerca.
 *
 * La fórmula es de ejemplo — conéctala a tu lógica/endpoint real cuando
 * exista. Mantén los estilos atados a los tokens del DS.
 * ============================================================
 */
import { useMemo, useState } from 'react';

interface Props {
  planes: string[];
  cta: string;
  disclaimer: string;
}

export default function IncomeSimulator({ planes, cta, disclaimer }: Props) {
  const [plan, setPlan] = useState(planes[0]);
  const [horas, setHoras] = useState(12);
  const [dias, setDias] = useState(5);

  // Fórmula de ejemplo (sustituir por la real).
  const monto = useMemo(() => {
    const base = 170000 + dias * 180000;
    const factorHoras = 0.6 + (horas / 12) * 0.4;
    return Math.round(base * factorHoras).toLocaleString('es-CL');
  }, [dias, horas]);

  const pct = ((dias - 1) / (7 - 1)) * 100;
  const track = `linear-gradient(to right, var(--amber-500) 0%, var(--amber-500) ${pct}%, var(--grey-200) ${pct}%, var(--grey-200) 100%)`;

  return (
    <div className="mc-sim">
      <div className="mc-sim__row">
        <label className="mc-sim__field">
          <span>Plan</span>
          <span className="mc-sim__select-wrap">
            <select value={plan} onChange={(e) => setPlan(e.target.value)}>
              {planes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <i className="fa-solid fa-chevron-down" aria-hidden="true" />
          </span>
        </label>
        <label className="mc-sim__field">
          <span>Horas de trabajo</span>
          <input
            type="number"
            min={1}
            max={16}
            value={horas}
            onChange={(e) => setHoras(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="mc-sim__slider">
        <div className="mc-sim__slider-head">
          <span>Días disponibles por semana</span>
          <strong>{dias}</strong>
        </div>
        <input
          type="range"
          min={1}
          max={7}
          step={1}
          value={dias}
          onChange={(e) => setDias(Number(e.target.value))}
          style={{ background: track }}
          aria-label="Días disponibles por semana"
        />
      </div>

      <div className="mc-sim__result">
        <span className="mc-sim__result-label">Podrías ganar hasta</span>
        <span className="mc-sim__result-amount">
          ${monto}
          <span className="mc-sim__result-unit"> al mes*</span>
        </span>
      </div>

      <a href="#postular" className="mc-sim__cta uppercase">
        {cta}
      </a>
      <span className="mc-sim__disclaimer">{disclaimer}</span>

      <style>{`
        .mc-sim { display: flex; flex-direction: column; gap: var(--space-5); }
        .mc-sim__row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        @media (max-width: 480px) { .mc-sim__row { grid-template-columns: 1fr; } }
        .mc-sim__field { display: flex; flex-direction: column; gap: 8px; }
        .mc-sim__field > span {
          font-family: var(--font-sans); font-weight: var(--fw-medium); font-size: 13px; color: var(--text-muted);
        }
        .mc-sim__field input, .mc-sim__select-wrap select {
          width: 100%; box-sizing: border-box; background: var(--white);
          border: 1px solid var(--border-subtle); border-radius: var(--radius-sm);
          padding: 12px 14px; font-family: var(--font-sans); font-size: var(--fs-body);
          color: var(--text-strong); outline: none;
        }
        .mc-sim__select-wrap { position: relative; display: flex; }
        .mc-sim__select-wrap select { appearance: none; -webkit-appearance: none; padding-right: 40px; cursor: pointer; }
        .mc-sim__select-wrap i {
          position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
          pointer-events: none; font-size: 13px; color: var(--text-muted);
        }
        .mc-sim__slider { display: flex; flex-direction: column; gap: 10px; }
        .mc-sim__slider-head { display: flex; justify-content: space-between; align-items: center; }
        .mc-sim__slider-head span { font-family: var(--font-sans); font-size: 13px; color: var(--text-muted); }
        .mc-sim__slider-head strong { font-family: var(--font-sans); font-size: 14px; color: var(--text-strong); }
        .mc-sim input[type=range] {
          width: 100%; appearance: none; -webkit-appearance: none; height: 6px;
          border-radius: 999px; outline: none; cursor: pointer;
        }
        .mc-sim input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%;
          background: var(--amber-500); border: 3px solid var(--white); box-shadow: var(--shadow-sm); cursor: pointer;
        }
        .mc-sim input[type=range]::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%; background: var(--amber-500);
          border: 3px solid var(--white); box-shadow: var(--shadow-sm); cursor: pointer;
        }
        .mc-sim__result { background: var(--grey-50); border-radius: var(--radius-md); padding: 20px; text-align: center; }
        .mc-sim__result-label { display: block; font-size: 13px; color: var(--text-muted); }
        .mc-sim__result-amount {
          display: block; font-family: var(--font-display); font-weight: var(--fw-bold);
          font-size: 40px; color: var(--text-strong);
        }
        .mc-sim__result-unit { font-size: 15px; font-family: var(--font-sans); font-weight: var(--fw-medium); color: var(--text-muted); }
        .mc-sim__cta {
          display: flex; align-items: center; justify-content: center; padding: 15px 26px;
          background: var(--color-primary); color: var(--white); border-radius: var(--radius-sm);
          box-shadow: var(--shadow-amber); font-family: var(--font-sans); font-weight: var(--fw-semibold);
          font-size: 16px; text-decoration: none; transition: background var(--dur-fast) var(--ease-out);
        }
        .mc-sim__cta:hover { background: var(--color-primary-hover); }
        .mc-sim__disclaimer { font-size: 12px; color: var(--text-muted); text-align: center; }
      `}</style>
    </div>
  );
}
