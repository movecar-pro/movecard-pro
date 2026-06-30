# MoveCar Pro — Landing

Landing page de **Move Car Pro** (Movecar.pro) construida con **AstroJS + Tailwind v4 + GSAP**, sobre el **Movecar Design System**.

Voz español-Chile, money-first, sin emoji. Color amber `#FE9307`, charcoal y verde eco. Tipografía Playfair Display + Inter.

---

## 🚀 Empezar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera /dist
npm run preview    # sirve el build
npm run lint       # ESLint (.astro + islas)
npm run format     # Prettier (ordena clases Tailwind)
```

> Las webfonts y Font Awesome se cargan por CDN: necesitas conexión a internet en dev.

---

## 🗂️ Estructura

```
src/
├── styles/
│   ├── global.css          # Tailwind v4 + @theme (puente DS→Tailwind) + base
│   └── tokens/             # tokens del DS copiados 1:1 (fuente de verdad)
├── lib/
│   ├── config.ts           # feature flags (imágenes, GA), metadatos SITE
│   ├── content.ts          # TODO el copy de la home (futuro CMS)
│   └── animations/         # gsap.client.ts (registro) + choreography.ts
├── components/
│   ├── primitives/         # Button, Eyebrow, Badge, Tag, Card, Logo, Placeholder (.astro)
│   ├── cards/              # StatBlock, FeatureItem, VehicleCard, Testimonial (.astro)
│   ├── decor/              # Streaks (motion-streak motif)
│   ├── islands/            # NavbarMobile, IncomeSimulator, PlanAccordion (React .tsx)
│   ├── navigation/         # Navbar, Footer
│   └── sections/           # las 10 secciones de la home
├── layouts/BaseLayout.astro
└── pages/
    ├── index.astro         # home (prueba de concepto GSAP)
    └── _ejemplo-pagina.astro  # plantilla para escalar (no se publica por el "_")
```

**Filosofía:** `primitives` (átomos del DS) → `sections` (los componen) → `islands` (solo lo interactivo va a React). Los tokens viven en CSS, así que `.astro` y `.tsx` los consumen igual.

---

## 🎨 Tokens y Tailwind

Los tokens del Design System están en `src/styles/tokens/` (CSS vars). `global.css` los expone como utilidades Tailwind vía `@theme`. Puedes usar **cualquiera de los dos**:

```astro
<div class="rounded-lg bg-amber-500">…</div>
<!-- utilidad Tailwind -->
<div style="background:var(--amber-500)">…</div>
<!-- var() del DS -->
```

Para cambiar un valor de marca, edita **solo** el archivo en `tokens/` — se propaga a todo.

---

## 🖼️ Imágenes (placeholders configurables)

No se incluyen imágenes reales. `<Placeholder />` pinta un marcador con la ruta esperada.

1. Coloca los assets reales en `public/assets/images/<ruta>`.
2. En `.env`: `PUBLIC_USE_REAL_IMAGES=true`.
3. `<Placeholder>` renderiza el `<img>` real automáticamente.

```astro
<Placeholder src="vehicles/vehicle-mg-zs.png" alt="MG ZS" ratio="3/2" fit="contain" />
```

---

## ✨ Animaciones (GSAP)

Todo vive en `src/lib/animations/`. La home las inicializa en un `<script>` cliente al final de `index.astro`.

**Añadir una animación a un elemento nuevo — sin tocar JS:**

```astro
<!-- Reveal on-scroll -->
<div data-gsap="fade-up">…</div>
<!-- fade-up | fade-in | fade-left | fade-right | scale-in -->

<!-- Grupo con entrada escalonada -->
<div data-gsap-group>
  <div data-gsap-child>…</div>
  <div data-gsap-child>…</div>
</div>

<!-- Contador animado 0 → valor -->
<span data-count="98" data-count-suffix="%">98%</span>

<!-- Parallax del fondo al hacer scroll -->
<Streaks parallax />
```

Para algo a medida, añade un bloque dentro de `initHomeChoreography()` en `choreography.ts`. Se respeta `prefers-reduced-motion` (sin animación, todo visible) y hay fallback si GSAP no carga.

---

## 🏝️ Islas dinámicas (React)

Lo interactivo se aísla en `src/components/islands/*.tsx` y se hidrata con directivas `client:*`:

| Directiva        | Cuándo hidrata        | Ejemplo en el repo                 |
| ---------------- | --------------------- | ---------------------------------- |
| `client:load`    | inmediato             | (above the fold crítico)           |
| `client:idle`    | navegador ocioso      | `NavbarMobile`                     |
| `client:visible` | al entrar en viewport | `IncomeSimulator`, `PlanAccordion` |
| `client:media`   | según media query     | —                                  |

```astro
import MiIsla from '@components/islands/MiIsla.tsx';
<MiIsla client:visible prop="valor" />
```

Pasa props **serializables** (strings, números, arrays). Todo lo que no sea interactivo, déjalo en `.astro` (cero JS).

---

## 🗃️ Content Layer (entidades) + Modales

Las **entidades estructuradas** viven en colecciones del Content Layer de Astro (validadas con Zod en build), no en `content.ts`:

```
src/content.config.ts        # define colecciones `team` y `fleet` (+ esquemas Zod)
src/content/team/*.json      # un archivo por integrante (id = nombre de archivo)
src/content/fleet/*.json     # un archivo por vehículo
```

Las secciones las consumen con `getCollection()`:

```astro
const members = (await getCollection('team')).sort((a, b) => a.data.order - b.data.order);
```

**Modales** (islas React con shell accesible compartido — ESC, scroll-lock, foco, backdrop):

| Modal          | Disparador                                                                                                     | Hidratación   |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| `TeamModal`    | grilla `Equipo.astro` (2ª sección de `/nosotros`); cards estáticas con `data-team-modal="<id>"`, clic delegado | `client:idle` |
| `VehicleModal` | `FleetCarousel` (sección Flota); clic en una tarjeta del carrusel                                              | `client:idle` |

Patrón: el contenido se renderiza en el servidor (SEO/perf) y solo el comportamiento del modal/carrusel viaja como JS. El microcopy de marketing sigue en `content.ts`; las entidades, en colecciones (listo para mapear a Decap).

> Nota de hidratación: las islas usan `client:idle` para hidratar sin depender del viewport. Para diferir hasta el scroll, cambia a `client:visible`.

## 📝 Gestor de contenidos (Decap / Netlify CMS)

Hoy el copy está en `src/lib/content.ts` (centralizado y tipado). Para conectar el CMS:

1. En Netlify: **Identity → Enable** y **Git Gateway → Enable** (ver `netlify.toml`).
2. Edita `public/admin/config.yml` con tus colecciones.
3. Migra el contenido a `src/content/` con el **Content Layer** de Astro (`src/content.config.ts` + `defineCollection`) y reemplaza los imports de `content.ts` por `getEntry()`. La forma de los datos ya está modelada.

El panel queda en `/admin`.

---

## 📊 Analítica / Tracking

1. En `.env`: `PUBLIC_GA_ID=G-XXXXXXXXXX`. Vacío = no se inyecta nada.
2. El script GA4 se inyecta condicionalmente en `BaseLayout.astro` (bloque `📊 ANALÍTICA`).
3. Para eventos de clic, añade `data-ga-event="..."` a los botones y un listener global, o añade aquí otros proveedores (GTM, Plausible, Meta Pixel) con el mismo patrón condicional.

---

## 📐 Responsive

Mobile-first. Breakpoints en `@theme` (sm 480 / md 768 / lg 1024 / xl 1280). Las secciones colapsan a una columna bajo 900px; la tipografía y los gutters se reducen vía media queries en `tokens/`.

---

## 🧩 Stack

Astro 5 · Tailwind v4 (`@tailwindcss/vite`) · React 19 (islas) · GSAP 3 (+ ScrollTrigger) · ESLint 9 (flat) · Prettier (+ astro + tailwindcss).
