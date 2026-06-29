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
  { value: '98%', label: 'Satisfacción' },
  { value: '1 año', label: 'Antigüedad flota promedio' },
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
  note: '*Las ganancias proyectadas son estimaciones referenciales basadas en patrones históricos y variables de mercado. No constituyen una garantía de ganancias futuras ni una recomendación de jornada de conducción.',
};

export const flota = {
  eyebrow: 'Flota',
  title: 'Los vehículos que puedes elegir',
  body: 'Todos incluyen seguro, mantención y soporte. Haz clic en un modelo para ver su ficha.',
  cta: 'Conocer la flota',
  star: '4.9 de 5 estrellas',
  // Los vehículos viven en el Content Layer (colección `fleet`, src/content/fleet/).
};

export const pasos = {
  eyebrow: 'Inscripción sin estrés',
  title: 'Inscríbete fácil. Sin costos, sin trámites.',
  body: 'Desde la inscripción hasta la entrega, hacemos un proceso simple para que empieces a generar ganancias rápido.',
  cta: 'Comenzar ahora',
  steps: [
    { day: 'Primer Paso: Día 1', title: 'Regístrate', body: 'Completa tus datos iniciales para postular a Movecar.' },
    {
      day: 'Segundo Paso: Día 1-3',
      title: 'Entrevista',
      body: 'Coordinamos una reunión para conocerte y resolver tus dudas.',
    },
    { day: 'Tercer Paso: Día 4', title: 'Activación', body: 'Firmamos el contrato y activamos tu perfil de conductor.' },
    {
      day: 'Cuarto Paso: Día 5',
      title: 'Entrega',
      body: 'Recibes tu vehículo y comienzas a generar ingresos desde Movecar.',
    },
  ],
};

export const testimonios = {
  eyebrow: 'Testimonios',
  title: 'Movers felices',
  body: 'No lo decimos nosotros, lo dicen ellos.',
  startext: '4.9 de 5 estrellas',
  // 9 testimonios — carrusel: 3 por pasada en desktop, 1 a 1 en móvil.
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
    {
      rating: 5,
      quote:
        'Empecé sin auto y en una semana ya estaba generando. El proceso fue claro de principio a fin.',
      name: 'Pedro G.',
      role: 'Maipú · 6 meses',
      income: '$580K/mes',
    },
    {
      rating: 5,
      quote:
        'La app me deja ver todo: ingresos, gastos y lo que recibo el jueves. Cero sorpresas.',
      name: 'Daniela R.',
      role: 'Puente Alto · 10 meses',
      income: '$610K/mes',
    },
    {
      rating: 5,
      quote:
        'El auto eléctrico me bajó muchísimo los costos. Hoy gano más manejando lo mismo.',
      name: 'Andrés M.',
      role: 'Santiago · 1 año',
      income: '$700K/mes',
    },
    {
      rating: 4,
      quote:
        'Tenía dudas al principio, pero el equipo me acompañó por WhatsApp en cada paso.',
      name: 'Camila S.',
      role: 'La Florida · 5 meses',
      income: '$560K/mes',
    },
    {
      rating: 5,
      quote:
        'Si el auto falla te dan reemplazo al toque. No dejo de generar ni un día.',
      name: 'Rodrigo T.',
      role: 'Ñuñoa · 7 meses',
      income: '$640K/mes',
    },
    {
      rating: 5,
      quote:
        'Postulé 100% online y sin pagar nada para entrar. La garantía la fui pagando de mis ganancias.',
      name: 'Fernanda V.',
      role: 'Quilicura · 3 meses',
      income: '$520K/mes',
    },
  ],
};

export const fortalezas = {
  eyebrow: 'Súbete al futuro y al compromiso con el planeta',
  title: 'Fortalezas de Nuestro Modelo',
  carImage: { src: 'vehicles/top-view.webp', alt: 'Vista superior del modelo Movecar' },
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

/* Ventajas de Movecar — 5 tarjetas (en desktop grilla, en móvil carrusel con dots). */
export const ventajasMovecar = {
  eyebrow: 'Ventajas de Movecar',
  title: 'Muévete al futuro de la Electromovilidad',
  subtitle: 'Maximiza tus ganancias con nuestra flota y asegura un sueldo real. Hoy, sin sorpresas ni letra chica.',
  cta: 'Comenzar ahora',
  items: [
    {
      icon: 'fa-clock',
      title: 'Capitaliza tu esfuerzo',
      body: 'Al 5to año puedes optar a comprar tu auto desde $1.',
      bullets: [],
    },
    {
      icon: 'fa-leaf',
      title: 'Costos operativos más bajos',
      body: 'Planes desde 1,6 UF + beneficios exclusivos y descuentos para conductores.',
      bullets: [],
    },
    {
      icon: 'fa-headset',
      title: 'App más completa del mercado',
      body: 'Monitorea ganancias, costos y desempeño en tiempo real, sin letra chica y con apoyo 24/7.',
      bullets: [],
    },
    {
      icon: 'fa-hand-holding-dollar',
      title: 'Ingresa hoy, sin ahogarte',
      body: 'No exigimos pago inmediato de cuota de incorporación y podemos pactar cuotas que se adapten a tu flujo.',
      bullets: [],
    },
    {
      icon: 'fa-wallet',
      title: 'Mejor ingreso del mercado',
      body: 'Maximiza tus ganancias con nuestra flota y olvídate de los gastos imprevistos.',
      bullets: ['Hasta $500.000 semanales', 'Promedio $450.000'],
    },
  ],
};

export const appPromo = {
  title: 'Movecar - Copilot',
  body: 'La única plataforma donde podrás revisar tus ingresos y gastos en línea junto con DATA-IA, con los datos para optimizar tus rutas, porque datos claros conservan la amistad.',
  downloadLabel: 'Descarga tu app segura',
  cta: 'Descargar APP',
  compatibleLabel: 'Compatible con',
  stores: ['Apple', 'Android'],
  // Pantallas de la app: coloca en public/assets/images/app/app-earnings.webp
  image: { src: 'app/app-earnings.webp', alt: 'App Movecar Copilot — pantalla de ganancias' },
};

export const finalCta = {
  eyebrow: 'Cupos limitados',
  title: 'Empieza a generar ganancias esta semana',
  body: 'Incorpórate a MoveCar.pro y maximiza tus ganancias con la mejor plataforma y flota del mercado, junto a las mejores condiciones de arriendo pensadas para ti.',
  cta: 'Quiero ganar más',
  bullets: ['Datos seguros', 'Sin spam', 'Cancelación libre'],
};

export const footer = {
  tagline: 'La plataforma de electromovilidad para movers en Chile.',
  columns: [
    {
      title: 'Plataforma',
      links: [
        { label: 'Cómo funciona', href: '/como-funciona' },
        { label: 'Flota', href: '/#flota' },
        { label: 'Precios', href: '/precios' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Preguntas Frecuentes', href: '/precios#faq' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Ayuda', href: '/precios#faq' },
        { label: 'Postular', href: '/#postular' },
        { label: 'Contacto', href: '/#postular' },
      ],
    },
  ],
  // Links legales: abren modales (no navegan). 'modal' = clave del documento.
  legal: [
    { label: 'Términos y condiciones', modal: 'terms' as const },
    { label: 'Política de Privacidad', modal: 'privacy' as const },
  ],
};

/* ============================================================
   DOCUMENTOS LEGALES (contenido simulado — reemplazar por el real)
   Los muestran los modales del footer (isla LegalModal).
   ============================================================ */
export const legalDocs = {
  terms: {
    title: 'Términos y condiciones',
    updated: 'Junio 2026',
    sections: [
      {
        heading: '1. Aceptación de los términos',
        body: [
          'Al acceder y utilizar la plataforma Movecar.pro, el usuario declara haber leído, comprendido y aceptado íntegramente los presentes Términos y Condiciones. Si no estás de acuerdo con alguna parte, te pedimos no utilizar el servicio.',
          'Este documento es un contenido simulado de demostración y no constituye un texto legal vigente.',
        ],
      },
      {
        heading: '2. Objeto del servicio',
        body: [
          'Movecar ofrece el arriendo de vehículos habilitados para plataformas de transporte, junto con servicios asociados de seguro, mantención, soporte operacional y herramientas tecnológicas de gestión de ingresos.',
        ],
      },
      {
        heading: '3. Requisitos del conductor',
        body: [
          'El conductor debe cumplir con los requisitos de edad, licencia vigente, antecedentes y habilitación descritos en el proceso de postulación. Movecar se reserva el derecho de admisión conforme a sus políticas internas.',
        ],
      },
      {
        heading: '4. Obligaciones y uso del vehículo',
        body: [
          'El vehículo debe utilizarse exclusivamente dentro del horario y las condiciones del plan contratado. El uso indebido, el subarriendo o la manipulación de los sistemas de telemetría constituyen incumplimientos graves.',
        ],
      },
      {
        heading: '5. Pagos y liquidaciones',
        body: [
          'Los pagos, descuentos y liquidaciones se rigen por las condiciones del plan y se detallan semanalmente. El conductor dispone de un plazo para objetar la liquidación conforme al procedimiento informado.',
        ],
      },
      {
        heading: '6. Modificaciones',
        body: [
          'Movecar podrá actualizar estos términos en cualquier momento. Las modificaciones se informarán por los canales oficiales y regirán desde su publicación.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    updated: 'Junio 2026',
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: [
          'Movecar es responsable del tratamiento de los datos personales recopilados a través de la plataforma, conforme a la legislación vigente sobre protección de datos.',
          'Este documento es un contenido simulado de demostración y no constituye una política legal vigente.',
        ],
      },
      {
        heading: '2. Datos que recopilamos',
        body: [
          'Recopilamos datos de identificación y contacto, datos de habilitación legal (licencia, antecedentes), datos económicos y datos operacionales del vehículo, incluyendo telemetría (ubicación, velocidad y kilometraje).',
        ],
      },
      {
        heading: '3. Finalidad del tratamiento',
        body: [
          'Utilizamos tus datos para evaluar postulaciones, ejecutar el contrato, gestionar pagos y siniestros, brindar soporte y mejorar la operación de la flota.',
        ],
      },
      {
        heading: '4. Compartición con terceros',
        body: [
          'Solo compartimos datos cuando es necesario para la operación: aseguradoras, proveedores tecnológicos, talleres y autoridades cuando exista obligación legal. Nunca comercializamos datos personales.',
        ],
      },
      {
        heading: '5. Tus derechos',
        body: [
          'Puedes solicitar el acceso, rectificación, supresión, oposición y portabilidad de tus datos escribiendo a los canales oficiales de Movecar.',
        ],
      },
      {
        heading: '6. Seguridad',
        body: [
          'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración.',
        ],
      },
    ],
  },
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
  // Sección 1 (hero): título + mosaico de rostros (placeholder).
  hero: {
    titleLead: 'Construimos',
    titleHighlight: 'oportunidades.',
    titleRest: 'No solo movilidad',
    paragraphs: [
      'Detrás de MoveCar hay un equipo que ha participado en la creación y escalamiento de compañías que han impactado a millones de personas en Latinoamérica.',
      'Hoy ponemos esa experiencia al servicio de una nueva generación de conductores, combinando tecnología, analítica avanzada y una obsesión permanente por generar valor real.',
    ],
    cta: 'Quiero postular',
    // Imágenes (placeholders): mosaico de rostros + fondo tenue de manos.
    image: { src: 'team/team-mosaic.webp', alt: 'Comunidad de movers Movecar' },
    bg: 'backgrounds/nosotros.webp',
  },
  // Tercera sección: layout editorial "Más que arriendo de vehículos".
  modelo: {
    leftCol: [
      { kind: 'h', text: 'Más que arriendo de vehículos' },
      {
        kind: 'p',
        text: 'Creemos que el futuro de la movilidad no pasa únicamente por tener mejores autos, sino por entregar mejores herramientas a quienes los conducen. Por eso desarrollamos MoveCar Copilot, una plataforma de analítica avanzada e inteligencia artificial diseñada para ayudar a los conductores a comprender mejor su operación, identificar oportunidades de ganancias, optimizar horarios y hábitos de conducción, acceder a contenido educativo y recibir recomendaciones personalizadas orientadas a maximizar su rentabilidad.',
      },
      { kind: 'h', text: 'Nuestra forma de construir' },
      {
        kind: 'p',
        text: 'Somos un equipo con ADN emprendedor, obsesionado con resolver problemas reales, ejecutar con excelencia y construir una plataforma que permita a miles de conductores generar más ganancias con mejores herramientas, mejor información y una mejor experiencia.',
      },
    ],
    rightCol: [
      {
        kind: 'p',
        text: 'No somos simplemente una empresa de arriendo de vehículos. Estamos construyendo una plataforma diseñada para que los conductores puedan enfocarse en generar ganancias mientras nosotros nos encargamos del resto. Desde el vehículo y el soporte operacional, hasta el acceso a beneficios, herramientas de gestión y tecnología especialmente desarrollada para maximizar su rentabilidad.',
      },
      {
        kind: 'p',
        text: 'A través del análisis continuo de datos operacionales y patrones de comportamiento, MoveCar Copilot busca transformar información compleja en decisiones simples y accionables, ayudando a cada conductor a obtener el máximo potencial de su tiempo y vehículo.',
      },
      { kind: 'h', text: 'Tecnología para generar más ganancias' },
      {
        kind: 'p',
        text: 'Creemos en la tecnología como habilitador, en la excelencia operacional como ventaja competitiva y en las personas como el principal motor de cualquier organización. Nuestro objetivo es simple: construir la mejor experiencia para trabajar con plataformas de movilidad en Chile.',
      },
    ],
    image: { src: 'vehicles/flota.webp', alt: 'Flota Movecar en estación de carga' },
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
    { value: '+1.200', label: 'Movers activos' },
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
      { icon: 'fa-people-group', title: 'Comunidad', body: 'Nuestros movers son el centro: los escuchamos y crecemos con ellos.' },
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
          'Simula tus ganancias según tus horas trabajadas y tu zona con la calculadora. Referencias basadas en el promedio de Movers.',
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
export const pricing = {
  header: {
    eyebrow: 'Precios / Planes',
    title: 'Los planes más completos del mercado',
    subtitle:
      'Una experiencia 360° pensada para maximizar tus ganancias: flota, tecnología, cobertura, beneficios y acompañamiento real para que solo te preocupes de manejar.',
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
          badge: '100% Eléctrico',
          description:
            'Maximiza tus ganancias con el menor costo operativo del mercado. Ideal para complementar ganancias o trabajar de forma eficiente durante el día.',
          price: '2,3',
          period: 'UF/semanal',
          features: [
            'Variable x Km: 0,00280 UF',
            'Turno: 06:00 a 18:00',
            '50% aprox. de cobertura eléctrica mensual',
            'Seguro cobertura completa + deducible 10 UF',
            'Auto de reemplazo hasta 10 días',
            'Copilot App con monitoreo de ganancias y costos',
            'Opción preferente de compra desde $500.000',
          ],
          cta: 'Contratar',
        },
        {
          id: 'electric-pm',
          name: 'MoveElectric PM',
          badge: '100% Eléctrico',
          description:
            'La mejor opción para conductores full-time. Más cobertura, menor costo energético y mayor potencial de ganancias.',
          price: '3,9',
          period: 'UF/semanal',
          features: [
            'Variable x Km: 0,00290 UF',
            'Turno: 18:00 a 06:00',
            '50% aprox. de cobertura eléctrica mensual',
            'Seguro premium + deducible 3 UF',
            'Auto de reemplazo hasta 30 días',
            'Copilot App + métricas para maximizar ganancias',
            'Opción preferente de compra a $100',
          ],
          cta: 'Contratar',
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
          badge: 'Bencinero',
          description:
            'La forma más flexible y accesible de comenzar. Ideal para complementar ganancias con una baja inversión inicial.',
          price: '1,6',
          period: 'UF/semanal',
          features: [
            'Variable x Km: 0,00196 UF',
            'Turno: 06:00 a 18:00',
            'Seguro cobertura completa + deducible 10 UF',
            'Auto de reemplazo hasta 10 días',
            'Copilot App con monitoreo de ganancias y costos',
            'Menor costo del mercado',
            'Opción preferente de compra desde $500.000',
          ],
          cta: 'Contratar',
        },
        {
          id: 'gas-pm',
          name: 'MoveGas PM',
          badge: 'Bencinero',
          description:
            'Libertad total para trabajar en horarios de alta demanda. Mayor autonomía y flexibilidad para maximizar ganancias sin depender de carga eléctrica.',
          price: '2,7',
          period: 'UF/semanal',
          features: [
            'Variable x Km: 0,00203 UF',
            'Turno: 18:00 a 06:00',
            'Seguro premium + deducible 3 UF',
            'Auto de reemplazo hasta 30 días',
            'Copilot App + métricas para maximizar ganancias',
            'Mayor potencial de ganancias',
            'Opción preferente de compra a $100',
          ],
          cta: 'Contratar',
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
  // Tabla comparativa: MoveCar vs. competencia. Cada columna lleva una imagen
  // en el encabezado. En móvil solo se muestran 2 columnas (Beneficio + MoveCar).
  compare: {
    eyebrow: 'Compara',
    title: 'Asegura el mejor plan para lo que necesitas',
    subtitle:
      'No todos los planes de arriendo son iguales. Movecar combina tecnología, cobertura, flexibilidad y beneficios exclusivos para ayudarte a generar más ganancias con uno de los planes más completos del mercado.',
    rowHead: 'Beneficio',
    plans: [
      { name: 'MoveCar', img: 'plan/plan-movecar.png', brand: true },
      { name: 'Competidor 1', img: 'plan/plan1.png' },
      { name: 'Competidor 2', img: 'plan/plan2.png' },
      { name: 'Competidor 3', img: 'plan/plan3.png' },
    ],
    rows: [
      { label: 'Planes AM / PM diferenciados', values: ['Full flexible', true, false, false] },
      { label: 'Opción preferente de compra', values: ['Todos los planes', true, false, true] },
      {
        label: 'Cobertura eléctrica / gasolina',
        values: ['Eléctrico y gasolina\nCon tope', 'Solo eléctricos\nCon tope', 'Solo eléctricos\nCon tope', false],
      },
      {
        label: 'Cobertura eléctrica / gasolina',
        values: [
          '3 UF daño menor / 10 UF pérdida total',
          '10 UF daño menor / 30 UF pérdida total',
          '15 UF daño menor / 30 UF pérdida total',
          '15 UF daño menor / 30 UF pérdida total',
        ],
      },
      {
        label: 'Auto reemplazo / tiempos entrega',
        values: ['24–72 hrs', '1 semana aprox.', false, 'Indeterminado según demanda'],
      },
      { label: 'App ganancias y gastos', values: [true, 'Básica', false, false] },
      { label: 'App + IA maximización ganancias', values: ['Movecar Copilot', false, true, false] },
      { label: 'Flexibilidad en cuotas', values: ['Hasta 9 cuotas', 'Hasta 7 cuotas', false, false] },
      { label: 'Soporte Operacional 24/7', values: [true, true, 'Solo técnico', true] },
      { label: 'Capacitación integrada App', values: ['Todos los modelos', false, false, false] },
      {
        label: 'Estaciones de carga',
        values: ['Libre (cualquiera)\nSin tiempos de espera', 'Red específica\nMayor tiempo de espera', 'Red específica\nMayor tiempo de espera', 'Libre'],
      },
    ],
  },
  help: {
    title: '¿Todavía con dudas?',
    body: 'Contacta a nuestro equipo de ventas y resolvemos todo antes de que postules.',
    cta: 'Contactar',
  },
};
