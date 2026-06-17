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
  carImage: { src: 'vehicles/top-view.png', alt: 'Vista superior del modelo Movecar' },
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

/* Ventajas de Movecar — 5 tarjetas (en móvil se comportan como carrusel). */
export const ventajasMovecar = {
  eyebrow: 'Ventajas de Movecar',
  title: 'Muévete al futuro de la Electromovilidad',
  subtitle: 'Maximiza tus ganancias con nuestra flota y asegura un sueldo real, hoy, sin sorpresas ni letra chica.',
  cta: 'Comenzar ahora',
  items: [
    {
      icon: 'fa-sack-dollar',
      title: 'Mejor ingreso del mercado',
      body: 'Maximiza tus ganancias con nuestra flota y olvídate de los gastos imprevistos.',
      bullets: ['Hasta $500.000 semanales', 'Promedio $450.000'],
    },
    {
      icon: 'fa-arrow-trend-up',
      title: 'Capitaliza tu esfuerzo',
      body: 'A fin de mes puedes optar a comprar tu auto y capitalizar tu trabajo.',
      bullets: [],
    },
    {
      icon: 'fa-leaf',
      title: 'Costos operativos más bajos',
      body: 'Seguro, mantenciones y descuentos exclusivos para conductores.',
      bullets: [],
    },
    {
      icon: 'fa-mobile-screen',
      title: 'App más completa del mercado',
      body: 'Monitorea en tiempo real tus ingresos y gastos, con apoyo 24/7.',
      bullets: [],
    },
    {
      icon: 'fa-bolt',
      title: 'Ingresa hoy, sin sorpresas',
      body: 'Sin pagos comerciales ni costos de localización: recibes pagos que se adaptan a tu flujo.',
      bullets: [],
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
  // Hero de la página (foto de conductor + streaks).
  hero: {
    title: '¿Porqué MOVECAR es tu mejor opción?',
    subtitle:
      'Movecar combina tecnología, soporte humano y una flota preparada para que puedas enfocarte en tus ganancias.',
    ctaPrimary: 'Quiero postular',
    ctaSecondary: 'Cómo funciona',
    bullets: ['Sin pagos iniciales', 'Monitoreo de ganancias online', 'Soporte 24/7'],
    image: { src: 'lifestyle/driver-wheel.png', alt: 'Conductor Movecar al volante' },
  },
  // Stepper horizontal "Cómo Funciona".
  flow: {
    eyebrow: 'Ingreso a Movecar',
    title: 'Cómo Funciona',
    subtitle: 'Maximiza tus ganancias con una flota lista para trabajar y olvídate de los gastos imprevistos.',
    cta: 'Quiero postular',
    steps: [
      {
        label: 'Elección de Plan',
        title: 'Elige el plan que más te acomode',
        items: [
          'Simula tus ganancias según tus horas trabajadas y tu zona con la calculadora. Referencias basadas en el promedio de Movedrivers.',
          'Información clara, transparente y sin letra chica.',
        ],
      },
      {
        label: 'Preaprobación',
        title: 'Tu perfil preaprobado en 24 horas',
        items: [
          'Postula desde tu computador o celular, sin filas ni trámites innecesarios.',
          'Nuestro equipo revisa tu solicitud y te acompaña directamente por WhatsApp.',
        ],
      },
      {
        label: 'Información Firma',
        title: 'Conoce exacto lo que vas a pagar antes de firmar',
        items: [
          'Seguro, mantenciones, impuestos y costos operacionales completamente desglosados.',
          'Toda la información disponible en la liquidación semanal y en MoveCar Copilot.',
          'Sin costos ocultos ni sorpresas.',
        ],
      },
      {
        label: 'Retiro Auto',
        title: 'Retira tu auto y empieza a generar ganancias',
        items: [
          'Nosotros nos encargamos de la operación: mantenciones, seguros, permisos, soporte y todo lo que necesitas.',
          'Tú solo te preocupas de manejar.',
        ],
      },
    ],
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
// Features incluidas en todos los planes (precio semanal "todo incluido").
const PLAN_FEATURES = [
  'Vehículo habilitado y configurado para Uber',
  'Seguro vehicular completo con gestión de siniestros',
  'Mantenciones preventivas programadas',
  'Soporte 24/7 con mesa de ayuda y monitoreo GPS',
  'Liquidación semanal detallada',
];

export const pricing = {
  header: {
    eyebrow: 'Planes',
    title: 'Los planes más completos del mercado',
    subtitle:
      'Elige el turno que mejor se adapta a ti. El precio semanal lo incluye todo: vehículo, seguro, mantención y soporte. Sin pagos iniciales.',
  },
  // 4 planes en 2 grupos. En desktop son tarjetas; en móvil, acordeones.
  groups: [
    {
      label: 'Planes MoveElectric',
      fuel: 'ev' as const,
      plans: [
        {
          id: 'electric-am',
          name: 'MoveElectric AM',
          schedule: 'Diurno · 06:00 a 18:00 · 8,5 hrs productivas',
          price: '$242.500',
          period: 'semanal',
          features: PLAN_FEATURES,
          cta: 'Quiero postular',
        },
        {
          id: 'electric-pm',
          name: 'MoveElectric PM',
          schedule: 'Nocturno · 18:00 a 06:00 · 10 hrs productivas',
          price: '$343.375',
          period: 'semanal',
          badge: 'Mayor ingreso',
          featured: true,
          features: PLAN_FEATURES,
          cta: 'Quiero postular',
        },
      ],
    },
    {
      label: 'Planes MoveGas',
      fuel: 'gas' as const,
      plans: [
        {
          id: 'gas-am',
          name: 'MoveGas AM',
          schedule: 'Diurno · 06:00 a 18:00 · 8,5 hrs productivas',
          price: '$242.500',
          period: 'semanal',
          features: PLAN_FEATURES,
          cta: 'Quiero postular',
        },
        {
          id: 'gas-pm',
          name: 'MoveGas PM',
          schedule: 'Nocturno · 18:00 a 06:00 · 10 hrs productivas',
          price: '$343.375',
          period: 'semanal',
          features: PLAN_FEATURES,
          cta: 'Quiero postular',
        },
      ],
    },
  ],
  // Franja reasegura ("Rápido, Transparente y Seguro").
  reassurance: {
    title: 'Rápido, Transparente y Seguro',
    body: 'Elige el plan que más te acomode. Te acompañamos desde el primer día.',
    items: [
      { icon: 'fa-bolt', title: 'Rápido', body: 'Proceso 100% online y ágil: en pocos días estás generando.' },
      { icon: 'fa-receipt', title: 'Transparente', body: 'Cuentas claras, sin letra chica: todo en tu liquidación semanal.' },
      { icon: 'fa-shield-halved', title: 'Seguro', body: 'Seguro full cobertura y soporte 24/7 en cada turno.' },
    ],
  },
  // Tabla comparativa. En móvil: primera columna fija + scroll (2 visibles).
  compare: {
    eyebrow: 'Compara',
    title: 'Asegura el mejor plan para lo que necesitas',
    subtitle:
      'Todos los planes incluyen lo esencial. Revisa las diferencias y elige según tu turno y motorización.',
    plans: [
      { name: 'MoveElectric AM', fuel: 'ev' as const },
      { name: 'MoveElectric PM', fuel: 'ev' as const },
      { name: 'MoveGas AM', fuel: 'gas' as const },
      { name: 'MoveGas PM', fuel: 'gas' as const },
    ],
    rows: [
      { label: 'Horario del turno', values: ['06:00–18:00', '18:00–06:00', '06:00–18:00', '18:00–06:00'] },
      { label: 'Horas productivas', values: ['8,5 hrs', '10 hrs', '8,5 hrs', '10 hrs'] },
      { label: 'Precio semanal', values: ['$242.500', '$343.375', '$242.500', '$343.375'] },
      { label: 'Vehículo habilitado para Uber', values: [true, true, true, true] },
      { label: 'Seguro full cobertura', values: [true, true, true, true] },
      { label: 'Mantenciones preventivas', values: [true, true, true, true] },
      { label: 'Soporte 24/7 + monitoreo GPS', values: [true, true, true, true] },
      { label: 'Liquidación semanal detallada', values: [true, true, true, true] },
      { label: 'Comisión de administración (1%)', values: [true, true, true, true] },
      { label: 'Garantía $350.000 (en cuotas)', values: [true, true, true, true] },
      { label: 'Kilometraje ilimitado', values: [true, true, true, true] },
      { label: 'App MoveCar Copilot', values: [true, true, true, true] },
      { label: 'Opción de compra (200/250 sem)', values: [true, true, true, true] },
      { label: 'Bono electricidad', values: [true, true, false, false] },
      { label: 'Cero emisiones', values: [true, true, false, false] },
    ],
  },
  help: {
    title: '¿Todavía con dudas?',
    body: 'Contacta a nuestro equipo de ventas y resolvemos todo antes de que postules.',
    cta: 'Contactar',
  },
};
