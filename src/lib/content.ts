/**
 * ============================================================
 * CONTENIDO DE LA LANDING — fuente de datos tipada.
 * ------------------------------------------------------------
 * Hoy el contenido vive aquí como objetos TypeScript. Esto centraliza
 * todos los textos/CTAs de la home en un solo lugar (las secciones .astro
 * solo consumen estos datos, no llevan copy hardcodeado).
 *
 * 🔌 INTEGRACIÓN CMS (Decap / Netlify CMS) — pasos futuros:
 *   1. Define colecciones en /public/admin/config.yml (ej. "home").
 *   2. Guarda el contenido como Markdown/JSON en src/content/ y crea un
 *      `src/content.config.ts` con `defineCollection()` (Astro Content Layer).
 *   3. Reemplaza estos exports por `getEntry('home', 'index')` en las
 *      secciones. La forma de los datos ya está modelada abajo, así que
 *      el cambio es localizado y sin fricción.
 * ============================================================
 */

export const nav = {
  links: [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Precios / Planes', href: '/precios' },
  ],
  cta: 'Quiero postular',
};

export const hero = {
  eyebrow: 'Súmate a la plataforma de electromovilidad más moderna de Chile',
  // El span amber se resuelve en el componente; aquí marcamos la parte destacada.
  titleLead: 'Genera desde',
  titleHighlight: '$300.000*',
  titleRest: 'a la semana. Sin auto propio.',
  subtitle:
    'Concéntrate en tus ganancias mientras nosotros nos encargamos del resto. Únete al futuro de la electromovilidad.',
  ctaPrimary: 'Quiero postular',
  ctaSecondary: 'Cómo funciona',
  bullets: ['Sin pagos iniciales', 'Monitoreo de ganancias online', 'Soporte 24/7'],
  image: { src: 'vehicles/vehicle-coolray.png', alt: 'Vehículo eléctrico Movecar' },
};

export const trustStats = [
  { value: '$400.000+', label: 'Promedio semana' },
  { value: '$800K', label: 'Ingreso mensual promedio' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte' },
];

export const ventajas = {
  eyebrow: 'Ventajas de Movecar',
  title: 'Muévete al futuro de la Electromovilidad',
  body: 'Maximiza tus ganancias con nuestra flota y asegura un sueldo real. Hoy, sin sorpresas ni letra chica.',
  cta: 'Comenzar ahora',
  badge: 'Mejor ingreso del mercado',
  highlights: [
    'Maximiza tus ganancias con nuestra flota',
    'Hasta $500.000 semanales',
    'Promedio $450.000',
  ],
};

export const simulador = {
  eyebrow: 'Calcula tu ingreso aproximado',
  title: '¿Cuánto puedes ganar con Movecar?',
  body: 'Usa nuestro simulador interactivo para proyectar tus ganancias reales basadas en tu disponibilidad.',
  planes: ['MoveElectric AM', 'MoveElectric PM', 'Plan Bencina'],
  disclaimer: 'Sin compromiso. Proceso 100% online.',
  cta: 'Quiero postular',
};

export const flota = {
  eyebrow: 'Flota',
  title: 'Los vehículos que puedes elegir',
  body: 'Todos incluyen seguro, mantención y soporte. Haz clic en un modelo para ver su ficha.',
  cta: 'Conocer la flota',
  // Los vehículos viven en el Content Layer (colección `fleet`, src/content/fleet/).
};

export const pasos = {
  eyebrow: 'Inscripción sin estrés',
  title: 'Inscríbete fácil. Sin costos, sin trámites.',
  body: 'Desde la inscripción hasta la entrega, hacemos un proceso simple para que empieces a generar ganancias rápido.',
  cta: 'Comenzar ahora',
  steps: [
    { day: 'Día 1', title: 'Regístrate', body: 'Completa tus datos iniciales para postular a Movecar.' },
    {
      day: 'Día 1-3',
      title: 'Entrevista',
      body: 'Coordinamos una reunión para conocerte y resolver tus dudas.',
    },
    { day: 'Día 4', title: 'Activación', body: 'Firmamos el contrato y activamos tu perfil de conductor.' },
    {
      day: 'Día 5',
      title: 'Entrega',
      body: 'Recibes tu vehículo y comienzas a generar ingresos desde Movecar.',
    },
  ],
};

export const testimonios = {
  eyebrow: 'Testimonios',
  title: 'Movedrivers felices',
  body: 'No lo decimos nosotros, lo dicen ellos.',
  items: [
    {
      rating: 5,
      quote:
        'Llevamos meses trabajando con Movecar y fue súper rápido. El monitoreo de una semana ya estaba en la plataforma.',
      name: 'Carlos B.',
      role: 'Santiago · 8 meses',
      income: '$620K/mes',
    },
    {
      rating: 4,
      quote:
        'Lo que más valoro es el soporte. Tuve un problema con mi mantención y el equipo respondió súper rápido.',
      name: 'María F.',
      role: 'Valparaíso · 1 año',
      income: '$540K/mes',
    },
    {
      rating: 5,
      quote:
        'Nada que reprochar. Todos los gastos están claros antes y la diferencia con otras plataformas es enorme.',
      name: 'Juan F.',
      role: 'Santiago · 4 meses',
      income: '$670K/mes',
    },
  ],
};

export const fortalezas = {
  eyebrow: 'Súbete al futuro y al compromiso con el planeta',
  title: 'Fortalezas de Nuestro Modelo',
  items: [
    { icon: 'fa-bolt', title: 'Bono Electricidad', body: 'Bono por Movecar sobre el 50% de tus gastos mensuales.' },
    {
      icon: 'fa-shield-halved',
      title: 'Seguro Full Cobertura',
      body: 'Cuentas con el mejor seguro del mercado, deducibles bajos.',
    },
    {
      icon: 'fa-charging-station',
      title: 'Red de Carga',
      body: 'Red de carga libre. Carga donde quieras evitando filas y esperas.',
    },
    { icon: 'fa-mobile-screen', title: 'App Copilot', body: 'Monitorea en línea tus ingresos y gastos en tiempo real.' },
    {
      icon: 'fa-leaf',
      title: 'Bajo Gasto Eléctrico',
      body: 'Vehículos eléctricos de alta eficiencia y bajo consumo.',
    },
    {
      icon: 'fa-rotate',
      title: 'Auto Reemplazo',
      body: 'Si el tuyo falla, te entregamos uno de reemplazo antes de 24 horas.',
    },
  ],
};

export const appPromo = {
  title: 'Movecar – Copilot',
  body: 'La única plataforma donde puedes revisar la generación de ganancias y gestión en línea, porque cuentas claras conservan el bienestar.',
  cta: 'Descargar APP',
  stores: ['Apple', 'Android'],
  image: { src: 'app/app-earnings.png', alt: 'App Movecar Copilot' },
};

export const finalCta = {
  eyebrow: 'Cupos limitados',
  title: 'Empieza a generar ganancias esta semana',
  body: 'Sé parte de Movecar y maximiza tus ganancias con las mejores condiciones del mercado.',
  ctaPrimary: 'Postular ahora',
  ctaSecondary: 'Hablar con ventas',
  bullets: ['Sin pagos iniciales', '100% online', 'Contrato claro'],
};

export const footer = {
  tagline: 'La plataforma de electromovilidad para movedrivers en Chile.',
  columns: [
    { title: 'Plataforma', links: ['Cómo funciona', 'Flota', 'Precios', 'Simulador'] },
    { title: 'Compañía', links: ['Nosotros', 'Preguntas Frecuentes', 'Contacto', 'Blog'] },
    { title: 'Soporte', links: ['Ayuda', 'Estado del servicio', 'WhatsApp', 'Contacto 24/7'] },
  ],
};

/* ============================================================
   PÁGINA: NOSOTROS
   ============================================================ */
export const about = {
  header: {
    eyebrow: 'Nosotros',
    title: 'Movemos a Chile hacia la electromovilidad',
    subtitle:
      'Somos la plataforma que le entrega a cada movedriver un vehículo eléctrico, con todo incluido, para que genere ingresos sin la carga de tener auto propio.',
  },
  mision: {
    eyebrow: 'Nuestra misión',
    title: 'Que manejar deje de ser un gasto y sea una ganancia',
    body: 'Nacimos para resolver el mayor problema del conductor de apps: el costo y el riesgo de operar un auto. Movecar pone el vehículo, el seguro, la mantención y la carga; tú pones las ganas de generar ingresos.',
    cta: 'Quiero postular',
    highlights: [
      'Vehículos 100% eléctricos de alta eficiencia',
      'Todo incluido: seguro, mantención y carga',
      'Soporte humano 24/7 y app de monitoreo',
    ],
  },
  stats: [
    { value: '+1.200', label: 'Movedrivers activos' },
    { value: '98%', label: 'Satisfacción' },
    { value: '3', label: 'Ciudades en Chile' },
    { value: '24/7', label: 'Soporte' },
  ],
  valores: {
    eyebrow: 'Nuestros valores',
    title: 'Cómo trabajamos',
    items: [
      { icon: 'fa-hand-holding-dollar', title: 'Transparencia', body: 'Cuentas claras, sin letra chica. Sabes exactamente cuánto generas y cuánto gastas.' },
      { icon: 'fa-leaf', title: 'Compromiso eco', body: 'Cada vehículo eléctrico es un paso hacia un transporte más limpio para todos.' },
      { icon: 'fa-people-group', title: 'Comunidad', body: 'Nuestros movedrivers son el centro: los escuchamos y crecemos con ellos.' },
      { icon: 'fa-headset', title: 'Cercanía', body: 'Soporte humano y rápido cuando lo necesitas, no un bot que te deja esperando.' },
      { icon: 'fa-shield-halved', title: 'Respaldo', body: 'Seguro full cobertura y auto de reemplazo: nunca dejas de generar ingresos.' },
      { icon: 'fa-rocket', title: 'Simpleza', body: 'Del registro a la entrega en días, 100% online y sin trámites engorrosos.' },
    ],
  },
};

/* ============================================================
   PÁGINA: CÓMO FUNCIONA
   ============================================================ */
export const comoFunciona = {
  header: {
    eyebrow: 'Cómo funciona',
    title: 'De la postulación a la calle en 5 días',
    subtitle:
      'Un proceso simple, online y sin costos de entrada. Te acompañamos en cada paso hasta que recibes tu vehículo y empiezas a generar.',
  },
  faqEyebrow: 'Preguntas frecuentes',
  faqTitle: 'Resolvemos tus dudas',
  faqs: [
    {
      title: '¿Necesito tener auto propio?',
      subtitle: 'Requisitos',
      content: 'No. Movecar te entrega el vehículo eléctrico con seguro, mantención y carga incluidos.',
    },
    {
      title: '¿Qué necesito para postular?',
      content: 'Licencia de conducir vigente clase B, antecedentes al día y ganas de generar ingresos. El resto lo vemos en la entrevista.',
    },
    {
      title: '¿Cuánto puedo ganar?',
      content: 'Depende de tu disponibilidad. Usa el simulador para una estimación según tus días y horas de trabajo.',
    },
    {
      title: '¿Qué pasa si el auto falla?',
      content: 'Te entregamos un vehículo de reemplazo en menos de 24 horas para que no dejes de generar ingresos.',
    },
    {
      title: '¿Hay costos iniciales?',
      content: 'No hay pagos iniciales ni trámites con costo. El plan es semanal y todo está incluido.',
    },
  ],
};

/* ============================================================
   PÁGINA: PRECIOS / PLANES
   ============================================================ */
export const pricing = {
  header: {
    eyebrow: 'Precios / Planes',
    title: 'Un plan semanal, todo incluido',
    subtitle:
      'Sin pagos iniciales ni sorpresas. Eliges el plan, nosotros ponemos el vehículo, el seguro, la mantención y la carga.',
  },
  plans: [
    {
      name: 'MoveElectric AM',
      price: '$110.000',
      description: 'Ideal para quienes manejan en jornada de mañana.',
      features: [
        'Vehículo eléctrico full equipo',
        'Seguro full cobertura',
        'Mantención incluida',
        'Carga en red Movecar',
        'Soporte 24/7',
      ],
      cta: 'Quiero postular',
    },
    {
      name: 'MoveElectric Full',
      price: '$160.000',
      description: 'El plan más elegido. Disponibilidad completa, máximo ingreso.',
      badge: 'Más popular',
      featured: true,
      features: [
        'Todo lo del plan AM',
        'Disponibilidad 7 días',
        'Bono electricidad sobre el 50%',
        'Auto de reemplazo < 24 h',
        'Prioridad en soporte',
      ],
      cta: 'Quiero postular',
    },
    {
      name: 'Plan Bencina',
      price: '$140.000',
      description: 'Para quienes prefieren un vehículo a combustión.',
      features: [
        'Vehículo a combustión full equipo',
        'Seguro full cobertura',
        'Mantención incluida',
        'Soporte 24/7',
        'Cambio a eléctrico cuando quieras',
      ],
      cta: 'Quiero postular',
    },
  ],
  incluye: {
    eyebrow: 'Siempre incluido',
    title: 'Todos los planes vienen con',
    items: [
      { icon: 'fa-shield-halved', title: 'Seguro Full Cobertura', body: 'El mejor seguro del mercado, con deducibles bajos.' },
      { icon: 'fa-wrench', title: 'Mantención', body: 'Mantención preventiva y correctiva sin costo adicional.' },
      { icon: 'fa-charging-station', title: 'Red de Carga', body: 'Carga libre en la red Movecar, sin filas ni esperas.' },
      { icon: 'fa-rotate', title: 'Auto Reemplazo', body: 'Si el tuyo falla, te entregamos otro antes de 24 horas.' },
    ],
  },
};
