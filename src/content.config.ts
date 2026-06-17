/**
 * ============================================================
 * ASTRO CONTENT LAYER — colecciones tipadas.
 * ------------------------------------------------------------
 * Las ENTIDADES estructuradas (equipo, flota) viven como colecciones:
 * un archivo JSON por entidad en src/content/<colección>/<id>.json.
 * El `glob` loader toma el nombre de archivo como `id`.
 *
 * Ventajas vs. objetos sueltos en lib/content.ts:
 *   · Validación con Zod en build (errores tempranos).
 *   · `getCollection()` / `getEntry()` tipados.
 *   · Mapeo 1:1 a colecciones de un CMS (Decap) en el futuro.
 *
 * El microcopy de marketing de cada página sigue en lib/content.ts
 * (más cómodo para textos sueltos); las entidades viven aquí.
 * ============================================================
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* --- Sub-esquemas reutilizables --- */
const featureGroup = z.object({
  icon: z.string(), // clase Font Awesome, ej. "fa-bolt"
  title: z.string(),
  items: z.array(z.string()),
});

const profileSection = z.object({
  icon: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()),
});

/* --- Colección: equipo --- */
const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    role: z.string(), // rol en la tarjeta, ej. "CEO - Chief Executive Officer"
    roleShort: z.string().optional(), // rol en el modal, ej. "CEO & Founder"
    photo: z.string(), // ruta dentro de /assets/images
    bioShort: z.string(), // teaser para la tarjeta
    linkedin: z.string().url().optional(),
    meta: z.array(z.string()).optional(), // ["15+ años","7 países",...]
    location: z.string().optional(),
    credentials: z.array(z.object({ icon: z.string(), text: z.string() })).optional(),
    sections: z.array(profileSection).optional(),
    funFacts: z.array(z.string()).optional(),
  }),
});

/* --- Colección: flota --- */
const fleet = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/fleet' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    badge: z.string().optional(),
    fuel: z.enum(['ev', 'gas']).optional(), // tipo de motorización (estilo del badge)
    tags: z.array(z.string()).default([]),
    image: z.string(), // imagen principal (carrusel)
    detail: z.object({
      description: z.string(),
      images: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
      groupsTop: z.array(featureGroup).default([]),
      groupsBottom: z.array(featureGroup).default([]),
    }),
  }),
});

export const collections = { team, fleet };
