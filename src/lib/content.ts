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

/**
 * Enlace de conversión principal (WhatsApp). Lo usan los CTAs "Quiero
 * postular", "Comenzar ahora" y "Quiero ganar más". Cambiar aquí actualiza
 * todos esos botones a la vez.
 */
//export const WHATSAPP_URL = 'https://wa.me/56957918247';
export const WHATSAPP_URL = 'https://wa.link/e0k8uq';

export const hero = {
  eyebrow: 'Súmate a la plataforma de electromovilidad más moderna de Chile',
  // El span amber se resuelve en el componente; aquí marcamos la parte destacada.
  titleLead: 'Gana en promedio',
  titleHighlight: '$300.000',
  titleRest: 'líquidos a la semana. Sin auto propio.',
  subtitle: 'En una gran semana, nuestros mejores conductores han llegado a $450.000.',
  ctaPrimary: 'Quiero postular',
  ctaSecondary: 'Cómo funciona',
  bullets: ['Pago Inicial Flexible', 'Monitoreo de ingresos online', 'Soporte 24/7'],
  image: { src: 'vehicles/vehicle-coolray.png', alt: 'Vehículo eléctrico Movecar.pro' },
};

export const trustStats = [
  { value: '$300.000', label: 'Promedio líquido semanal' },
  { value: '0.1 año', label: 'Antigüedad flota promedio' },
  { value: '24/7', label: 'Soporte' },
];

export const ventajas = {
  eyebrow: 'Ventajas de Movecar.pro',
  title: 'Muévete al futuro de la Electromovilidad',
  body: 'Maximiza tus ingresos con nuestra flota. Hoy, sin sorpresas ni letra chica.',
  cta: 'Comenzar ahora',
  badge: 'Mejor ingreso del mercado',
  highlights: [
    'Maximiza tus ingresos con nuestra flota',
    'Hasta $500.000 semanales',
    'Promedio $450.000',
  ],
};

export const simulador = {
  eyebrow: 'Calcula tu ingreso aproximado',
  title: '¿Cuánto puedes ganar con Movecar.pro?',
  body: 'Usa nuestro simulador interactivo para proyectar tus ingresos reales basadas en tu disponibilidad.',
  planes: ['MoveElectric AM', 'MoveElectric PM', 'Plan Bencina'],
  disclaimer: 'Sin compromiso. Postulación 100% online.',
  cta: 'Quiero postular',
  note: '*Las ingresos proyectadas son estimaciones referenciales basadas en patrones históricos y variables de mercado. No constituyen una garantía de ingresos futuras ni una recomendación de jornada de conducción.',
};

export const flota = {
  eyebrow: 'Flota',
  title: 'Los vehículos de nuestra flota',
  body: 'Todos incluyen seguro, mantención y soporte. Haz clic en un modelo para ver su ficha.',
  cta: 'Conocer la flota',
  // Los vehículos viven en el Content Layer (colección `fleet`, src/content/fleet/).
};

export const pasos = {
  eyebrow: 'Inscripción sin estrés',
  title: 'Inscríbete fácil. Sin cuota de inscripción.',
  body: 'Desde la inscripción hasta la entrega, hacemos un proceso simple para que empieces a generar ingresos rápido.',
  cta: 'Comenzar ahora',
  steps: [
    { day: 'Día 1', title: 'Postula', body: 'Completa tus datos y la encuesta de perfil.' },
    { day: 'Día 1–2', title: 'Evaluación', body: 'Revisamos tus documentos y antecedentes.' },
    { day: 'Día 2–3', title: 'Entrevista', body: 'Nos conocemos y resolvemos tus dudas.' },
    { day: 'Día 3–4', title: 'Onboarding', body: 'Firmas el contrato y te capacitamos en la app.' },
    { day: 'Día 4', title: 'Entrega', body: 'Recibes tu auto y empiezas a generar.' },
  ],
};

export const testimonios = {
  eyebrow: 'Testimonios',
  title: 'Conductores Felices',
  body: 'No lo decimos nosotros, lo dicen ellos.',
  // Etiqueta visible bajo el título: los testimonios son ilustrativos.
  label: 'Casos ilustrativos',
  // 9 testimonios — carrusel: 3 por pasada en desktop, 1 a 1 en móvil.
  items: [
    {
      rating: 5,
      quote:
        'Llevamos meses trabajando con Movecar.pro y fue súper rápido. El monitoreo de una semana ya estaba en la plataforma.',
      name: 'Carlos B.',
      role: 'Santiago · 8 meses',
      income: '$430K/sem',
    },
    {
      rating: 4,
      quote:
        'Lo que más valoro es el soporte. Tuve un problema con mi mantención y el equipo respondió súper rápido.',
      name: 'María F.',
      role: 'Providencia · 1 año',
      income: '$450K/sem',
    },
    {
      rating: 5,
      quote:
        'Nada que reprochar. Todos los gastos están claros antes y la diferencia con otras plataformas es enorme.',
      name: 'Juan F.',
      role: 'Santiago · 4 meses',
      income: '$450K/sem',
    },
    {
      rating: 5,
      quote:
        'Empecé sin auto y en una semana ya estaba generando. El proceso fue claro de principio a fin.',
      name: 'Pedro G.',
      role: 'Maipú · 6 meses',
      income: '$420K/sem',
    },
    {
      rating: 5,
      quote:
        'La app me deja ver todo: ingresos, gastos y lo que recibo el jueves. Cero sorpresas.',
      name: 'Daniela R.',
      role: 'Quilicura · 4 meses',
      income: '$390K/sem',
    },
    {
      rating: 5,
      quote:
        'El auto eléctrico me bajó muchísimo los costos. Hoy gano más manejando lo mismo.',
      name: 'Andrés M.',
      role: 'Santiago · 1 año',
      income: '$385K/sem',
    },
    {
      rating: 4,
      quote:
        'Tenía dudas al principio, pero el equipo me acompañó por WhatsApp en cada paso.',
      name: 'Camila S.',
      role: 'La Florida · 5 meses',
      income: '$325K/sem',
    },
    {
      rating: 5,
      quote:
        'Si el auto falla te dan reemplazo al toque. No dejo de generar ni un día.',
      name: 'Rodrigo T.',
      role: 'Ñuñoa · 7 meses',
      income: '$340K/sem',
    },
    {
      rating: 5,
      quote:
        'Postulé 100% online y sin pagar nada para entrar. La garantía la fui pagando de mis ingresos.',
      name: 'Fernanda V.',
      role: 'Quilicura · 3 meses',
      income: '$410K/sem',
    },
  ],
};

export const fortalezas = {
  eyebrow: 'Súbete al futuro y al compromiso con el planeta',
  title: 'Fortalezas de Nuestro Modelo',
  carImage: { src: 'vehicles/top-view.webp', alt: 'Vista superior del modelo Movecar.pro' },
  items: [
    { icon: 'fa-bolt', title: 'Bono de Carga', body: 'Bono de $100.000 al mes por conductor para carga eléctrica o bencina, en todos los planes.' },
    {
      icon: 'fa-shield-halved',
      title: 'Seguro',
      body: 'Seguro con cobertura completa y deducible máximo de 10 UF por evento.',
    },
    {
      icon: 'fa-charging-station',
      title: 'Red de Carga',
      body: 'Red de carga libre. Carga donde quieras evitando filas y esperas.',
    },
    { icon: 'fa-mobile-screen', title: 'App Movecar', body: 'Monitorea en línea tus ingresos y gastos en tiempo real.' },
    {
      icon: 'fa-leaf',
      title: 'Bajo Gasto Eléctrico',
      body: 'Vehículos eléctricos de alta eficiencia y bajo consumo.',
    },
    {
      icon: 'fa-rotate',
      title: 'Auto Reemplazo',
      body: 'Si tu auto queda fuera de servicio por un siniestro cubierto, te entregamos uno de reemplazo según disponibilidad. Mientras no lo tengas, no pagas arriendo.',
    },
  ],
};

/* Ventajas de Movecar — 5 tarjetas (en desktop grilla, en móvil carrusel con dots). */
export const ventajasMovecar = {
  eyebrow: 'Ventajas de Movecar.pro',
  title: 'Muévete al futuro de la Electromovilidad',
  subtitle: 'Maximiza tus ingresos con nuestra flota. Hoy, sin sorpresas ni letra chica.',
  cta: 'Comenzar ahora',
  items: [
    {
      icon: 'fa-clock',
      title: 'Capitaliza tu esfuerzo: el auto puede ser tuyo',
      body: 'Compra tu auto: desde las 208 semanas a un valor preferente, y desde las 260 semanas por solo $100.',
      bullets: [],
    },
    {
      icon: 'fa-leaf',
      title: 'Planes de arriendo desde 1,9 UF',
      body: 'Elige entre nuestros planes desde 1,9 UF y adquiere beneficios exclusivos para conductores.',
      bullets: [],
    },
    {
      icon: 'fa-headset',
      title: 'App MoveCar, asistente y datos en tiempo real',
      body: 'Monitorea tus ingresos, costos y desempeño en tiempo real, además de contar con soporte 24/7.',
      bullets: [],
    },
    {
      icon: 'fa-hand-holding-dollar',
      title: 'Garantía flexible',
      body: 'Condiciones de pago de la garantía caso a caso.',
      bullets: [],
    },
    {
      icon: 'fa-wallet',
      title: 'Elige tu turno',
      body: 'Trabaja en turno AM (06:00 a 18:00) o PM (18:00 a 06:00), en auto eléctrico o a combustión.',
      bullets: [],
    },
  ],
};

export const appPromo = {
  title: 'App Movecar',
  body: 'La única plataforma donde podrás revisar tus ingresos y gastos en línea junto con DATA-IA, con los datos para optimizar tus rutas, porque datos claros conservan la amistad.',
  downloadLabel: 'Descarga tu app segura',
  // Aún sin links de tienda: se informa en lugar del botón "Descargar APP".
  note: 'Te enviamos el link de descarga de la app Movecar en tu proceso de ingreso.',
  compatibleLabel: 'Compatible con',
  stores: ['Apple', 'Android'],
  // Pantallas de la app: coloca en public/assets/images/app/app-earnings.webp
  image: { src: 'app/app-earnings.webp', alt: 'App Movecar — pantalla de ingresos' },
};

export const finalCta = {
  eyebrow: 'Cupos limitados',
  title: 'Empieza a generar ingresos esta semana',
  body: 'Incorpórate a MoveCar.pro y maximiza tus ingresos con la mejor plataforma y flota del mercado. Obtén las mejores condiciones de arriendo pensadas en ti.',
  cta: 'Quiero ganar más',
  bullets: ['Datos seguros', 'Sin spam', 'Sin cuota de inscripción'],
};

export const footer = {
  tagline: 'La plataforma de electromovilidad para conductores en Chile.',
  columns: [
    {
      title: 'Plataforma',
      links: [
        { label: 'Cómo funciona', href: '/como-funciona' },
        { label: 'Flota', href: '/como-funciona#flota' },
        { label: 'Precios', href: '/precios' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { label: 'Nosotros', href: '/nosotros' },
        { label: 'Preguntas Frecuentes', href: '/precios/#faq' },
      ],
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Ayuda', href: 'https://wa.me/56963228508' },
        { label: 'Postular', href: 'https://wa.link/e0k8uq' },
        { label: 'Contacto', href: 'https://wa.me/56963228508' },
      ],
    },
  ],
  // Redes sociales — 'icon' = clase Font Awesome brands.
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/movecar-pro/',
      icon: 'fa-linkedin-in',
    },
    { label: 'Instagram', href: 'https://www.instagram.com/movecar.pro/', icon: 'fa-instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/movecar.pro/', icon: 'fa-facebook-f' },
  ],
  // Links legales: abren modales (no navegan). 'modal' = clave del documento.
  legal: [
    { label: 'Términos y condiciones', modal: 'terms' as const },
    { label: 'Política de Privacidad', modal: 'privacy' as const },
  ],
};

/* ============================================================
   DOCUMENTOS LEGALES — los muestran los modales del footer (isla LegalModal).
   `body` admite párrafos (string) y listas ({ list: string[] }).
   ============================================================ */
export const legalDocs = {
  terms: {
    title: 'Términos y Condiciones de Servicio',
    updated: 'Versión 1.4 · MOVERENT SpA — Conductores',
    sections: [
      {
        heading: 'Capítulo 1 — Arriendo de Vehículos Motorizados por Suscripción',
        body: [
          { sub: '1.1 Las partes' },
          'MOVERENT SpA, RUT 78.467.487-8, sociedad por acciones constituida conforme a la legislación chilena, con domicilio en Eulogia Sánchez 065, Providencia, Santiago, representada legalmente por don Maximiliano Javier Picero Cádiz, RUT 16.253.647-8, en adelante "MOVERENT SpA" o "MOVERENT", que opera comercialmente bajo la marca MoveCar.pro.',
          'MOVECOLLECT SpA, RUT 78.467.491-6, sociedad por acciones constituida conforme a la legislación chilena, con domicilio en Eulogia Sánchez 065, Providencia, Santiago, es una sociedad jurídicamente independiente de MOVERENT SpA, encargada de la recaudación y administración de los ingresos que el Usuario genere en plataformas EAT, en virtud de un contrato de mandato mercantil que el Usuario suscribe directamente con ella.',
          '"MoveCar" y "MoveCar.pro" son marcas comerciales y no constituyen persona jurídica alguna. Toda obligación asumida bajo estos Términos corresponde a la sociedad que en cada caso se individualiza.',
          { sub: '1.2 El servicio' },
          'MOVERENT SpA es una plataforma tecnológica que ofrece el servicio de arriendo de vehículos motorizados (a combustión interna, eléctricos, híbridos u otras tecnologías) bajo la modalidad de suscripción, para que puedan ser utilizados por el usuario para generar ingresos a través de aplicaciones de transporte de pasajeros tales como Uber (Preferente), Didi o Cabify (en adelante, las "EAT").',
          'MOVERENT SpA no presta servicios de transporte de pasajeros ni intermedia dichos servicios. Su actividad consiste exclusivamente en el arriendo de vehículos y en la prestación de servicios accesorios asociados a dicho arriendo. En consecuencia, MOVERENT SpA no asigna viajes, no fija tarifas, no participa en la relación entre el usuario y las EAT, ni tiene injerencia en los ingresos que el usuario genere en dichas plataformas.',
          'Los ingresos que el usuario genere a través de las EAT serán de su exclusiva propiedad, responsabilidad y riesgo. Dichos ingresos serán administrados por MOVECOLLECT SpA en virtud del contrato de mandato mercantil independiente suscrito entre el usuario y dicha entidad, sin que MOVERENT SpA reciba directamente dichos ingresos ni participe en su generación, limitándose únicamente a percibir el canon de arriendo conforme a las reglas del presente Acuerdo y del Contrato de Arrendamiento correspondiente.',
          'La individualización exacta del vehículo arrendado no constituye elemento esencial del presente Acuerdo. En consecuencia, el usuario tendrá derecho a utilizar un vehículo correspondiente a la categoría del plan elegido, pudiendo MOVERENT SpA reemplazarlo por otro de categoría igual o superior cuando razones operativas, técnicas o de disponibilidad así lo requieran.',
          { sub: '1.3 Modalidad y duración' },
          'El precio del arriendo será pagado en forma semanal y podrá contemplar componentes fijos o variables, modalidad a tiempo completo o por bloques horarios, según el plan de suscripción elegido en el sitio web oficial de MOVERENT SpA.',
          'El arriendo se contrata por tiempo indefinido, se devenga y liquida semanalmente, y contempla un período mínimo de permanencia de doce (12) semanas consecutivas contado desde la entrega material del Vehículo, conforme al Capítulo 25.',
          { sub: '1.4 Documentos que rigen la relación' },
          'La relación entre el Usuario y MoveCar se rige por los siguientes instrumentos:',
          {
            list: [
              'Los presentes Términos y Condiciones de Servicio (el "Acuerdo"), que el Usuario acepta electrónicamente antes de contratar.',
              'El Contrato de Arrendamiento de Vehículo Motorizado suscrito con MOVERENT SpA, junto con el Acta de Entrega-Recepción, el Anexo N° 1 sobre Opción de Compra y Reconocimiento, y el Pagaré Complementario y su Carta de Instrucciones.',
              'El Contrato de Mandato Mercantil de Recaudación y Administración de Ingresos suscrito con MOVECOLLECT SpA.',
              'Las Políticas de Privacidad y Tratamiento de Datos Personales de MOVERENT SpA y de MOVECOLLECT SpA vigentes.',
            ],
          },
          'En caso de conflicto entre estos Términos y el Contrato de Arrendamiento o sus anexos, prevalecerá el Contrato de Arrendamiento. En materias de tratamiento de datos personales prevalecerán las Políticas de Privacidad. En caso de conflicto entre estos Términos y cualquier otra información publicada en el Sitio, la App Movecar o redes sociales, prevalecerán estos Términos.',
          { sub: '1.5 Aceptación' },
          'La celebración del arriendo se perfecciona mediante la aceptación electrónica de los presentes Términos de Servicio y el pago correspondiente al plan de suscripción elegido.',
          'La aceptación del Usuario, manifestada mediante la selección expresa de la casilla o botón habilitado al efecto en el Sitio o en la App Movecar, implica que suscribe electrónicamente el presente Acuerdo conforme a la Ley N° 19.799 y que acepta que los registros asociados se almacenen en forma electrónica. Dicha aceptación no reemplaza la firma del Contrato de Arrendamiento y sus anexos, que se suscriben al momento de la entrega del Vehículo.',
          'La aceptación de este Acuerdo implica que el usuario declara ser mayor de edad, tener capacidad legal suficiente para contratar y no encontrarse afecto a impedimento legal alguno para celebrar este tipo de contratos.',
          { sub: '1.6 Modificaciones' },
          'MOVERENT SpA podrá modificar los presentes Términos de Servicio notificando al usuario mediante publicación en el Sitio, en la App Movecar o mediante correo electrónico con al menos treinta (30) días corridos de anticipación a su entrada en vigencia.',
          'Si el Usuario no aceptare una modificación que altere de manera relevante sus obligaciones económicas u operativas, podrá poner término al arriendo sin aplicación de la multa por término anticipado ni cargo de terminación de ninguna especie, debiendo pagar únicamente las obligaciones devengadas hasta la restitución material del Vehículo. Para ejercer este derecho deberá comunicar su decisión antes de la entrada en vigencia de la modificación.',
          'Las modificaciones se entenderán aceptadas si el usuario continúa utilizando los servicios con posterioridad a su entrada en vigencia.',
          'La variación del valor de la Unidad de Fomento no constituye modificación de las condiciones económicas del Plan y no da lugar al derecho establecido en esta cláusula.',
          'Sin perjuicio de lo anterior, MOVERENT SpA podrá introducir modificaciones inmediatas cuando éstas sean necesarias por cambios legales, regulatorios o por razones de seguridad operacional, las que entrarán en vigencia desde su publicación.',
        ],
      },
      {
        heading: 'Capítulo 2 — Procedimiento de Postulación, Evaluación y Activación',
        body: [
          { sub: '2.1 Inicio del proceso de postulación' },
          'Para acceder a una suscripción de arriendo de vehículo con MOVERENT SpA, el interesado deberá iniciar su solicitud a través del formulario de postulación disponible en el sitio web oficial de la compañía. La presentación de dicha solicitud no constituye aceptación automática ni genera derecho alguno a suscribir un contrato de arriendo.',
          { sub: '2.2 Etapas del proceso de evaluación' },
          'Una vez recibida la solicitud, MOVERENT SpA conducirá el proceso de evaluación a través de las siguientes etapas:',
          {
            list: [
              'Contacto inicial y recopilación de antecedentes: el postulante accederá por canales digitales habilitados por MOVERENT SpA, a través de los cuales deberá proporcionar información completa, exacta, actualizada y verificable, incluyendo al menos nombre completo, fecha de nacimiento, número de cédula de identidad, domicilio y correo electrónico. En esta etapa se le solicitará además la entrega de los documentos legales y habilitantes requeridos.',
              'Verificación de elegibilidad: el postulante deberá cumplir copulativamente los requisitos establecidos en el Capítulo 4.',
              'Entrevista de evaluación: el postulante que cumpla los requisitos de elegibilidad será convocado a una entrevista individual, coordinada a través de la plataforma de agendamiento habilitada por MOVERENT SpA. Esta entrevista tiene por objeto evaluar el perfil operacional, conductual y de riesgo del postulante mediante criterios internos definidos por MOVERENT SpA.',
              'Decisión de aceptación: con base en los antecedentes recopilados y el resultado de la entrevista, MOVERENT SpA adoptará una decisión de aceptación o rechazo, fundada en criterios de riesgo contractual, operacional y reputacional.',
            ],
          },
          { sub: '2.3 Onboarding y creación de cuenta' },
          'Los postulantes aceptados deberán completar un proceso de incorporación que comprende la firma de los contratos y documentos que correspondan, la creación de la Cuenta de Usuario por MOVERENT SpA desde su sistema de backoffice una vez validada la documentación contractual, y un proceso de inducción operacional al término del cual se procederá a la entrega formal del vehículo asignado. El usuario no tiene facultad de crear ni modificar su Cuenta de Usuario de forma autónoma.',
          { sub: '2.4 Autorizaciones y verificaciones' },
          'Al postular, el interesado autoriza expresamente a MOVERENT SpA para verificar la veracidad de la información proporcionada y realizar evaluaciones de riesgo contractual, lo que podrá incluir revisión de antecedentes penales, hoja de vida del conductor y otras verificaciones pertinentes, de conformidad con la legislación vigente sobre protección de datos personales.',
          'Asimismo, el Usuario autoriza que dicha información pueda ser utilizada para efectos de validación y coordinación operativa con MOVECOLLECT SpA cuando ello resulte necesario para la administración de ingresos o ejecución de contratos complementarios.',
          'Actualización periódica. El Usuario deberá mantener durante toda la vigencia del arriendo los requisitos de habilitación, idoneidad y seguridad considerados para su incorporación, y actualizar la documentación respectiva al menos una vez cada seis (6) meses, o antes cuando MOVERENT SpA lo requiera por existir antecedentes objetivos que justifiquen una nueva evaluación. La falta injustificada de actualización facultará a MOVERENT SpA para suspender la operación o bloquear el acceso a la App Movecar hasta su regularización.',
          'Deber de informar hechos sobrevinientes. El Usuario deberá informar de inmediato a MOVERENT SpA cualquier hecho sobreviniente que afecte su habilitación legal para conducir, la vigencia de su licencia, su habilitación para operar en plataformas EAT, la vigencia de la documentación entregada, la cobertura del seguro o la seguridad de la operación. La omisión deliberada de informar un hecho relevante podrá constituir incumplimiento grave.',
          { sub: '2.5 Suspensión o cancelación de la Cuenta de Usuario' },
          'MOVERENT SpA podrá suspender o cancelar una Cuenta de Usuario cuando se detecte información falsa, inexacta o incompleta proporcionada durante el proceso de postulación o con posterioridad a él; existan incumplimientos contractuales actuales o sobrevinientes; se verifiquen antecedentes que afecten la idoneidad del usuario; o se infrinjan estos Términos de Servicio.',
          'La cancelación de la Cuenta de Usuario no dará derecho a indemnización alguna, sin perjuicio de las devoluciones que correspondan conforme a este Acuerdo y a los contratos complementarios vigentes.',
        ],
      },
      {
        heading: 'Capítulo 3 — Obligaciones del Usuario',
        body: [
          'En relación con el uso de los servicios de MOVERENT SpA y el arriendo del vehículo, el usuario declara y acepta lo siguiente:',
          { sub: '3.1 Cumplimiento general' },
          {
            list: [
              'Cumplirá íntegramente el presente Acuerdo y todas las políticas vigentes publicadas por MOVERENT SpA en el Sitio o en la App Movecar.',
              'Cumplirá todas las leyes, reglamentos y normativas aplicables al uso del vehículo y al desarrollo de actividades de transporte a través de plataformas digitales, en particular la Ley de Tránsito y la Ley N° 21.553 sobre Empresas de Aplicaciones de Transporte.',
              'Solucionará oportunamente el canon de arriendo y todo cargo asociado al uso del vehículo, conforme al mecanismo de Liquidación Semanal y compensación establecido en el Capítulo 8. El pago directo procederá únicamente respecto del Déficit que no alcance a compensarse con los fondos administrados por MOVECOLLECT SpA.',
              'Entregará y devolverá el vehículo en las condiciones establecidas en este Acuerdo y en el Contrato de Arrendamiento correspondiente.',
              'Declara tener capacidad legal suficiente para contratar y asumir las obligaciones aquí establecidas.',
            ],
          },
          { sub: '3.2 Deber de información en caso de siniestro' },
          'En caso de accidente, daño, robo o cualquier hecho que pueda constituir un siniestro, por leve que sea, el Usuario deberá contactar inmediatamente a Soporte MoveCar por los canales habilitados y seguir sus instrucciones, conforme al procedimiento establecido en el Capítulo 11, en el Contrato de Arrendamiento y en el Manual de Bolsillo.',
          'El incumplimiento de esta obligación podrá implicar la pérdida de cobertura de deducible y la obligación de responder por la totalidad de los daños causados al vehículo y a terceros, según corresponda, conforme a lo establecido en el Contrato de Arrendamiento y las condiciones de la póliza aplicable.',
          { sub: '3.3 Cuenta de Usuario y medios de pago' },
          'El usuario será responsable de la custodia y uso de su Cuenta de Usuario.',
          'Deberá mantener permanentemente actualizados los datos de la cuenta bancaria en que MOVECOLLECT SpA le transferirá su Saldo Neto, y disponer de al menos un medio de pago habilitado para regularizar Déficits.',
          'El usuario será responsable por cualquier uso indebido derivado de la negligencia en la protección de sus credenciales.',
          { sub: '3.4 Monitoreo y telemetría' },
          'El usuario reconoce y acepta que el vehículo arrendado cuenta con sistemas de telemetría y rastreo satelital, cuyo detalle, finalidades y efectos se regulan en el Capítulo 13.',
          { sub: '3.5 Intervención remota del vehículo' },
          'MOVERENT SpA podrá intervenir o desactivar remotamente determinadas funciones del vehículo, incluyendo el bloqueo preventivo, en los siguientes casos: incumplimiento grave de obligaciones contractuales; mora conforme al Capítulo 8; riesgo de pérdida, robo o apropiación indebida; manipulación no autorizada de dispositivos de rastreo; o falta de comunicación prolongada que impida verificar el estado del vehículo.',
          'Estas medidas tendrán por finalidad exclusiva la protección del Vehículo y la seguridad de la operación. Toda decisión de bloqueo o restricción será documentada y notificada previamente al Usuario, salvo en casos de urgencia justificada.',
          { sub: '3.6 Prohibición de manipulación de dispositivos' },
          'El usuario no podrá alterar, manipular, deshabilitar o remover dispositivos de rastreo, telemetría o control instalados en el vehículo. Cualquier falla derivada de manipulación no autorizada se presumirá imputable al usuario y constituirá incumplimiento grave del Acuerdo.',
          { sub: '3.7 Conducta frente al personal' },
          'El usuario deberá mantener un trato respetuoso con el personal de MOVERENT SpA, conforme al Capítulo 18.',
          { sub: '3.8 Conductas prohibidas' },
          'El usuario se obliga a abstenerse de transferir o permitir el uso de su Cuenta de Usuario por terceros; subarrendar o permitir la conducción del vehículo por terceros; utilizar la plataforma con fines distintos al arriendo; publicar información falsa o difamatoria respecto de MOVERENT SpA; realizar acciones tecnológicas destinadas a vulnerar sistemas de la plataforma; infringir derechos de propiedad intelectual de MOVERENT SpA; y hostigar o dañar a MOVERENT SpA, su personal o terceros.',
          { sub: '3.9 Consecuencias del incumplimiento' },
          'El incumplimiento de las obligaciones precedentes podrá dar lugar a la suspensión temporal de la Cuenta, la terminación del arriendo, la exigencia de devolución inmediata del vehículo, el cobro de penalidades contractuales, la compensación de montos adeudados a través de MOVECOLLECT SpA y el ejercicio de acciones judiciales civiles o penales.',
          'Tratándose de la terminación del arriendo, ésta requerirá que la causal se encuentre acreditada. Cuando existan antecedentes razonables y objetivos que hagan presumir su ocurrencia y ésta no esté aún acreditada, MOVERENT SpA podrá suspender preventivamente la operación, informando al Usuario el motivo de la medida, quien dispondrá de cinco (5) días hábiles para aportar antecedentes. El detalle de las conductas sancionables, su clasificación y el procedimiento aplicable se encuentran en el Capítulo 31 de estos Términos.',
        ],
      },
      {
        heading: 'Capítulo 4 — Requisitos para el Arriendo',
        body: [
          'Para que MOVERENT SpA pueda entregar un vehículo en arriendo, el usuario deberá cumplir y mantener durante toda la vigencia del arriendo los siguientes requisitos:',
          {
            list: [
              'Tener 23 años cumplidos.',
              'Contar con cédula de identidad vigente emitida en Chile.',
              'Poseer licencia de conducir Clase B o superior, válida y vigente, con una antigüedad mínima de tres años.',
              'Mantener una cuenta activa y habilitada en Uber Driver. La existencia de cuentas en otras empresas de aplicaciones de transporte será facultativa, pero no reemplaza la exigencia de mantener cuenta activa en Uber Driver.',
              'Mantener activa su Cuenta de Usuario en la plataforma de MOVERENT SpA.',
              'Enterar o pactar el pago en cuotas del depósito en garantía, en la forma y condiciones definidas en el Capítulo 5 y en el Contrato de Arrendamiento.',
              'Participar en una instancia de inducción operativa, presencial o remota, cuando MOVERENT SpA lo estime necesario.',
              'Encontrarse adscrito al registro electrónico creado por la Ley N° 21.553 y mantener dicha adscripción vigente durante toda la relación contractual, una vez que dicho registro se encuentre operativo.',
              'Mantener vigentes, durante toda la relación contractual, el certificado de antecedentes y la hoja de vida del conductor. MOVERENT SpA notificará al Usuario durante el quinto mes de vigencia de dichos documentos y el Usuario deberá acreditar su actualización durante el sexto. Vencido el plazo sin actualización, MOVERENT SpA bloqueará la operación del Vehículo hasta su regularización, continuando el arriendo devengándose íntegramente durante el bloqueo.',
            ],
          },
          'El cumplimiento de estos requisitos constituye condición necesaria para la entrega y mantención del vehículo en arriendo. MOVERENT SpA podrá rechazar la entrega del vehículo o suspender el arriendo cuando verifique el incumplimiento de alguno de ellos o su pérdida sobreviniente.',
          { sub: '4.1 Pérdida o suspensión de la cuenta en la plataforma' },
          'La pérdida, suspensión o inhabilitación de la cuenta Uber Driver durante la vigencia del arriendo constituirá una contingencia operativa relevante. En dicho caso el Usuario deberá regularizar su situación conforme al siguiente esquema:',
          {
            list: [
              'Informar la situación a MOVERENT SpA dentro de las dos (2) horas siguientes y acreditar su regularización dentro de un plazo máximo de cuarenta y ocho (48) horas corridas contadas desde que tome conocimiento de la suspensión. MOVERENT SpA podrá, excepcionalmente, ampliar dicho plazo cuando el Usuario acredite que existe un procedimiento de revisión o reactivación en curso ante la plataforma.',
              'Durante el período de suspensión continuará devengándose íntegramente el canon de arriendo y las demás obligaciones económicas, sin derecho a descuentos, cubriéndose en primer término con los fondos administrados por MOVECOLLECT SpA.',
              'Cuando el Usuario acredite que la suspensión obedece a una causa no imputable a él —incluyendo errores de la plataforma, verificaciones administrativas o suspensiones posteriormente dejadas sin efecto—, MOVERENT SpA no cobrará el canon correspondiente al período efectivamente suspendido, o lo restituirá en la Liquidación Semanal siguiente. Para acceder a este beneficio el Usuario deberá poner el Vehículo a disposición de MOVERENT SpA o acreditar que se abstuvo de utilizarlo.',
              'El saldo que no alcance a compensarse constituirá Déficit y se regirá por el Capítulo 8.',
              'Vencido el plazo sin regularización, o en caso de inhabilitación definitiva, MOVERENT SpA podrá exigir la restitución del vehículo y poner término al arriendo, sin perjuicio de las obligaciones económicas devengadas.',
            ],
          },
          { sub: '4.2 Reemplazo del vehículo' },
          'La individualización específica del vehículo no constituye elemento esencial del presente Acuerdo. MOVERENT SpA podrá reemplazar el vehículo arrendado por otro de categoría igual o superior cuando razones operativas, técnicas, de seguridad o disponibilidad lo justifiquen. En caso de que el usuario no acepte el reemplazo propuesto, podrá poner término al arriendo sin penalidad por término anticipado, debiendo únicamente pagar las rentas devengadas y demás obligaciones pendientes hasta la efectiva devolución del vehículo. El vehículo de reemplazo podrá ser eléctrico o de combustión, siempre de categoría igual o superior. Si el Usuario no acepta el reemplazo, podrá optar entre continuar pagando el arriendo hasta que el Vehículo originalmente asignado vuelva a estar disponible, o poner término inmediato al arriendo en los términos indicados.',
        ],
      },
      {
        heading: 'Capítulo 5 — Depósito en Garantía',
        body: [
          'Con el objeto de caucionar el cumplimiento de las obligaciones económicas que puedan encontrarse pendientes al término de la relación contractual, el Usuario deberá constituir un depósito en garantía por la suma de $350.000 (trescientos cincuenta mil pesos), el que deberá mantenerse durante toda la vigencia del arriendo.',
          { sub: '5.1 Naturaleza del depósito' },
          'El Depósito en Garantía tiene carácter de caución contractual y no constituye renta anticipada, saldo disponible, medio ordinario de pago ni mecanismo de financiamiento de las obligaciones del Usuario.',
          'En consecuencia, su existencia no faculta al Usuario para suspender, postergar, reducir o dejar de pagar las obligaciones que se determinen durante la vigencia del arriendo, las que deberán solucionarse mediante los mecanismos de Liquidación Semanal, compensación y arrastre establecidos en el Capítulo 8.',
          'Como regla general, MOVERENT SpA no imputará durante la vigencia del arriendo las obligaciones semanales del Usuario al Depósito en Garantía.',
          { sub: '5.2 Modalidad de entero' },
          'El Depósito en Garantía se constituirá con un pie de a lo menos el cincuenta por ciento (50%) de su monto al día de la entrega material del Vehículo y el saldo en hasta tres (3) cuotas semanales sucesivas. Caso a caso, MOVERENT SpA podrá evaluar y autorizar una forma de pago distinta.',
          'Mientras el Depósito no se encuentre íntegramente constituido, subsistirá la obligación del Usuario de completar el saldo pendiente conforme al calendario acordado, y MOVERENT SpA podrá modificar la modalidad de cobro de la renta, incluyendo el cargo parcial en más de una oportunidad dentro de la semana, con el objeto de mitigar el riesgo financiero.',
          { sub: '5.3 Imputación al término' },
          'Terminado el arriendo y restituido materialmente el Vehículo, MOVERENT SpA podrá imputar total o parcialmente el Depósito en Garantía a las obligaciones vencidas o pendientes de cargo del Usuario, incluyendo saldos de canon, Déficits, multas contractuales, TAG, peajes, deducibles, daños imputables, cargos de recuperación y cualquier otra obligación económica derivada del arriendo.',
          'Dicha imputación se reflejará en la Liquidación Final de Salida. Si el monto de las obligaciones fuere superior al Depósito, su imputación operará únicamente como abono a la deuda y no extinguirá ni limitará la responsabilidad del Usuario por el saldo restante.',
          { sub: '5.4 Devolución' },
          'Si, efectuadas las imputaciones correspondientes, existiere un saldo a favor del Usuario, MOVERENT SpA lo restituirá dentro del plazo de treinta (30) días corridos contado desde la emisión de la Liquidación Final de Salida, mediante transferencia electrónica a la cuenta bancaria registrada.',
          'Tratándose de cargos que por su naturaleza sólo puedan determinarse con posterioridad —infracciones de tránsito cursadas y aún no notificadas, cargos de TAG o peajes pendientes de facturación y deducibles de siniestros en proceso de liquidación—, MOVERENT SpA podrá retener exclusivamente el monto estimado de dichos cargos, informando su detalle y fundamento. El saldo no retenido se restituirá en el plazo señalado. El monto retenido se liquidará y restituirá, en lo que corresponda, dentro de los quince (15) días corridos siguientes a la determinación definitiva del cargo y, en todo caso, a más tardar dentro de los noventa (90) días corridos contados desde la restitución material del Vehículo.',
          'El Depósito en Garantía no devengará intereses, reajustes ni remuneración alguna a favor del Usuario.',
          { sub: '5.5 Información falsa o engañosa' },
          'Si se comprobare que el usuario proporcionó información o documentación falsa, inexacta o engañosa que haya sido determinante para la aprobación del arriendo y que genere perjuicio económico para MOVERENT SpA, el depósito podrá ser retenido total o parcialmente en la medida necesaria para cubrir los daños ocasionados, sin perjuicio de las demás acciones legales que correspondan.',
        ],
      },
      {
        heading: 'Capítulo 6 — Servicios Incluidos y Servicios Adicionales Contratables',
        body: [
          { sub: '6.1 Prestaciones incluidas en el Plan' },
          'El arriendo regulado en este Acuerdo es un arriendo de vehículo con servicios asociados. El canon del Plan contratado comprende, además del uso del Vehículo, el conjunto de prestaciones descritas en el Capítulo 7, entre ellas las mantenciones programadas y sus repuestos, las reparaciones mecánicas cubiertas, la póliza de seguro, la asistencia en ruta, la asistencia legal en fiscalizaciones y la Billetera de Documentos.',
          'Dichas prestaciones forman parte del precio que el Usuario paga y no constituyen liberalidad, premio, incentivo ni beneficio otorgado en razón de su actividad. MOVERENT SpA las individualiza y las mantiene visibles y consultables en la App Movecar con el solo objeto de que el Usuario conozca el contenido íntegro de aquello que contrata.',
          'MOVERENT SpA podrá incorporar nuevas prestaciones al Plan contratado sin costo adicional para el Usuario. Su incorporación no altera el canon vigente ni genera derecho a exigir su mantención indefinida, sin perjuicio de lo dispuesto en el numeral 6.4.',
          { sub: '6.2 Servicios adicionales de contratación voluntaria' },
          'MOVERENT SpA pone a disposición del Usuario un catálogo de servicios adicionales de contratación voluntaria —tales como servicios de telemedicina, asistencias complementarias, coberturas ampliadas y otros que se incorporen en el futuro—, comprendidos dentro del giro de MOVERENT SpA y prestados por ésta directamente o a través de proveedores especializados contratados al efecto.',
          'La contratación de estos servicios es enteramente facultativa del Usuario y se perfecciona por él desde la App Movecar. Antes de contratar, la App informará el servicio comprendido, su precio, la periodicidad del cobro, su duración y la forma de darlo de baja. El Usuario podrá poner término a cualquier servicio adicional en cualquier momento desde la misma App, con efecto a contar en las condiciones especificas del servicio.',
          'El precio del servicio adicional contratado se incorporará como mayor valor del arriendo con servicios y se cobrará en la Liquidación Semanal del Usuario, sujeto al mismo orden de imputación establecido en el Capítulo 8.4. Los servicios adicionales no contratados por el Usuario no generan cargo alguno.',
          'Tratándose de servicios prestados por terceros proveedores, la responsabilidad técnica y profesional de la prestación corresponderá a dicho proveedor conforme a sus propias condiciones, las que serán puestas a disposición del Usuario antes de contratar. MOVERENT SpA responderá de la correcta contratación, del cobro y de la baja oportuna del servicio.',
          { sub: '6.3 Naturaleza de las prestaciones' },
          'Ni las prestaciones incluidas en el Plan ni los servicios adicionales contratables constituyen contraprestación por servicio alguno prestado por el Usuario a MOVERENT SpA. No remuneran su actividad, su tiempo de conexión ni su desempeño en plataformas EAT; no se otorgan, condicionan ni retiran en función de metas, calificaciones, resultados o volumen de viajes; no configuran relación laboral de ninguna especie; y no implican participación de MOVERENT SpA en los ingresos generados por el Usuario.',
          'La contratación o no contratación de servicios adicionales no condiciona el acceso al Vehículo, no altera el canon del Plan salvo en lo previsto en el numeral 6.2, y no incide en la evaluación del Usuario, en la asignación de vehículos ni en la renovación del arriendo.',
          { sub: '6.4 Modificación del catálogo' },
          'MOVERENT SpA podrá incorporar, modificar o discontinuar servicios adicionales del catálogo, informándolo al Usuario a través de la App Movecar con la anticipación razonable que permita la naturaleza del servicio. Discontinuado un servicio adicional que el Usuario tuviere contratado, cesará el cobro correspondiente a contar del  cierre de mes siguiente, sin que ello dé lugar a indemnización.',
          'La supresión o reducción sustantiva de una prestación incluida en el Plan constituye una modificación de las condiciones del arriendo y se sujetará al procedimiento de aviso previo y aceptación establecido en este Acuerdo.',
          { sub: '6.5 Efecto del Déficit' },
          'El Déficit no regularizado no afecta por sí solo las prestaciones incluidas en el Plan mientras el arriendo se mantenga vigente.',
          'Configurado el incumplimiento grave por subsistencia del Déficit al cierre de la cuarta Liquidación Semanal consecutiva conforme al Capítulo 8, MOVERENT SpA podrá suspender aquellas prestaciones incluidas que no resulten indispensables para la seguridad del Vehículo, de sus ocupantes o de terceros. La póliza de seguro y la asistencia en ruta se mantendrán vigentes en todo caso mientras el Vehículo permanezca en poder del Usuario.',
          'Los servicios adicionales contratados por el Usuario se mantendrán vigentes mientras su precio se encuentre pagado. Si el cobro correspondiente pasare a integrar el Déficit, MOVERENT SpA podrá darlo de baja previo aviso al Usuario, cesando el cargo hacia adelante, sin que ello extinga los montos ya devengados.',
        ],
      },
      {
        heading: 'Capítulo 7 — Qué Incluye el Arriendo Bajo Modalidad de Suscripción',
        body: [
          'Dependiendo del plan de suscripción elegido por el Usuario, el arriendo del vehículo incluye lo siguiente:',
          { sub: '7.1 Vehículo' },
          'Un automóvil correspondiente a la categoría y plan de suscripción seleccionado por el Usuario, conforme a la disponibilidad operativa de MOVERENT SpA.',
          { sub: '7.2 Energía o combustible' },
          'Sin perjuicio de lo anterior, MOVERENT SpA podrá gestionar convenios, tarifas preferenciales o programas de recarga con terceros proveedores, cuyas condiciones serán informadas en la App Movecar. Dichos convenios no forman parte del Plan contratado, no reducen el canon y podrán ser modificados o discontinuados en cualquier momento sin que generen derecho adquirido. Sin perjuicio de lo anterior, MOVERENT SpA podrá otorgar descuentos, convenios, tarifas preferenciales, subsidios o reembolsos asociados a la adquisición de energía o combustible, los que se regirán por el Capítulo 6 y podrán ser modificados, suspendidos o eliminados en cualquier momento sin que generen derecho adquirido.',
          { sub: '7.3 Kilometraje' },
          'Kilometraje ilimitado, sujeto a un uso razonable del vehículo conforme a su destino económico.',
          'El uso preferente del Vehículo es la prestación de servicios mediante plataformas EAT autorizadas. Se admiten viajes interregionales EAT y viajes privados dentro del límite territorial, condiciones y cargos regulados en el Capítulo 12.4. Se mantiene prohibido el transporte de carga y cualquier otro fin no autorizado.',
          'Se entenderá que el uso se aparta significativamente de los estándares de la flota cuando el kilometraje semanal del Usuario exceda en más de un treinta por ciento (30%) el kilometraje semanal promedio de la flota administrada por MOVERENT SpA o, tratándose del Plan Full Gas, el kilometraje semanal promedio de los Vehículos arrendados bajo ese Plan, medido sobre períodos móviles de cuatro (4) semanas consecutivas, o cuando la utilización del Vehículo resulte manifiestamente ajena a su destino económico. Verificada dicha circunstancia, MOVERENT SpA la comunicará al Usuario y le otorgará un plazo de dos (2) semanas para regularizar su patrón de uso antes de calificarlo como uso anormal o indebido.',
          { sub: '7.4 Mantenciones' },
          'Todos los costos asociados a mantenciones periódicas por kilometraje, así como los repuestos directamente vinculados a dichas mantenciones, conforme a los programas de mantención definidos por MOVERENT SpA.',
          'El tiempo en que el Vehículo se encuentre inmovilizado con motivo de una mantención programada no se devengará el canon de arriendo correspondiente al período efectivo de indisponibilidad, salvo que MOVERENT SpA ponga a disposición del Usuario un vehículo de reemplazo, caso en el cual el canon continuará devengándose normalmente.',
          'En los planes compartidos, MOVERENT SpA programará las mantenciones alternando la jornada afectada entre ambos Conductores, de modo que la carga se distribuya equitativamente entre ellos a lo largo de la relación contractual.',
          'La asistencia del Usuario a la mantención se acreditará mediante el registro del taller o concesionario que la ejecute, que MOVERENT SpA obtiene directamente. El Usuario deberá concurrir en la fecha y hora informadas o comunicar su imposibilidad con la anticipación que se le indique.',
          { sub: '7.5 Reparaciones mecánicas' },
          'Reparaciones mecánicas necesarias en caso de avería, salvo que el desperfecto derive de negligencia, mal uso, descuido o utilización indebida del vehículo por parte del Usuario, lo cual será determinado por el taller mecánico asignado o validado por MOVERENT SpA.',
          { sub: '7.6 Seguro' },
          'El Vehículo cuenta con una póliza de seguro contratada por MOVERENT SpA, cuyas coberturas, límites, asistencias, deducibles y exclusiones son las establecidas en la póliza vigente aplicable al Vehículo y al Plan contratado.',
          'El Usuario podrá consultar en todo momento la póliza vigente en la Billetera de Documentos de la App Movecar. El régimen de deducibles y el procedimiento en caso de siniestro se regulan en el Capítulo 11.',
          { sub: '7.7 Documentación — Billetera de Documentos' },
          'MOVERENT SpA mantiene a disposición del Usuario, en la App Movecar, una funcionalidad llamada “Guantera” de Documentos donde estarán permanentemente disponibles y actualizados los siguientes antecedentes del Vehículo: permiso de circulación, Seguro Obligatorio de Accidentes Personales (SOAP), certificado de revisión técnica, certificado de homologación cuando corresponda, y póliza de seguro vigente.',
          'Asimismo, el Usuario dispondrá del Manual de Bolsillo de Siniestros, Asistencia y Buenas Prácticas, documento operativo e informativo con los números de emergencia, el procedimiento en caso de siniestro, los canales de Soporte MoveCar y las buenas prácticas de operación, disponible en el Vehículo y en la App Movecar. El Manual de Bolsillo tiene carácter informativo y no modifica, amplía ni restringe las obligaciones establecidas en este Acuerdo ni en el Contrato de Arrendamiento.',
          { sub: '7.8 Asistencia legal' },
          'Asistencia legal básica en caso de fiscalización relacionada con la prestación de servicios mediante EAT, en los términos y alcances definidos por MOVERENT SpA.',
          { sub: '7.9 Asistencia en ruta' },
          'Servicio de asistencia en ruta conforme a las condiciones operativas vigentes definidas por MOVERENT SpA y detalladas en el Manual de Bolsillo.',
          { sub: '7.10 Gastos y costos expresamente excluidos' },
          'No se encuentran incluidos en el arriendo y serán íntegramente de cargo del Usuario: TAG y peajes electrónicos; peajes manuales; reemplazo de neumáticos en caso de rotura, desgaste anormal o daño atribuible al Usuario; reparaciones mecánicas derivadas de descuido, mal uso o maltrato del vehículo, incluyendo la carga de combustible incorrecto; deducibles de seguro en caso de siniestro; limpieza interior y exterior del vehículo; multas de tránsito, infracciones administrativas y cualquier sanción derivada del uso del vehículo; y cualquier otro gasto no expresamente incluido.',
          'Asimismo, serán de cargo del Usuario la comisión de administración de MOVECOLLECT SpA, los cargos por viajes interregionales y privados del Capítulo 12.4, las multas contractuales del Capítulo 12.6 y las cuotas de incorporación cuando correspondan.',
        ],
      },
      {
        heading: 'Capítulo 8 — Precio, Liquidación Semanal, Déficit y Mora',
        body: [
          { sub: '8.1 Precio y planes' },
          'El precio del arriendo corresponderá al plan de suscripción elegido por el usuario, conforme a la información vigente publicada en el Sitio al momento de la facturación.',
          'Cada Plan se compone de un canon fijo semanal y un canon variable por kilómetro recorrido, con un tope semanal de kilómetros, según la jornada contratada. Los Planes AM habilitan el uso del Vehículo entre las 06:00 y las 18:00 horas; los Planes PM, entre las 18:00 y las 06:00 horas del día siguiente. El Plan Full Gas habilita el uso del Vehículo durante las 24 horas del día, con un único Usuario asignado.',
          {
            table: [
              ['PLAN', 'JORNADA', 'CANON FIJO SEMANAL', 'CANON VARIABLE (UF/km)', 'TOPE SEMANAL (km)'],
              ['Move Electric AM', '06:00 a 18:00 hrs.', '2,5 UF', '0,00280 UF/km', '1.100 km'],
              ['Move Electric PM', '18:00 a 06:00 hrs.', '3,9 UF', '0,00290 UF/km', '1.200 km'],
              ['MoveGas AM', '06:00 a 18:00 hrs.', '1,9 UF', '0,00280 UF/km', '1.100 km'],
              ['MoveGas PM', '18:00 a 06:00 hrs.', '2,9 UF', '0,00290 UF/km', '1.200 km'],
              ['Full Gas', '24 horas (Turno Libre)', '4,9 UF', '0,00330 UF/km', '1.400 km'],
            ],
          },
          'Los kilómetros recorridos por sobre el tope semanal no incrementan el canon variable, sin perjuicio de los cargos especiales establecidos en el Capítulo 12.4.',
          { sub: '8.2 Cálculo y devengo' },
          'Los valores estarán expresados en Unidades de Fomento (UF) e incluirán IVA. La conversión a pesos chilenos se efectuará conforme al valor de la Unidad de Fomento vigente a la fecha de emisión de la Liquidación Semanal respectiva.',
          'El kilometraje será determinado exclusivamente sobre la base de la telemetría del vehículo, a la cual MOVERENT SpA puede acceder remotamente. Dicha medición será vinculante para efectos de facturación.',
          'El canon fijo y variable se devengará semanalmente desde la entrega material del Vehículo y mientras éste se encuentre entregado y disponible para el Usuario, con independencia de su utilización efectiva y de los ingresos generados, salvo los casos de indisponibilidad expresamente contemplados en este Acuerdo.',
          'En caso de inicio o término de la operación durante una semana ya iniciada, los cargos se calcularán proporcionalmente según el período efectivo de disponibilidad del Vehículo.',
          { sub: '8.3 Liquidación Semanal' },
          'La liquidación correspondiente será generada y puesta a disposición del Usuario a más tardar el día jueves de cada semana.',
          'La Liquidación Semanal será puesta a disposición en la App Movecar y enviada al correo electrónico registrado. Ambos canales son medios válidos de comunicación contractual, siendo responsabilidad del Usuario mantener actualizados sus datos de contacto.',
          'El Usuario podrá objetar fundadamente una Liquidación dentro de cinco (5) días corridos desde su comunicación, a través de los canales de Soporte MoveCar, el correo soporte@movecar.pro o la App Movecar. La objeción de uno o más conceptos no suspenderá la exigibilidad de los montos no objetados. Transcurrido dicho plazo sin objeción fundada, la Liquidación se tendrá por aceptada para efectos contractuales.',
          'La comisión de administración de MOVECOLLECT SpA será equivalente al uno por ciento (1%) de los ingresos atribuibles al Usuario por la plataforma EAT, una vez descontadas las comisiones, tasas o cargos propios de dicha plataforma, y antes de cualquier descuento o imputación derivada del arriendo.',
          { sub: '8.4 Orden de imputación' },
          'El monto del canon y demás cargos asociados se solucionará conforme al siguiente orden:',
          '(i) Compensación sobre los fondos administrados por MOVECOLLECT SpA, con cargo a los ingresos generados por el Usuario en plataformas EAT.',
          '(ii) El saldo insoluto constituirá Déficit y se arrastrará automáticamente a la Liquidación Semanal siguiente.',
          '(iii) Pago directo del Usuario mediante los medios habilitados, en cualquier momento y mediante abonos voluntarios totales o parciales.',
          'El Depósito en Garantía no interviene en este orden y solo se imputa en la Liquidación Final de Salida, conforme al Capítulo 5.',
          'Los montos correspondientes a viajes EAT pagados en efectivo directamente al Usuario no constituyen fondos administrados por MOVECOLLECT SpA, sin perjuicio de ser considerados para la correcta determinación de la Liquidación Semanal. Cuando la recepción de pagos en efectivo produzca, mantenga o incremente un Déficit, MOVERENT SpA podrá restringir o deshabilitar temporalmente la recepción de viajes o pagos en efectivo hasta su regularización.',
          { sub: '8.5 Déficit y mora' },
          'Existirá Déficit cuando los ingresos del período semanal, una vez aplicadas las compensaciones y cargos, resulten insuficientes para cubrir íntegramente el canon y las demás sumas adeudadas.',
          'Producido un Déficit al cierre de una Liquidación Semanal, el Usuario se encontrará en mora respecto del saldo insoluto desde dicho cierre, sin que ello, por sí solo, habilite la adopción de medidas contractuales. El Usuario deberá pagar el Déficit a más tardar el día martes de la semana siguiente al cierre de la respectiva Liquidación Semanal. Si no lo pagare íntegramente dentro de dicho plazo, el saldo se arrastrará a la Liquidación siguiente y se computará como semana de atraso. Los límites de semanas de atraso y de monto establecidos en este numeral no constituyen un plazo adicional de pago, sino el umbral a partir del cual MOVERENT SpA podrá adoptar las medidas que correspondan.',
          'Si el Déficit no fuere íntegramente regularizado al cierre de Liquidación Semanal, MOVERENT SpA aplicará el descuento mandatorio en la semana siguiente sobre los fondos administrados y podrá adoptar medidas de contención destinadas a impedir que el saldo continúe incrementándose.',
          'Conteo de semanas de atraso. Cada Liquidación Semanal que cierre con saldo insoluto genera una semana de atraso, la que permanece computada mientras el saldo de esa semana no sea pagado íntegramente. El conteo vigente en un momento determinado corresponde al número de semanas de atraso pendientes de pago, y no se reinicia por el solo hecho de que una semana posterior cierre sin Déficit.',
          'Imputación de abonos y compensaciones. Todo abono voluntario del Usuario y toda compensación efectuada sobre los fondos administrados por MOVECOLLECT SpA se imputarán a la semana de atraso más antigua que se encuentre pendiente y, extinguida ésta, a la siguiente en orden de antigüedad. El Usuario podrá efectuar abonos totales o parciales en cualquier momento, sin necesidad de esperar el cierre de la Liquidación Semanal.',
          'Efecto de los abonos sobre el conteo. Pagado íntegramente el saldo de la semana de atraso más antigua, dicha semana se elimina del conteo, el que disminuye en una unidad; el mismo efecto se producirá por cada semana completa adicional que se pague en orden de antigüedad. Los abonos que no completen la semana más atrasada reducen el monto adeudado y el Déficit acumulado, pero no disminuyen el conteo de semanas de atraso ni suspenden el arrastre automático del saldo restante.',
          'Límites e incumplimiento grave. Se configurará incumplimiento grave cuando el conteo alcance cuatro (4) semanas de atraso pendientes, o cuando el Déficit acumulado alcance o supere en cualquier momento la suma de $350.000, lo que ocurra primero, aun cuando dicho monto se hubiere generado en una sola Liquidación Semanal. Verificado cualquiera de ambos límites, MOVERENT SpA podrá exigir la regularización íntegra e inmediata del saldo pendiente, suspender la operación, exigir la restitución inmediata del Vehículo y poner término al arriendo.',
          { sub: '8.6 Consecuencias de la mora' },
          'Configurado el incumplimiento grave conforme al numeral anterior, MOVERENT SpA podrá exigir la devolución inmediata del vehículo en el lugar y horario que indique, suspender el acceso a los Servicios y activar remotamente mecanismos de inmovilización del vehículo.',
          'La no devolución del vehículo en la fecha, lugar y hora indicados podrá configurar la comisión del delito de apropiación indebida conforme a la legislación vigente, reservándose MOVERENT SpA el derecho de ejercer las acciones legales correspondientes.',
          'Sin perjuicio de lo anterior, la retención indebida del vehículo dará lugar a una cláusula penal equivalente a 3 UF por cada día calendario de atraso en su devolución, además de un cargo de 3 UF por concepto de reactivación y recuperación del vehículo. Estas sumas serán exigibles sin perjuicio de los daños adicionales que pudieren acreditarse.',
          { sub: '8.7 Deudas pendientes al término' },
          'En caso de término de la suscripción por cualquier causa, si existiere saldo pendiente de pago, MOVERENT SpA podrá mantener al Usuario vinculado operativamente a su flota en las plataformas EAT con las que opere, hasta el pago íntegro de la deuda. Esta medida tendrá carácter exclusivamente instrumental y podrá coordinarse con MOVECOLLECT SpA, incluyendo la retención y compensación de ingresos futuros, sin que ello implique cesión de la relación contractual principal ni control sobre la actividad económica del Usuario. Dicha vinculación cesará automáticamente una vez saldada la totalidad de la deuda.',
        ],
      },
      {
        heading: 'Capítulo 9 — Opción de Compra',
        body: [
          'El Usuario que mantenga una relación contractual continua con MOVERENT SpA y se encuentre íntegramente al día en sus obligaciones podrá acceder a una Opción de Compra que le permitirá adquirir el Vehículo que utiliza o, sujeto a disponibilidad, otro vehículo perteneciente a la flota destinada a venta por MOVERENT SpA.',
          'Los períodos mínimos de permanencia exigidos, el precio de ejercicio, las reglas de cómputo de semanas, las causales de pérdida del beneficio y las demás condiciones de ejercicio se establecen exclusivamente en la Cláusula Décima Quinta del Contrato de Arrendamiento y en su Anexo N° 1, los que prevalecerán sobre cualquier descripción contenida en este Acuerdo.',
          'La Opción de Compra es un beneficio contractual asociado a la continuidad del arriendo y al cumplimiento íntegro de las obligaciones económicas del Usuario, de carácter personal e intransferible, cuyo ejercicio depende exclusivamente de condiciones objetivas y verificables. La acumulación de semanas no otorga derecho de propiedad ni expectativa de adquisición respecto de un vehículo determinado.',
          'El incumplimiento grave del Contrato de Arrendamiento podrá determinar la pérdida de la Opción de Compra y de las semanas acumuladas, conforme a lo establecido en dicho Contrato y su Anexo N° 1.',
          'Una vez ejercida la Opción, se deberá suscribir el respectivo contrato de compraventa, siendo todos los gastos e impuestos asociados de cargo del Usuario.',
        ],
      },
      {
        heading: 'Capítulo 10 — Mera Tenencia, Ley EAT, Marca y Cuidado del Vehículo',
        body: [
          { sub: '10.1 Mera tenencia' },
          'La relación jurídica del Usuario respecto del vehículo arrendado es exclusivamente de mera tenencia, reconociendo expresamente que el dominio, posesión y propiedad del vehículo pertenecen en forma exclusiva a MOVERENT SpA, no existiendo transferencia alguna de dominio ni derecho alguno de adquisición automática por el solo uso del vehículo.',
          'Lo anterior es sin perjuicio de la Opción de Compra regulada en el Capítulo 9, la cual constituye un mecanismo independiente, sujeto a condiciones específicas y cuyo ejercicio no se presume ni se adquiere por el solo transcurso del tiempo o uso del vehículo.',
          'El Usuario declara y acepta que no podrá alegar posesión, dominio, derecho real alguno ni expectativa de propiedad sobre el vehículo; no podrá ejercer derecho de retención bajo ningún pretexto; no podrá gravar, ceder, subarrendar ni disponer del vehículo bajo ningún título; y que cualquier permanencia en la tenencia del vehículo fuera de las condiciones pactadas constituirá tenencia precaria.',
          { sub: '10.2 Ley N° 21.553 e inscripción en el Registro' },
          'MOVERENT SpA dará cumplimiento, respecto del Vehículo, a los requisitos, restricciones y condiciones establecidos en la Ley N° 21.553 sobre Empresas de Aplicaciones de Transporte y su Reglamento, incluyendo su inscripción en el registro electrónico creado por dicha ley (el "Registro"), dentro de los plazos legales contados desde la entrada en vigencia de dichas normas. Mientras la Ley EAT no se encuentre vigente y el Registro no esté operativo, la falta de inscripción del Vehículo no constituirá incumplimiento de MOVERENT SpA.',
          'Una vez operativo el Registro, MOVERENT SpA inscribirá a nombre del Usuario la mera tenencia del Vehículo en el Registro Nacional de Vehículos Motorizados, conforme a lo previsto en el artículo 3° inciso quinto de la Ley EAT, con el objeto de garantizar la correcta vinculación entre el Usuario, en su calidad de conductor adscrito al Registro, y el Vehículo arrendado. Para estos efectos, el Usuario confiere a MOVERENT SpA poder especial e irrevocable para solicitar dicha inscripción y, al término del arriendo por cualquier causa, su alzamiento y cancelación.',
          'El Usuario se obliga a mantener vigente su adscripción al Registro, una vez operativo éste, y su habilitación para operar en plataformas EAT durante toda la vigencia del arriendo.',
          'El Usuario declara conocer y aceptar que, a la fecha de aceptación de este Acuerdo, la Ley EAT no se encuentra vigente y el Registro no está operativo, por lo que ni el Vehículo ni el Usuario pueden encontrarse inscritos o adscritos en él; que MOVERENT SpA no ha declarado ni garantizado lo contrario; y que la operación en plataformas EAT puede ser objeto de fiscalización por parte de la autoridad. Las consecuencias de dichas fiscalizaciones, incluidas multas, suspensiones de licencia y retención o incautación del Vehículo, se rigen por los Capítulos 11.5, 12.5, 23 y 31 de este Acuerdo.',
          'MOVERENT SpA mantendrá a disposición del Usuario, en la App Movecar y a su simple requerimiento, la documentación vigente del Vehículo, incluyendo padrón, permiso de circulación, revisión técnica, seguro obligatorio y certificado de cobertura de la póliza y, una vez operativo el Registro, el comprobante de inscripción del Vehículo y de la mera tenencia a nombre del Usuario. Las solicitudes de información del Usuario sobre estas materias serán respondidas por escrito dentro de cinco (5) días hábiles.',
          'El Usuario declara conocer y aceptar que, conforme a la Ley EAT, podrá encontrarse vinculado simultáneamente a un máximo de dos (2) vehículos adscritos al Registro, y que un mismo vehículo puede encontrarse vinculado simultáneamente a múltiples conductores adscritos. En consecuencia, y para permitir la operación de planes compartidos y el intercambio de vehículos dentro de la flota, el Usuario autoriza a MOVERENT SpA para vincularlo en el Registro, simultáneamente, a todo o parte de los vehículos de su flota. Cuando un mismo vehículo esté vinculado a más de un conductor, la responsabilidad por su operación recaerá exclusivamente en aquel que lo estuviere utilizando efectivamente, conforme a los registros de la EAT y a la Telemetría disponible.',
          { sub: '10.3 Obligaciones de cuidado' },
          'El Usuario se obliga a conducir el vehículo con diligencia y prudencia; evitar excesos de velocidad, aceleraciones o frenadas bruscas; evitar baches, impactos, lomos de toro y cualquier conducción temeraria; y mantener en perfecto estado la publicidad exterior o interior que eventualmente tenga instalada el vehículo.',
          { sub: '10.4 Publicidad en el Vehículo' },
          'La publicidad instalada en el vehículo constituye un elemento esencial del modelo comercial de MOVERENT SpA.',
          'El Usuario declara conocer y aceptar que el Vehículo puede portar publicidad adherida a su carrocería, en su interior o mediante dispositivos digitales, la que constituye una fuente de ingresos que permite mantener los precios de arriendo vigentes.',
          'En caso de daño, remoción, alteración o eliminación total o parcial de dicha publicidad, se aplicará un cargo de reposición equivalente a 15 UF.',
          'Si el Usuario es sorprendido circulando con la publicidad cubierta, disimulada o alterada de cualquier forma, se aplicará una multa contractual de 10 UF por evento.',
          'En caso de reincidencia, MOVERENT SpA podrá poner término inmediato al arriendo y exigir la devolución inmediata del vehículo, sin perjuicio de las demás acciones legales que correspondan.',
          { sub: '10.5 Disponibilidad del Vehículo para marca, publicidad y equipamiento' },
          'El Usuario declara conocer y aceptar que el Vehículo integra una flota identificada comercialmente y equipada tecnológicamente, y que MOVERENT SpA requiere acceso material a él para instalar, mantener, modificar, reemplazar o retirar los elementos de marca, publicidad y equipamiento que la operación exija.',
          'En consecuencia, el Usuario se obliga a poner el Vehículo a disposición de MOVERENT SpA, en el lugar, fecha y hora que ésta le informe, cada vez que sea requerido para:',
          {
            list: [
              'La instalación, cambio, actualización, reparación, reposición o retiro de la identificación de marca, gráfica publicitaria, adhesivos, rotulación o cualquier otro elemento de branding aplicado a la carrocería, vidrios o interior del Vehículo.',
              'La instalación, cambio, actualización, mantención, reparación, reposición o retiro de las pantallas digitales orientadas a los asientos traseros, sus soportes, cableado, dispositivos de conexión y demás componentes asociados, así como de cualquier otro equipamiento tecnológico de la flota.',
              'La verificación del estado, funcionamiento e integridad de dichos elementos.',
            ],
          },
          'Esta obligación es esencial, incondicional y no admite excusa fundada en la conveniencia operativa del Usuario, en su nivel de ingresos, en el horario de su jornada ni en acuerdos entre Conductores de un plan compartido.',
          'MOVERENT SpA comunicará el requerimiento con una anticipación mínima de cuarenta y ocho (48) horas a través de la App Movecar y del correo electrónico registrado, indicando el lugar, la fecha, la hora y la duración estimada de la intervención, salvo que se trate de una falla, desprendimiento o desperfecto que comprometa la seguridad, la integridad del equipamiento o la imagen de la flota, casos en que el requerimiento podrá ser inmediato.',
          'La intervención se programará procurando afectar lo menos posible la operación del Usuario y, tratándose de planes compartidos, alternando la jornada afectada entre ambos Conductores cuando la naturaleza de la intervención lo permita.',
          'El tiempo de inmovilización del Vehículo con motivo de estas intervenciones suspende el devengo del canon de arriendo mientras el Vehículo permanezca materialmente detenido por dicha causa, sin dar lugar a compensación, descuento o indemnización adicional de ninguna especie, salvo que la inmovilización se extienda por más de veinticuatro (24) horas continuas por causa imputable a MOVERENT SpA, caso en el cual no se devengará el canon correspondiente al período que exceda dicho plazo.',
          'La no concurrencia injustificada del Usuario, su negativa a entregar el Vehículo, el retiro del Vehículo antes de completada la intervención o cualquier conducta que impida o dificulte su ejecución constituirá incumplimiento contractual y dará lugar a la penalización establecida para la inasistencia a mantención, sin perjuicio de la facultad de MOVERENT SpA de reprogramar la intervención, suspender la operación hasta su ejecución y, en caso de reiteración, poner término al arriendo.',
          { sub: '10.6 Integridad y uso de los elementos de marca y equipamiento' },
          'El Usuario se obliga a mantener en perfecto estado de conservación y funcionamiento la identificación de marca, la publicidad y las pantallas digitales instaladas en el Vehículo, y le queda prohibido removerlos, cubrirlos, desconectarlos, apagarlos, desmontarlos, manipularlos, alterar su contenido o impedir su normal funcionamiento, sea de forma total o parcial, temporal o permanente.',
          'El Usuario no podrá utilizar las pantallas ni ningún otro elemento del equipamiento de la flota para difundir contenido propio o de terceros, ni para fines distintos de los definidos por MOVERENT SpA.',
          'El incumplimiento de estas prohibiciones dará lugar al cargo de reposición del elemento afectado y a la multa contractual establecida en el numeral 10.4, sin perjuicio del cobro íntegro del daño causado. En caso de reincidencia, MOVERENT SpA podrá poner término inmediato al arriendo y exigir la restitución del Vehículo.',
          { sub: '10.7 Custodia y mantenciones' },
          'Cuando el vehículo no esté en uso, el Usuario deberá guardarlo en un recinto cerrado y seguro, mantenerlo limpio y en condiciones adecuadas tanto interior como exteriormente, y concurrir al taller designado por MOVERENT SpA para realizar mantenciones o reparaciones cuando sea requerido. Se entenderá por recinto cerrado y seguro el interior de la dirección declarada por el Usuario provista de rejas, un centro comercial, o un estacionamiento con seguridad integrada.',
          'Si el Usuario no concurre a la mantención en la fecha y hora previamente informada con la debida anticipación, se aplicará una penalización contractual automática conforme al siguiente esquema: primera inasistencia, 1,0 UF; segunda inasistencia, 2,0 UF; cada inasistencia adicional, incremento de 0,5 UF por evento.',
        ],
      },
      {
        heading: 'Capítulo 11 — Seguros y Siniestros',
        body: [
          'Todos los vehículos de MOVERENT SpA cuentan con pólizas de seguro vigentes, contratadas con compañías aseguradoras habilitadas conforme a la normativa chilena.',
          'El Usuario reconoce que la cobertura de dichas pólizas se encuentra sujeta a condiciones, deducibles, exclusiones y requisitos establecidos por la aseguradora, los cuales acepta expresamente y puede consultar en la Billetera de Documentos.',
          { sub: '11.1 Procedimiento en caso de siniestro' },
          'Ante cualquier accidente, daño, robo u otro hecho que pueda constituir un siniestro, el Usuario deberá:',
          {
            list: [
              'Priorizar su seguridad, la de los pasajeros y la de terceros, y solicitar servicios de emergencia cuando corresponda.',
              'Contactar inmediatamente a Soporte MoveCar por los canales habilitados —teléfono de emergencia, WhatsApp de Soporte o App Movecar— y seguir sus instrucciones respecto de asistencia, grúa, Carabineros, denuncia del siniestro, destino del Vehículo y taller.',
              'Registrar, cuando sea seguro hacerlo, fotografías o videos del lugar, posición y daños del Vehículo, patente, vehículos y terceros involucrados; y recabar los datos de identificación, contacto, patente y seguro de los terceros cuando corresponda.',
              'Permitir que el tercero fotografíe los documentos del Vehículo, y abstenerse de reconocer responsabilidad en el lugar del accidente.',
              'En caso de robo o hurto, realizar denuncia inmediata ante Carabineros de Chile o autoridad competente y remitir copia del parte policial.',
              'Entregar y colaborar oportunamente con todos los antecedentes, declaraciones, fotografías, constancias y documentos requeridos por MOVERENT SpA, la aseguradora o el liquidador.',
            ],
          },
          'El Usuario no podrá contratar reparaciones, disponer unilateralmente el traslado del Vehículo, reconocer responsabilidad ni comprometer indemnizaciones con terceros sin autorización de MOVERENT SpA.',
          'MOVERENT SpA podrá utilizar sistemas de telemetría, GPS y dispositivos de inmovilización remota para proteger y recuperar el vehículo, conforme al protocolo del Capítulo 3.5.',
          'La entrega de información falsa, incompleta o engañosa hará responsable al Usuario del 100% de los daños causados, tanto al vehículo como a terceros, sin perjuicio del término inmediato del arriendo y las acciones legales correspondientes.',
          { sub: '11.2 Deducibles' },
          'Los deducibles de cargo del Usuario serán los establecidos en el Contrato de Arrendamiento y en la póliza vigente aplicable al Vehículo. El deducible de cargo del Usuario asciende a 10 UF por evento, aplicable a toda y cada pérdida, sin distinción entre daño parcial y pérdida total ni según la motorización del Vehículo, conforme a la póliza vigente y con impuesto al valor agregado incluido. No aplica a responsabilidad civil, asistencia en ruta, defensa penal ni cobertura de asiento de pasajero. Cuando MOVERENT SpA constate que la reparación puede ejecutarse en el taller de la marca o en uno equivalente por un presupuesto inferior al deducible, podrá optar por esa vía a su sola discreción, en cuyo caso el Usuario pagará únicamente dicho costo efectivo. El monto que corresponda se pagará en cuotas semanales de $100.000 hasta enterar el total.',
          'Las condiciones, exclusiones, beneficios y eventuales rebajas de deducible serán las que establezca la póliza vigente, disponible en la Billetera de Documentos.',
          'El pago del deducible se efectuará por compensación en la Liquidación Semanal con cargo a los fondos administrados por MOVECOLLECT SpA. Si dichos fondos no fueren suficientes, el saldo constituirá Déficit y se regirá por el Capítulo 8. MOVERENT SpA podrá, a su discreción, autorizar el pago en cuotas.',
          { sub: '11.3 Indisponibilidad y vehículo de reemplazo' },
          'Cuando el Vehículo quede imposibilitado de operar producto de un siniestro, la continuidad del Usuario no responsable se gestionará prioritariamente mediante el vehículo de reemplazo contemplado en la póliza y, subsidiariamente y sujeto a disponibilidad, mediante otro vehículo de la flota, que podrá ser de distinta marca, modelo o motorización.',
          'Mientras no exista vehículo disponible, no se devengará el canon correspondiente al período efectivo de indisponibilidad, y ésta no afectará la antigüedad contractual del Usuario. MOVERENT SpA procurará resolver la continuidad operacional dentro de un plazo máximo objetivo de veinte (20) días hábiles desde que el Vehículo quede formalmente indisponible, sujeto a la actuación de la aseguradora, el liquidador y la disponibilidad efectiva de flota.',
          'En planes compartidos, el siniestro imputable a un Usuario no afectará la continuidad contractual del otro, ni generará para éste responsabilidad económica ni disciplinaria por el solo hecho de compartir el Vehículo.',
          'Cuando el siniestro sea imputable al Usuario y constituya incumplimiento grave, MOVERENT SpA no estará obligada a proporcionar reemplazo y podrá suspender o poner término al arriendo.',
          { sub: '11.4 Seguros de las EAT' },
          'Las Empresas de Aplicaciones de Transporte pueden contar con pólizas propias de responsabilidad civil, cuyas coberturas, condiciones, exclusiones y fases de aplicación son determinadas por ellas y ajenas a MOVERENT SpA.',
          'La póliza contratada por MOVERENT SpA cubre el Vehículo conforme a sus propios términos. El orden de concurrencia entre ambas coberturas se regirá por lo que dispongan las respectivas pólizas y por la legislación aplicable.',
          'El Usuario es responsable de contratar seguros adicionales si estima necesario ampliar su cobertura personal.',
          { sub: '11.5 Retención o incautación del Vehículo' },
          'En caso de retención, retiro o incautación del Vehículo por cualquier autoridad, el Usuario deberá colaborar activamente en su recuperación y serán de su exclusivo cargo las multas, costos de grúa, bodegaje, gastos administrativos y cualquier otro gasto derivado.',
          'Dichos montos se registrarán en una cuenta del incidente, separada del Déficit. MOVERENT SpA podrá, a su discreción, pagarlos para recuperar el Vehículo. Cualquier reembolso o cobertura que otorgue la plataforma EAT será recaudado íntegramente por MOVECOLLECT SpA e imputado a dicha cuenta. El saldo a favor del Usuario se pagará en la Liquidación siguiente, y el saldo en contra se descontará en hasta tres (3) Liquidaciones semanales; la cuota impaga pasará a integrar el Déficit. Estas obligaciones quedan garantizadas por el Pagaré Complementario, sin perjuicio de las demás acciones legales que correspondan.Durante todo el período de indisponibilidad el canon continuará devengándose íntegramente. Tratándose de planes compartidos, el Usuario responsable responderá además frente al otro Conductor por el lucro cesante conforme al Capítulo 12.7.',
          { sub: '11.6 Exclusiones de cobertura' },
          'El Usuario responderá por los daños, costos y obligaciones no cubiertos por el seguro cuando la pérdida o rechazo de cobertura obedezca a un hecho imputable a él, incluyendo conducción bajo efectos de alcohol o drogas, negativa a realizar exámenes toxicológicos o de alcoholemia, fuga o abandono del lugar del accidente, conducción temeraria, participación en carreras o desafíos, conducción por persona no autorizada, uso prohibido del Vehículo, entrega de información falsa o incumplimiento del procedimiento de siniestro que provoque o contribuya al rechazo de la cobertura.',
          'En cualquiera de estos casos, el Usuario será responsable del 100% de los daños ocasionados y MOVERENT SpA podrá ejercer todas las acciones legales necesarias para resarcir íntegramente los perjuicios sufridos.',
        ],
      },
      {
        heading: 'Capítulo 12 — Uso del Vehículo',
        body: [
          'El Usuario podrá consultar en el Sitio los distintos planes vigentes, modalidades de arriendo (planes compartidos o exclusivos), restricciones operativas y penalizaciones aplicables en caso de incumplimiento.',
          'El vehículo deberá ser utilizado exclusivamente para los fines autorizados en estos Términos de Servicio y conforme al plan contratado.',
          { sub: '12.1 Prohibición de subarriendo y cesión de uso' },
          'El Usuario declara conocer y aceptar que está estrictamente prohibido subarrendar, ceder, prestar o permitir el uso del vehículo a cualquier tercero; que el vehículo sólo podrá ser conducido por el Usuario titular; y que bajo ninguna circunstancia podrá conducirlo un familiar, amigo, socio o tercero.',
          'La infracción constituirá incumplimiento grave y facultará a MOVERENT SpA para poner término inmediato al arriendo, exigir la devolución inmediata del vehículo, ejercer acciones legales e informar a la aseguradora.',
          'El Usuario declara conocer que la conducción por persona no autorizada constituye causal de pérdida de cobertura conforme a la póliza vigente, respondiendo en tal caso por la totalidad de los daños no cubiertos, tanto del Vehículo como los ocasionados a terceros.',
          { sub: '12.2 Derecho de inspección y control' },
          'MOVERENT SpA podrá inspeccionar el vehículo en cualquier momento, de forma presencial o remota. El Usuario se obliga a enviar imágenes del vehículo cuando sea requerido, cargarlas en la App Movecar y concurrir a dependencias de MOVERENT SpA si se le solicita. La negativa injustificada será considerada incumplimiento grave.',
          { sub: '12.3 Restricciones de uso' },
          'El uso preferente del Vehículo es la prestación de servicios mediante plataformas EAT autorizadas, siendo Uber la plataforma preferente. El Usuario deberá mantener una participación mínima de operación a través de Uber equivalente al sesenta por ciento (60%) del tiempo efectivo total de transporte de pasajeros realizado mediante plataformas EAT, evaluada sobre períodos móviles de cuatro (4) semanas consecutivas.',
          'Si al término de un período móvil la participación fuere inferior al 60%, MOVERENT SpA podrá requerir su regularización durante las cuatro (4) semanas siguientes. El pago íntegro y oportuno del canon no exime al Usuario del cumplimiento de esta obligación, por tratarse de una condición operacional independiente. Quedarán sin efecto las consecuencias asociadas al incumplimiento de este numeral, así como las derivadas de la inactividad operativa regulada en el Capítulo 31, cuando el Usuario acompañe, dentro de las cuarenta y ocho (48) horas siguientes, un antecedente formal que acredite la imposibilidad de operar durante el período respectivo.',
          'Queda prohibido el transporte de carga, el uso del Vehículo para fines distintos a los autorizados y la operación fuera del horario de la jornada del Plan contratado. El uso del Vehículo fuera del límite territorial establecido en el numeral siguiente, sin autorización previa y expresa de MOVERENT SpA, constituirá uso no autorizado.',
          { sub: '12.4 Viajes interregionales EAT y viajes privados autorizados' },
          'El Vehículo podrá ser utilizado fuera del Gran Santiago únicamente dentro de un radio máximo de ciento cincuenta (150) kilómetros, medido conforme a la distancia vial aplicable al trayecto, salvo autorización previa y expresa de MOVERENT SpA. Todo desplazamiento que exceda dicho límite requerirá autorización expresa de MOVERENT SpA.',
          'En los viajes interregionales realizados mediante Uber, el cargo especial corresponderá al canon variable por kilómetro del Plan contratado, aplicado exclusivamente sobre el kilometraje del trayecto de ida del viaje conforme al registro de la plataforma, esto es, desde el punto en que el viaje se inició hasta el destino situado fuera del Gran Santiago. No se considerarán el trayecto de regreso ni los viajes adicionales generados en el lugar de destino. Queda prohibido realizar viajes interregionales a través de una EAT distinta de Uber, salvo autorización previa y expresa de MOVERENT SpA.',
          'El Conductor podrá asimismo efectuar viajes privados con el Vehículo dentro del mismo límite territorial de ciento cincuenta (150) kilómetros, siempre que dichos viajes no correspondan a actividades prohibidas por el Contrato o estos Términos. Tratándose de viajes privados no existe registro de plataforma, por lo que el kilometraje computable se determinará exclusivamente mediante Telemetría, tomando como punto de origen y término el domicilio registrado del Conductor y como destino la ubicación efectiva situada fuera del Gran Santiago, con independencia del recorrido que el Vehículo hubiere seguido con anterioridad dentro del Gran Santiago. El cargo especial corresponderá al canon variable por kilómetro del Plan contratado, aplicado al doble de su valor ordinario, y comprenderá los trayectos de ida y regreso.',
          'La distancia, origen, destino y recorrido podrán ser verificados mediante Telemetría, registros de App Movecar, antecedentes EAT, cartografía digital y demás antecedentes objetivos disponibles. En caso de discrepancia razonable, el Conductor podrá aportar antecedentes verificables para solicitar la revisión del cargo. Para efectos del límite territorial se aplicará una tolerancia de diez por ciento (10%) sobre el radio de 150 kilómetros antes de cursar multa o término. En los viajes privados, el kilometraje se computará tomando como origen el domicilio registrado del Conductor o el último punto de salida anterior a abandonar el radio de Santiago, el que arroje mayor kilometraje. El viaje cuyo destino exceda los 150 kilómetros y cuente con autorización previa y expresa de MOVERENT SpA se cobrará al canon variable por kilómetro del Plan aplicado al doble de su valor ordinario, comprendiendo ida y regreso, sin constituir infracción.',
          'Los valores aplicables serán los vigentes para cada plan y se informarán en la tabla de tarifas correspondiente. El incumplimiento será considerado incumplimiento grave.',
          { sub: '12.5 Viajes hacia o desde aeropuertos' },
          'Movecar.pro no fomenta los viajes hacia o desde aeropuertos. Mientras el Registro de la Ley N° 21.553 no se encuentre operativo conforme a su Reglamento, y salvo habilitación expresa de MOVERENT SpA, el Usuario no podrá realizar dichos viajes, siendo de su exclusiva responsabilidad las consecuencias y gastos que se deriven de ellos.',
          'El Usuario es el único responsable de conocer y cumplir la normativa aplicable al recinto aeroportuario respectivo, incluyendo las reglas de acceso, circulación, detención, estacionamiento, espera, zonas habilitadas y retiro de pasajeros, así como las condiciones que las concesionarias o la autoridad establezcan para la operación de plataformas EAT.',
          'Si con ocasión de un viaje hacia o desde un aeropuerto el Vehículo fuere retirado, retenido o incautado por la autoridad, se aplicará lo dispuesto en el Capítulo 11.5. En particular: el canon continuará devengándose íntegramente durante todo el período de indisponibilidad; los costos de multas, grúa, bodegaje, gastos administrativos, recuperación serán de exclusivo cargo del Usuario; y, tratándose de planes compartidos, el Usuario responderá frente al otro Conductor por el lucro cesante conforme al Capítulo 12.7.',
          { sub: '12.6 Servicios ofrecidos por MOVERENT SpA' },
          'Distinto de lo anterior, MOVERENT SpA podrá poner a disposición del Usuario oportunidades de servicio asociadas a convenios, partners o acuerdos comerciales propios. La aceptación de un servicio ofrecido por MOVERENT SpA será siempre voluntaria y no incidirá en la evaluación del Usuario ni en sus condiciones contractuales.',
          'Una vez aceptado, el Usuario deberá cumplir las condiciones operativas, horarios, puntos de recogida o entrega y demás instrucciones previamente informadas. La tarifa o pago que corresponda al Usuario será informado antes de su aceptación y se incorporará a su Liquidación Semanal.',
          { sub: '12.7 Planes compartidos, relevos y lucro cesante' },
          'En los planes compartidos AM/PM, el Vehículo deberá ser entregado al Conductor del turno siguiente a las 06:00 horas para el turno AM y a las 18:00 horas para el turno PM, con una tolerancia máxima de quince (15) minutos, salvo que ambos Conductores acuerden una hora distinta.',
          'Cada Conductor deberá efectuar la entrega o recepción mediante App Movecar, registrando la información, fotografías, observaciones y demás antecedentes exigidos por el procedimiento vigente. Dichos registros constituirán el mecanismo primario de documentación del relevo.',
          'MOVERENT SpA podrá complementar, contrastar o verificar los registros de App Movecar mediante la Telemetría del Vehículo. La Telemetría tendrá carácter de antecedente objetivo complementario y no determinará por sí sola la responsabilidad de un Conductor cuando los antecedentes no permitan establecer quién mantenía materialmente la custodia o conducción del Vehículo.',
          'El Conductor que invoque un atraso, ausencia o falta de entrega por parte del otro Conductor deberá registrarlo oportunamente mediante App Movecar, indicando hora, lugar y naturaleza de la incidencia, y acompañando la evidencia de que disponga. La aplicación de compensaciones o penalizaciones requerirá antecedentes razonables que permitan atribuir la incidencia al Conductor correspondiente.',
          'Lucro cesante entre Conductores. Cuando un Conductor prive al otro del uso del Vehículo durante su jornada —por atraso o falta de entrega en el relevo, por retención o incautación del Vehículo por autoridad, o por inmovilización derivada de causa que le sea imputable—, deberá compensarlo por el lucro cesante correspondiente a las jornadas efectivamente perdidas.',
          'Dicho lucro cesante se calculará sobre la base del Ingreso Bruto promedio por jornada del Conductor afectado durante las últimas cuatro (4) semanas efectivamente operadas, con el tope del kilometraje semanal del Plan contratado. La compensación se abonará al Conductor afectado y se cargará al Conductor responsable en sus respectivas Liquidaciones Semanales. La compensación procederá por la pérdida del turno completo o por cada hora proporcional efectivamente perdida. El cobro sólo tendrá lugar cuando el Conductor afectado haya registrado la incidencia en App Movecar dentro del plazo definido operativamente: si los Conductores resuelven la incidencia entre ellos y no la registran, no se cursará cobro alguno.',
          'La acumulación de tres (3) atrasos superiores a quince (15) minutos dentro de un período de treinta (30) días corridos, debidamente registrados y verificados, o una falta de entrega que provoque la pérdida total de un turno, constituirá incumplimiento grave a no ser que sea aceptada entre las partes sin generación de reclamo alguno.',
          { sub: '12.8 Penalizaciones contractuales' },
          'Las penalizaciones establecidas en este numeral tienen carácter estrictamente contractual y son independientes de las sanciones legales que pueda aplicar la autoridad.',
          { sub: 'a) Penalizaciones por exceso de velocidad' },
          'MOVERENT SpA monitorea permanentemente la velocidad del vehículo mediante telemetría. La velocidad será registrada cada 10 segundos. Cada registro que evidencie un exceso sobre el límite legal constituirá un evento penalizable independiente.',
          'Las multas contractuales se calcularán en Unidades de Fomento conforme a la tabla siguiente, utilizando el valor oficial de la UF del mes calendario en que se incurra en la infracción. El equivalente en pesos se indica solo a título referencial, considerando una UF de $39.700.',
          {
            table: [
              ['Tramo', 'Exceso sobre el límite legal', 'Multa por evento (UF)', 'Referencial CLP'],
              ['1', 'Entre 10 y 20 km/h', '0,00003 UF', '$1'],
              ['2', 'Entre 20 y 30 km/h', '0,0004 UF', '$16'],
              ['3', 'Entre 30 y 40 km/h', '0,0015 UF', '$60'],
              ['4', 'Entre 40 y 50 km/h', '0,012 UF', '$476'],
              ['5', 'Entre 50 y 60 km/h', '0,023 UF', '$913'],
              ['6', 'Entre 60 y 70 km/h', '0,048 UF', '$1.905'],
              ['7', 'Entre 70 y 80 km/h', '0,076 UF', '$3.017'],
              ['8', 'Entre 80 y 90 km/h', '0,189 UF', '$7.503'],
              ['9', 'Entre 90 y 100 km/h', '0,315 UF', '$12.505'],
              ['10', '100 km/h o más', '0,378 UF', '$15.006'],
            ],
          },
          'Las multas serán deducidas automáticamente de la liquidación semanal o compensadas a través de los mecanismos operativos vigentes.',
          { sub: 'b) Umbral mínimo de liquidación de multas' },
          'Las multas contractuales por exceso de velocidad se calcularán y acumularán de manera continua durante cada período semanal. No obstante, sólo serán incorporadas y efectivamente cobradas en la Liquidación Semanal respectiva en la medida que el monto total acumulado durante dicho período sea igual o superior a $5.000 o su equivalente en Unidades de Fomento al momento de la liquidación.',
          'En caso de no alcanzarse dicho umbral mínimo, las multas acumuladas en el período no serán cobradas ni trasladadas a períodos posteriores, entendiéndose como un margen de tolerancia operacional propio del sistema de medición.',
          'Si el comportamiento persiste o resulta grave, MOVERENT SpA podrá exigir el aumento del depósito en garantía, suspender la Cuenta o poner término inmediato al arriendo.',
          { sub: 'c) Nivel mínimo de carga en modalidad compartida' },
          'En los casos en que el vehículo sea operado bajo modalidad compartida entre dos o más conductores, el conductor que haga entrega del vehículo deberá dejarlo con un nivel de carga no inferior al 60%, en el lugar previamente acordado entre los conductores.',
          'El incumplimiento de esta obligación dará lugar a una penalización de 0,5 UF por evento. De dicho monto, un 50% será retenido por MOVERENT SpA como compensación operativa y un 50% podrá ser asignado como bonificación al conductor afectado, a discreción de MOVERENT SpA.',
          'Si el vehículo fuere entregado con un nivel de carga inferior al 30%, se considerará un incumplimiento grave, aplicándose una penalización de 1 UF por evento. Estos eventos estarán sujetos al siguiente esquema progresivo: primer evento en el mes calendario, penalización y alerta operativa formal; segundo evento en el mismo mes, penalización reforzada y advertencia formal; tercer evento en el mismo mes, facultad de MOVERENT SpA de poner término anticipado al arriendo.',
          'La reiteración de incumplimientos del nivel mínimo de carga (<60%) será evaluada conforme al siguiente esquema: hasta 3 eventos en un mes calendario, aplicación de penalidades económicas; reiteración en un segundo mes consecutivo, amonestación formal; reiteración en un tercer mes consecutivo, causal de término del arriendo. Para ambos tramos la progresión dentro de un mismo mes calendario será: primer evento, amonestación y penalización; segundo evento, amonestación y penalización; tercer evento, término del contrato de arriendo. El incumplimiento se acredita mediante el registro que el Conductor receptor efectúe en App Movecar al momento de la recepción.',
          { sub: 'd) Registro de entrega y verificación' },
          'El conductor que reciba el vehículo deberá registrar, a través de la App Movecar, el estado de recepción del vehículo al momento de la entrega, incluyendo al menos registro fotográfico del nivel de carga, estado general visible del vehículo, y hora y ubicación de la recepción.',
          'Este registro constituirá el medio preferente de verificación para efectos de determinar el cumplimiento de las condiciones de entrega entre conductores y la eventual aplicación de penalizaciones. En caso de no efectuarse dicho registro dentro del plazo o forma definida operativamente por MOVERENT SpA, se presumirá que el vehículo fue recibido en condiciones conformes, sin perjuicio de los antecedentes que pudieren acreditarse posteriormente.',
          { sub: 'e) Otras multas contractuales' },
          'Los demás incumplimientos graves no sujetos a una penalización específica se sancionarán con la multa contractual establecida en el Contrato de Arrendamiento por evento. La aplicación de la multa no sustituye ni limita la obligación del Usuario de pagar los daños, deducibles y demás obligaciones económicas que correspondan. La tipificación de las conductas, su clasificación en simples, medias y graves, la escalera de notificaciones aplicable y el punto final de cada una se rigen por el Capítulo 31 de estos Términos.',
        ],
      },
      {
        heading: 'Capítulo 13 — Telemetría, Vinculación Operativa y Datos Personales',
        body: [
          { sub: '13.1 Telemetría y geolocalización' },
          'El vehículo cuenta con sistemas de GPS y telemetría activa las 24 horas.',
          'Dichos sistemas registran de manera automatizada información relativa al uso del Vehículo, incluyendo ubicación, velocidad, kilometraje, desplazamientos, detenciones, aceleraciones y frenadas, consumo de TAG, Multas de JPL, tiempos de operación y patrones de conducción.',
          'MOVERENT SpA podrá monitorear la ubicación y el comportamiento de conducción, establecer restricciones territoriales, intervenir o deshabilitar funciones del vehículo ante incumplimientos, y utilizar la información con fines contractuales, de seguridad y protección del activo.',
          'Los registros de Telemetría constituyen un medio de verificación objetivo, continuo y técnicamente confiable del comportamiento operativo del Vehículo, y podrán ser considerados elemento de prueba relevante para la interpretación y ejecución de este Acuerdo. Sin perjuicio de ello, el Usuario podrá controvertirlos conforme a la ley, aportando antecedentes objetivos y verificables que justifiquen su impugnación.',
          'La finalidad de la Telemetría es la protección del activo, la seguridad del Usuario y de terceros y la verificación del cumplimiento contractual. No tiene por objeto conocer aspectos de la vida privada del Usuario ajenos a la relación contractual ni dirigir la forma en que éste organiza su actividad económica independiente.',
          { sub: '13.2 Decisiones automatizadas y revisión humana' },
          'Determinadas operaciones podrán ser detectadas, calculadas o verificadas automáticamente, incluyendo el kilometraje, los eventos de velocidad, la geolocalización, los cargos de TAG y peajes y los cargos por viajes interregionales o privados.',
          'Cuando una operación automatizada produzca consecuencias contractuales relevantes para el Usuario, éste tendrá derecho a solicitar la intervención humana, a expresar su punto de vista y a impugnar la decisión. MOVERENT SpA efectuará dicha revisión por una persona con facultades suficientes para modificar o dejar sin efecto la decisión, y comunicará su resultado fundado dentro del plazo de diez (10) días hábiles contado desde la solicitud, a través de la App Movecar o del correo electrónico registrado.',
          'Mientras se encuentre pendiente la revisión, el cargo objetado no será exigible, sin perjuicio de la exigibilidad de los demás conceptos comprendidos en la Liquidación.',
          { sub: '13.3 Vinculación operativa en plataformas' },
          'El mantenimiento de una cuenta Uber Driver activa y operativa constituye un requisito esencial del arriendo.',
          'MOVERENT SpA podrá mantener una vinculación técnica con plataformas EAT, con el único objeto de facilitar la administración contractual del vehículo y el cumplimiento de las obligaciones económicas asociadas.',
          'Dicha vinculación podrá coordinarse operativamente con MOVECOLLECT SpA, sociedad jurídicamente distinta, en virtud del mandato vigente, sin que ello implique dirección, subordinación, relación laboral ni intermediación en la prestación del servicio de transporte por parte del Usuario.',
          'El Usuario se obliga a mantener vigente la configuración que permite que los fondos generados en plataformas EAT sean percibidos directamente por MOVECOLLECT SpA, y a no modificar, sustituir ni eliminar la cuenta de destino o el medio de abono sin autorización previa y por escrito. Su modificación unilateral constituirá incumplimiento grave.',
          { sub: '13.4 Tratamiento de datos personales' },
          'MOVERENT SpA y MOVECOLLECT SpA son responsables independientes del tratamiento de los datos personales del Usuario, cada una respecto de las finalidades propias de su actividad: MOVERENT SpA en lo relativo al arrendamiento, el Vehículo, la Telemetría, la seguridad, los siniestros y la protección del activo; MOVECOLLECT SpA en lo relativo a la recaudación, administración, conciliación, liquidación y transferencia de fondos.',
          'La comunicación de información entre ambas sociedades se limita a lo necesario para la ejecución de sus respectivos contratos. Dicha coordinación no altera su independencia jurídica ni convierte a una sociedad en responsable de los tratamientos efectuados por la otra.',
          'El tratamiento se rige por la Política de Privacidad y Tratamiento de Datos Personales de MOVERENT SpA y por la Política de Privacidad y Tratamiento de Datos Personales de MOVECOLLECT SpA, ambas vigentes y disponibles en el Sitio y en la App Movecar, que forman parte integrante de este Acuerdo y prevalecen sobre él en materias de datos personales.',
          'El Usuario podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, portabilidad y bloqueo temporal del tratamiento a través del canal privacidad@movecar.pro, indicando a cuál de las dos sociedades dirige su solicitud, conforme al procedimiento y plazos establecidos en las respectivas Políticas.',
          'De conformidad con la legislación vigente sobre protección de datos personales, el Usuario autoriza a MOVERENT SpA a comunicar información relativa a su morosidad a registros o bases de datos comerciales legalmente habilitados, exclusivamente para fines de evaluación crediticia y cobranza, una vez cumplidos los requisitos y plazos que la ley exige.',
        ],
      },
      {
        heading: 'Capítulo 14 — TAG, Peajes, Multas y Otros Cargos',
        body: [
          'Los TAG, peajes electrónicos o manuales, multas de tránsito, infracciones administrativas, tarifas de estacionamiento, bodegajes, grúas y cualquier otro cargo asociado al uso del vehículo no se encuentran incluidos en los planes de arriendo.',
          'El Usuario será el único y exclusivo responsable de todos los costos, multas, infracciones o cargos derivados del uso del vehículo durante el período en que lo haya tenido bajo su mera tenencia.',
          'Cualquier monto que MOVERENT SpA reciba o deba pagar como consecuencia del uso del vehículo será incorporado en la liquidación semanal siguiente y se solucionará conforme al orden de imputación del Capítulo 8.4. Si no alcanzare a compensarse, constituirá Déficit exigible.',
          'En caso de multas judicializadas o citaciones a comparecer ante tribunales, el Usuario será responsable del pago íntegro del importe de la multa, sus reajustes e intereses, los gastos administrativos, los costos judiciales y los honorarios razonables de abogados o gestores. MOVERENT SpA podrá ejercer todos los mecanismos de cobro que la ley le permita.',
          { sub: '14.1 Pago de deducibles de seguro' },
          'En caso de siniestro que implique la aplicación de un deducible conforme a la póliza vigente del Vehículo, el Usuario será responsable de su pago. El monto del deducible es de 10 UF por evento, aplicable a toda y cada pérdida, sin distinción entre daño parcial y pérdida total ni según la motorización del Vehículo, o el costo efectivo de la reparación directa cuando éste fuere inferior. Se pagará en cuotas semanales de $100.000 hasta enterar el total.',
          'MOVERENT SpA podrá, a su discreción, autorizar el pago del deducible en cuotas o pactar un plan de pago, atendidas las circunstancias del caso. La existencia de un plan de pago no suspende el devengo del canon ni de las demás obligaciones.',
          'El pago del deducible se realizará mediante los mecanismos de compensación que operan a través de MOVECOLLECT SpA, con cargo a los ingresos generados por el Usuario. Si dichos ingresos resultaren insuficientes, el saldo constituirá Déficit y se regirá por el Capítulo 8.',
          'El incumplimiento en el pago del deducible o de sus cuotas podrá ser considerado para efectos de evaluación de riesgo del Usuario y dar lugar a la aplicación de las medidas contractuales correspondientes.',
        ],
      },
      {
        heading: 'Capítulo 15 — Uso de la App Movecar',
        body: [
          'El Usuario es responsable de mantener la confidencialidad de su nombre de usuario, contraseña y cualquier otro mecanismo de autenticación utilizado para registrarse e iniciar sesión en la App Movecar.',
          'El Usuario será responsable de todas las actividades realizadas a través de su cuenta, salvo que haya notificado oportunamente a MOVERENT SpA de un uso no autorizado. Deberá informar inmediatamente cualquier acceso indebido, uso no autorizado o vulneración de seguridad a través de los canales oficiales de contacto.',
          'El Usuario declara que toda la información que proporcione a través de la App Movecar o en sus interacciones con MOVERENT SpA, incluyendo proveedores externos que actúen por cuenta de MOVERENT SpA o MOVECOLLECT SpA, será verdadera, precisa, completa y actualizada.',
          'MOVERENT SpA no será responsable por el uso indebido de la cuenta cuando este sea atribuible a negligencia del Usuario en la custodia de sus credenciales.',
          { sub: '15.1 Enlaces a sitios de terceros' },
          'La App Movecar puede contener enlaces a sitios web o aplicaciones de terceros administrados por terceros independientes. MOVERENT SpA no controla su contenido, disponibilidad o funcionamiento, y no será responsable por la disponibilidad de dichos sitios, el contenido publicado en ellos, los productos o servicios ofrecidos por terceros, ni los daños derivados del uso de plataformas externas.',
          { sub: '15.2 Modificaciones del servicio' },
          'MOVERENT SpA podrá modificar, suspender o descontinuar total o parcialmente la App Movecar o los Servicios cuando resulte necesario por razones técnicas, operativas, de seguridad o regulatorias, normalmente en horarios de baja demanda, para afectar lo menos posible la actividad de sus conductores. En la medida de lo posible, informará oportunamente dichas modificaciones.',
          'MOVERENT SpA no será responsable por interrupciones derivadas de fallas técnicas, mantenciones programadas, fuerza mayor o actos de terceros.',
          { sub: '15.3 Información generada en la relación contractual' },
          'El Usuario reconoce y acepta que la información generada en el marco de la relación contractual —información personal, información transaccional derivada del uso del vehículo, datos operativos, de desempeño y telemetría, información financiera asociada al arriendo, datos de uso de la App Movecar y registros de interacción con plataformas EAT— será tratada conforme al Capítulo 13 y a las Políticas de Privacidad aplicables.',
          'MOVERENT SpA podrá utilizar dicha información para la gestión contractual, la optimización del servicio, el análisis estadístico, el desarrollo de mejoras operativas, el modelamiento predictivo, la gestión de riesgo y la optimización de la performance de la flota, conforme a las finalidades y bases de licitud establecidas en su Política de Privacidad.',
          'Las bases de datos, registros transaccionales, información agregada y modelos analíticos derivados constituyen activos de MOVERENT SpA, sin perjuicio de los derechos que la legislación sobre protección de datos personales reconoce al titular respecto de sus datos y de las condiciones de anonimización establecidas en la Política de Privacidad. En ningún caso el Usuario adquirirá derecho alguno sobre dichos análisis, reportes o modelos derivados.',
        ],
      },
      {
        heading: 'Capítulo 16 — Nuestra Propiedad Intelectual',
        body: [
          'El nombre "MoveCar" o "MoveCar.pro", así como las marcas, logotipos, diseños, imágenes comerciales, denominaciones, gráficos, interfaces, frases publicitarias y cualquier otro signo distintivo utilizado en relación con los Servicios, son de propiedad exclusiva de MOVERENT SpA o de sus respectivos titulares y se encuentran protegidos por la legislación vigente sobre propiedad industrial e intelectual. Queda estrictamente prohibido su uso, reproducción, modificación o explotación sin autorización previa y por escrito de MOVERENT SpA.',
          { sub: '16.1 Obras y contenidos protegidos' },
          'Los contenidos disponibles en el Sitio y en la App Movecar —textos, diseños, bases de datos, código fuente y objeto, interfaces, fotografías, videos, modelos de negocio, material gráfico y documentación técnica— constituyen "Obras" en los términos de la legislación sobre propiedad intelectual y pueden estar protegidas por derechos de autor, marcas registradas, patentes, secretos comerciales u otras formas de protección legal.',
          'MOVERENT SpA conserva y se reserva todos los derechos sobre dichas Obras, así como sobre la arquitectura tecnológica, bases de datos, información operativa, modelos analíticos y estructura del sistema, incluyendo aquellos desarrollados o explotados en conjunto con MOVECOLLECT SpA.',
          { sub: '16.2 Licencia limitada de uso' },
          'Este Acuerdo otorga al Usuario una licencia gratuita, limitada, revocable, no exclusiva, no sublicenciable e intransferible para acceder y utilizar la App Movecar y las Obras únicamente con fines autorizados por estos Términos de Servicio y exclusivamente durante la vigencia del arriendo.',
          'El Usuario no podrá reproducir, copiar, distribuir, comunicar al público, adaptar, descompilar, realizar ingeniería inversa, crear obras derivadas, comercializar ni vincular públicamente las Obras o cualquier elemento de la plataforma sin autorización expresa y escrita de MOVERENT SpA. El incumplimiento de esta cláusula podrá dar lugar a acciones civiles y penales conforme a la ley.',
        ],
      },
      {
        heading: 'Capítulo 17 — Contenidos Generados por Usuarios',
        body: [
          { sub: '17.1 Contenido del Usuario' },
          'El Usuario y otros usuarios podrán cargar, publicar, crear, enviar o compartir datos, información, comentarios, ideas, testimonios, material audiovisual u otro tipo de contenido a través del Sitio o la App Movecar (el "Contenido del Usuario"). El Usuario es el único responsable del Contenido que origine o publique, incluyendo su legalidad, veracidad y licitud.',
          'MOVERENT SpA no garantiza la veracidad, exactitud o calidad del Contenido del Usuario, y no será responsable por reclamaciones derivadas de dicho contenido cuando este haya sido generado por terceros.',
          { sub: '17.2 Licencia sobre el Contenido del Usuario' },
          'El Usuario conservará la titularidad de los derechos de propiedad intelectual que le correspondan sobre su Contenido del Usuario. Sin perjuicio de ello, al enviar o publicar Contenido del Usuario otorga a MOVERENT SpA una licencia perpetua, mundial, no exclusiva, transferible, sublicenciable y libre de regalías para utilizar, reproducir, distribuir, comunicar al público, adaptar, modificar, exhibir, almacenar y explotar dicho contenido en cualquier medio, exclusivamente en relación con los Servicios, la operación del negocio y fines comerciales legítimos de MOVERENT SpA, pudiendo sublicenciarse a MOVECOLLECT SpA cuando resulte necesario. Esta licencia se otorga sin derecho a compensación adicional.',
          { sub: '17.3 Testimonios y uso de imagen' },
          'Cuando el Usuario envíe testimonios, reseñas, material audiovisual o cualquier contenido que incluya su imagen o nombre, otorga a MOVERENT SpA el derecho a utilizar dichos elementos para fines promocionales, comerciales y publicitarios vinculados a los Servicios, en cualquier medio y territorio, sin obligación de pago adicional.',
          { sub: '17.4 Ideas, comentarios y sugerencias' },
          'MOVERENT SpA no estará sujeta a obligación de confidencialidad respecto de ideas, sugerencias, comentarios o propuestas que el Usuario comunique voluntariamente, y podrá utilizarlas, adaptarlas o desarrollarlas libremente para fines comerciales, operativos o tecnológicos, sin que ello genere derecho a compensación.',
          { sub: '17.5 Responsabilidad' },
          'El Usuario declara que el Contenido que publique no infringe derechos de terceros, no vulnera normas legales y no contiene información ilícita, difamatoria o engañosa, y será responsable frente a MOVERENT SpA por cualquier reclamación derivada del Contenido que origine.',
        ],
      },
      {
        heading: 'Capítulo 18 — Conductas Violentas o Agresivas contra el Personal de MoveCar.pro',
        body: [
          { sub: '18.1 Entorno seguro' },
          'MOVERENT SpA se compromete a mantener un entorno de trabajo seguro y respetuoso para todo su personal, colaboradores y proveedores. El Usuario se obliga a mantener un trato respetuoso, cordial y profesional en todas sus interacciones con el personal de MOVERENT SpA, ya sea en forma presencial o a través de cualquier medio de comunicación.',
          { sub: '18.2 Conductas prohibidas' },
          'Constituirá incumplimiento grave de estos Términos de Servicio cualquier acto que implique violencia física, amenazas, intimidación, agresión verbal, hostigamiento, acoso, insultos graves o cualquier comportamiento que razonablemente pueda afectar la integridad, seguridad o dignidad del personal de MOVERENT SpA. Lo anterior aplica a interacciones presenciales, telefónicas, por correo electrónico, mensajería, redes sociales o a través de la App Movecar.',
          { sub: '18.3 Consecuencias contractuales' },
          'Ante la verificación de una conducta de las señaladas precedentemente, MOVERENT SpA podrá adoptar, según la gravedad del caso, una o más de las siguientes medidas: poner término inmediato al arriendo del vehículo; bloquear temporal o definitivamente la Cuenta del Usuario; exigir la devolución inmediata del vehículo; prohibir el acceso del Usuario a instalaciones físicas de MOVERENT SpA; y ejercer acciones civiles o penales ante las autoridades competentes.',
          { sub: '18.4 Responsabilidad del Usuario' },
          'El Usuario será responsable de los daños y perjuicios que su conducta genere al personal de MOVERENT SpA o a terceros, incluyendo gastos médicos, daños materiales, perjuicios morales y costos judiciales que correspondan.',
          { sub: '18.5 Investigación' },
          'MOVERENT SpA podrá realizar las investigaciones internas que estime necesarias para esclarecer los hechos, pudiendo considerar registros de telemetría, grabaciones, testimonios y cualquier otro antecedente disponible. Las medidas adoptadas se fundarán en antecedentes razonables y proporcionales a la gravedad de los hechos.',
        ],
      },
      {
        heading: 'Capítulo 19 — Autorización para Contacto y Comunicaciones',
        body: [
          { sub: '19.1 Autorización general de contacto' },
          'El Usuario autoriza expresamente a MOVERENT SpA y a sus proveedores de servicios, así como a MOVECOLLECT SpA cuando corresponda, a comunicarse con él mediante llamadas telefónicas, mensajes de texto o mensajería digital, correos electrónicos y comunicaciones automatizadas o pregrabadas, a cualquiera de los números telefónicos o direcciones electrónicas proporcionadas.',
          { sub: '19.2 Finalidades de las comunicaciones' },
          'Las comunicaciones podrán tener por objeto analizar y administrar la cuenta del Usuario, resolver problemas operativos o técnicos, gestionar diferencias contractuales, cobrar montos adeudados o vencidos, solicitar retroalimentación, entregar información necesaria para la prestación del Servicio y enviar información comercial, promociones u ofertas relacionadas con los Servicios.',
          { sub: '19.3 Comunicaciones comerciales' },
          'El Usuario podrá solicitar en cualquier momento dejar de recibir comunicaciones comerciales o promocionales, sin que ello afecte las comunicaciones necesarias para la gestión contractual, operativa o de cobranza.',
          { sub: '19.4 Mensajería como parte del servicio' },
          'El Usuario acepta que la recepción de mensajes constituye parte esencial de la prestación de los Servicios. En caso de bloquear o deshabilitar las comunicaciones operativas, reconoce que podría verse afectado el normal funcionamiento del Servicio, sin que ello genere responsabilidad para MOVERENT SpA.',
          { sub: '19.5 Proveedores de servicios' },
          'El Usuario autoriza a MOVERENT SpA a compartir sus datos de contacto con proveedores que actúen por cuenta de MOVERENT SpA o MOVECOLLECT SpA, exclusivamente para fines de gestión contractual, control de calidad, capacitación, seguridad y cobranza. Dichos proveedores estarán obligados a mantener la confidencialidad y protección de la información conforme a la normativa vigente.',
        ],
      },
      {
        heading: 'Capítulo 20 — Declaraciones, Representaciones y Garantías del Usuario',
        body: [
          'El Usuario declara y garantiza que el uso del Sitio, la App Movecar y los Servicios se realizará conforme a la ley y a estos Términos de Servicio. En particular, se obliga a no utilizar los Servicios para infringir cualquier ley o regulación vigente; no incentivar, facilitar o instruir a terceros para realizar conductas ilícitas; no realizar conductas que afecten negativamente la experiencia de otros usuarios; y no tergiversar su identidad ni proporcionar información falsa o engañosa.',
          'Asimismo, se obliga a no publicar o transmitir contenido que infrinja derechos de propiedad intelectual de terceros, contenga material ilícito, difamatorio o invasivo de la privacidad, incluya publicidad no autorizada, spam, cadenas o esquemas piramidales, incluya sorteos o juegos de azar no autorizados, o contenga virus, malware o código diseñado para interferir con sistemas informáticos.',
          'En materia de seguridad y uso tecnológico, el Usuario se obliga a no acceder o intentar acceder a secciones no autorizadas; no recopilar, almacenar o explotar datos personales obtenidos a través de la plataforma sin autorización; no modificar, alterar o intervenir el Sitio, la App Movecar o los Servicios; no obtener información por medios distintos a los habilitados; no explotar errores técnicos o vulnerabilidades; no utilizar bots, scrapers o sistemas automatizados; no imponer cargas irrazonables sobre la infraestructura tecnológica; y no interferir con el funcionamiento normal de la plataforma.',
          'La vinculación técnica del Usuario con la plataforma tendrá por único objeto permitir la administración contractual de los servicios y del vehículo utilizado, así como la correcta ejecución de las obligaciones derivadas de estos Términos, sin que ello implique dirección, control laboral, subordinación ni intermediación en la prestación del servicio correspondiente.',
          'El incumplimiento de cualquiera de las obligaciones anteriores constituirá incumplimiento grave y facultará a MOVERENT SpA para suspender o cancelar la Cuenta, terminar el arriendo, exigir indemnización de perjuicios e iniciar acciones legales.',
        ],
      },
      {
        heading: 'Capítulo 21 — Precios y Descripción de Servicios',
        body: [
          'MOVERENT SpA realiza esfuerzos razonables para mantener actualizada y precisa la información relativa a precios, planes, características y disponibilidad de vehículos publicada en el Sitio y la App Movecar. Sin perjuicio de lo anterior, pueden producirse errores involuntarios, incluyendo errores tipográficos, desactualizaciones o inexactitudes.',
          'En caso de detectarse un error manifiesto en el precio o en la descripción de un plan o vehículo, MOVERENT SpA podrá corregir la información publicada, informar al Usuario del error antes de perfeccionar la contratación, o dejar sin efecto la contratación cuando el error sea evidente y determinante. En tales casos, el Usuario tendrá derecho a optar por mantener la contratación conforme a las condiciones correctas o desistirse sin penalización.',
        ],
      },
      {
        heading: 'Capítulo 22 — Indemnización',
        body: [
          'El Usuario se obliga a indemnizar, defender y mantener indemne a MOVERENT SpA, sus representantes, directores, accionistas, trabajadores, mandatarios y empresas relacionadas, incluyendo MOVECOLLECT SpA, frente a cualquier reclamo, demanda, acción judicial o extrajudicial, pérdida, multa, sanción, responsabilidad, daño, perjuicio, costo o gasto (incluyendo honorarios y costas legales efectivamente incurridos) que tenga su origen directo o indirecto en el uso del vehículo o de los Servicios; el incumplimiento total o parcial de sus obligaciones; la infracción de leyes, reglamentos o derechos de terceros; los daños materiales o personales ocasionados a terceros con ocasión de la conducción del vehículo; y la pérdida, deterioro o uso indebido del vehículo, sus accesorios, llaves, dispositivos electrónicos o equipamiento asociado.',
          'Los montos adeudados por concepto de indemnización se cobrarán conforme al mecanismo de compensación y Déficit del Capítulo 8, y quedarán comprendidos entre las obligaciones garantizadas por el Pagaré Complementario, sin perjuicio de las acciones legales que correspondan para el cobro de los saldos insolutos.',
          'Esta obligación subsistirá aun después del término del arriendo y de la devolución del vehículo.',
        ],
      },
      {
        heading: 'Capítulo 23 — Descargo y Limitación de Responsabilidad',
        body: [
          'Los Servicios, la App Movecar, el Sitio y los vehículos puestos a disposición del Usuario se entregan conforme a las condiciones establecidas en el presente Acuerdo y según disponibilidad operativa. MOVERENT SpA no otorga garantías distintas a las expresamente contempladas en estos Términos ni en las pólizas de seguro vigentes aplicables al vehículo arrendado.',
          'En particular, MOVERENT SpA no garantiza que el Sitio o la App Movecar operen de manera ininterrumpida, oportuna o libre de errores; que cualquier defecto técnico sea corregido dentro de un plazo específico; que los servidores o sistemas tecnológicos estén absolutamente libres de vulnerabilidades o interrupciones externas; ni la continuidad o disponibilidad permanente del vehículo frente a contingencias técnicas, mantenciones, fuerza mayor o hechos de terceros.',
          'MOVERENT SpA no será responsable por daños indirectos, lucro cesante, pérdida de ingresos, pérdida de oportunidad comercial, daño reputacional ni perjuicios consecuenciales derivados del uso o imposibilidad de uso de la App Movecar, del vehículo o de los Servicios. Tampoco será responsable por daños o pérdidas que afecten dispositivos electrónicos, teléfonos móviles, accesorios o herramientas tecnológicas de propiedad del Usuario, salvo que sean consecuencia directa y comprobada de dolo o culpa grave imputable a MOVERENT SpA. Asimismo, MOVERENT SpA no será responsable por lucro cesante, pérdida de ingresos ni daños indirectos derivados de fiscalizaciones, infracciones, retenciones del Vehículo o suspensiones de licencia ocurridas mientras la Ley EAT no se encuentre vigente, salvo dolo o culpa grave debidamente acreditada.',
          'En caso de configurarse responsabilidad legal de MOVERENT SpA, ésta se limitará exclusivamente a los daños directos efectivamente acreditados y, en todo caso, no podrá exceder el monto efectivamente pagado por el Usuario por concepto de arriendo en el promedio de las cuatro semanas inmediatamente anteriores al hecho que origine la reclamación.',
          'Nada de lo anterior limitará las coberturas expresamente establecidas en las pólizas de seguro vigentes, la responsabilidad por dolo o culpa grave debidamente acreditada, ni aquella responsabilidad que conforme a la legislación aplicable no pueda ser legalmente limitada o excluida.',
          'Ningún trabajador, representante o colaborador de MOVERENT SpA tiene facultades para otorgar garantías distintas a las expresamente contenidas en estos Términos.',
        ],
      },
      {
        heading: 'Capítulo 24 — Ley Aplicable y Resolución de Disputas',
        body: [
          'El presente Acuerdo se regirá e interpretará de conformidad con las leyes de la República de Chile.',
          'Cualquier controversia, conflicto o disputa que se derive de este Acuerdo, de las liquidaciones semanales, facturas, cargos, penalizaciones, planes de pago, documentos de entrega o cualquier otro instrumento accesorio, será sometida al conocimiento de los tribunales ordinarios de justicia de la comuna de Santiago, Chile. Las partes fijan su domicilio en la ciudad de Santiago para todos los efectos legales derivados de este Acuerdo.',
          'Las notificaciones de carácter contractual podrán efectuarse válidamente a través de la App Movecar o al correo electrónico registrado por el Usuario, sin perjuicio de las notificaciones judiciales, que deberán practicarse conforme a la normativa legal vigente.',
        ],
      },
      {
        heading: 'Capítulo 25 — Permanencia Mínima, Vigencia y Terminación',
        body: [
          'El presente Acuerdo entrará en vigencia desde el momento en que se haga entrega material del vehículo al Conductor y se mantendrá vigente hasta la restitución efectiva del mismo, sin perjuicio de las obligaciones económicas, contractuales o legales que permanezcan pendientes.',
          { sub: '25.1 Permanencia mínima y término anticipado' },
          'El arriendo contempla un período mínimo de permanencia de doce (12) semanas consecutivas contado desde la entrega material del Vehículo, que el Usuario declara conocer y aceptar como condición esencial, considerada por MOVERENT SpA para la asignación, preparación, habilitación y disponibilidad del Vehículo.',
          'Si el Usuario solicitare el término del arriendo, restituyere voluntariamente el Vehículo o dejare de continuar con él antes de completar dicho período, deberá pagar, a título de multa contractual por término anticipado, una suma equivalente al canon fijo semanal vigente para su Plan más el componente variable calculado sobre el promedio semanal de kilómetros efectivamente recorridos durante las semanas operadas, multiplicado por el número de semanas que resten para completar las doce (12). La restitución material del Vehículo antes del cumplimiento del período mínimo no extingue ni reduce esta obligación.',
          'Dicha multa no será aplicable cuando el término se produzca exclusivamente por decisión de MOVERENT SpA sin incumplimiento imputable al Usuario; cuando el Usuario no acepte un reemplazo de vehículo conforme al Capítulo 4.2; cuando no acepte una modificación de estos Términos conforme al Capítulo 1.6; ni cuando MOVERENT SpA autorice expresamente y por escrito la terminación sin aplicación de la multa.',
          { sub: '25.2 Causales de terminación' },
          'La terminación podrá producirse por voluntad del Conductor, mediante devolución formal del vehículo conforme a los procedimientos establecidos en estos Términos; por decisión de MOVERENT SpA en los casos de incumplimiento contractual, mora, infracciones graves o cualquier causal contemplada en este Acuerdo; o por mutuo acuerdo entre las partes.',
          'MOVERENT SpA podrá poner término inmediato al arriendo y exigir la restitución del Vehículo cuando concurra cualquiera de las causales de incumplimiento grave establecidas en este Acuerdo o en el Contrato de Arrendamiento, incluyendo la pérdida, suspensión o inhabilitación definitiva de la cuenta en la plataforma EAT; el subarriendo o la conducción por tercero no autorizado; la manipulación de la Telemetría; el uso no autorizado del Vehículo; el Déficit reiterado conforme al Capítulo 8.5; el riesgo de pérdida del Vehículo o la negativa a su devolución; la violencia o amenazas contra el personal; la pérdida de los requisitos de ingreso; y, encontrándose operativo el Registro de la Ley EAT, la pérdida de la adscripción del Usuario o del Vehículo a dicho Registro.',
          { sub: '25.3 Efectos' },
          'La terminación del acceso a la App Movecar no extingue ni limita las obligaciones económicas, indemnizatorias o legales generadas con anterioridad o pendientes de cumplimiento.',
          'Terminado el arriendo, MOVERENT SpA podrá deshabilitar las funcionalidades operativas de la cuenta del Conductor que permitan recibir o gestionar vehículos, turnos, servicios, entregas u otras operaciones propias de una relación contractual activa. Sin perjuicio de ello, podrá mantener un acceso limitado de consulta durante el tiempo razonablemente necesario para que el ex Conductor pueda revisar Liquidaciones, Liquidación Final de Salida, saldos pendientes, pagos, abonos, documentos contractuales e información histórica. Cuando existan obligaciones pendientes, podrán mantenerse habilitadas las funcionalidades necesarias para su consulta, pago, regularización u objeción.',
          'La mantención de dicho acceso limitado no implicará vigencia o renovación del arriendo, derecho a recibir un nuevo Vehículo ni continuidad de beneficios operativos.',
          'Todas aquellas disposiciones que por su naturaleza deban sobrevivir a la terminación —incluyendo obligaciones de pago, indemnización, confidencialidad, uso de datos, propiedad intelectual, limitaciones de responsabilidad y planes de pago pendientes— continuarán plenamente vigentes hasta su total cumplimiento.',
        ],
      },
      {
        heading: 'Capítulo 26 — Devolución del Vehículo y Liquidación Final de Salida',
        body: [
          { sub: '26.1 Devolución del Vehículo' },
          'Al término del arriendo, el Conductor deberá concurrir al domicilio indicado por MOVERENT SpA para hacer entrega material del vehículo, sus llaves, documentos y accesorios, firmando el Acta de Devolución correspondiente, en la cual se dejará constancia del estado del vehículo, kilometraje, nivel de carga y eventuales daños visibles.',
          'Tratándose de planes compartidos, la devolución se coordinará siempre con Soporte MoveCar, que determinará la modalidad aplicable según el caso: entrega material en el domicilio que MOVERENT SpA indique; entrega directa al Conductor entrante cuando ya exista un reemplazo asignado; o permanencia transitoria del Vehículo en poder del otro Conductor de la dupla.',
          'En los tres casos el relevo deberá quedar registrado en la App Movecar conforme al procedimiento del Capítulo 12.7, con registro fotográfico, kilometraje, nivel de carga y observaciones. Mientras dicho registro no se complete, el Conductor saliente continuará respondiendo por el Vehículo.',
          { sub: '26.2 Revisión posterior' },
          'MOVERENT SpA podrá efectuar una revisión técnica posterior dentro del plazo de quince (15) días corridos contados desde la restitución material del Vehículo, a fin de detectar daños ocultos, multas pendientes, deducibles aplicables u otros cargos asociados al período de arriendo.',
          'Para la determinación de los daños, MOVERENT SpA comparará el estado del Vehículo con los registros del Acta de Entrega, con los registros de App Movecar del último relevo documentado y, cuando corresponda, con una inspección específica dispuesta al efecto. Los daños identificados serán informados al Usuario con su respaldo',
          { sub: '26.3 Liquidación Final de Salida' },
          'Terminado el arriendo, MOVERENT SpA y MOVECOLLECT SpA efectuarán una Liquidación Final de Salida, en la que se incorporarán y compensarán todos los créditos y obligaciones recíprocas existentes a dicha fecha, incluyendo los ingresos pendientes de liquidación, el canon devengado hasta la restitución efectiva, la multa por término anticipado cuando corresponda, y los Déficits, multas contractuales, TAG, peajes, deducibles, daños y cargos de recuperación pendientes.',
          'El Depósito en Garantía se imputará en esta Liquidación conforme al Capítulo 5.3, y el saldo a favor del Usuario se restituirá conforme al Capítulo 5.4.',
          'Si resultare un saldo a favor de MOVERENT SpA, éste constituirá una obligación de pago del Usuario. El Conductor podrá acordar un plan de pago conforme a lo dispuesto en estos Términos. La suscripción de la Liquidación Final no implicará novación de las obligaciones previamente contraídas ni extinguirá las acciones legales que correspondan en caso de incumplimiento.',
          'MOVERENT SpA podrá gestionar el cobro de dichos saldos directamente o a través de MOVECOLLECT SpA, conforme al mandato vigente.',
        ],
      },
      {
        heading: 'Capítulo 27 — Garantía Complementaria y Pagaré',
        body: [
          { sub: '27.1 Emisión del Pagaré' },
          'Como condición esencial para la entrega del vehículo, el Conductor deberá suscribir un pagaré en favor de MOVERENT SpA, conjuntamente con una carta de instrucciones, destinado a garantizar el cumplimiento íntegro y oportuno de todas las obligaciones económicas que emanen del presente acuerdo, incluyendo los deducibles de seguro que correspondan conforme al Contrato de Arrendamiento y a la póliza vigente, las multas de tránsito, las penalizaciones contractuales, los daños no cubiertos por seguros, y los gastos de recuperación, cobranza o cualquier otro cargo asociado al uso del vehículo.',
          'El pagaré podrá ser completado por MOVERENT SpA únicamente hasta un monto máximo equivalente a 60 Unidades de Fomento.',
          { sub: '27.2 Orden de imputación al término' },
          'En caso de término del arriendo y existencia de saldos pendientes, las sumas adeudadas se liquidarán conforme al siguiente orden: (i) compensación con las liquidaciones pendientes y los ingresos EAT devengados y aún no percibidos; (ii) imputación del Depósito en Garantía; y (iii) de persistir saldo insoluto, MOVERENT SpA podrá completar el pagaré exclusivamente por el monto residual efectivamente adeudado.',
          { sub: '27.3 Liquidación técnica y aviso previo' },
          'Previo a completar el pagaré, MOVERENT SpA elaborará una liquidación detallada de los conceptos adeudados, acompañando los respaldos técnicos o documentales correspondientes, los que serán puestos en conocimiento del Conductor.',
          'Dicha comunicación se efectuará por el correo electrónico registrado y mediante la App Movecar, e indicará el monto a incorporar, su desglose por concepto, el período al que corresponde y los pagos, abonos y compensaciones descontados. El Conductor dispondrá de diez (10) días corridos para objetar fundadamente el monto o para pagarlo. Transcurrido dicho plazo sin objeción ni pago, MOVERENT SpA podrá completar el pagaré por el monto comunicado.',
          'En ningún caso el pagaré podrá utilizarse para obtener el pago duplicado de una misma obligación. Extinguidas íntegramente las obligaciones garantizadas, MOVERENT SpA dejará sin efecto el pagaré y entregará constancia de ello al Conductor.',
          { sub: '27.4 Naturaleza del título' },
          'El Conductor declara entender que el pagaré, suscrito conforme a la Ley N° 19.799, produce los efectos de un instrumento firmado y que MOVERENT SpA podrá ejercer las acciones judiciales y extrajudiciales de cobro que correspondan conforme a la ley, incluyendo, cuando resulte necesario, el requerimiento de su autorización notarial o la notificación judicial de la obligación.',
        ],
      },
      {
        heading: 'Capítulo 28 — Naturaleza de la Relación y Disposiciones Generales',
        body: [
          'El Conductor declara entender y aceptar que entre él y MOVERENT SpA no existe ni existirá relación de sociedad, asociación, cuentas en participación, agencia, representación, mandato comercial ni ninguna otra naturaleza jurídica distinta de la expresamente establecida en estos Términos de Servicio.',
          'Asimismo, declara expresamente que no existe ni existirá relación laboral, de subordinación ni dependencia entre MOVERENT SpA y el Conductor, ni directa ni indirectamente, como consecuencia del uso de la App Movecar, del arriendo del vehículo o de los Servicios regulados en este Acuerdo.',
          'Especialmente, el Conductor declara conocer, entender y aceptar que, de conformidad con la Ley N° 21.431, que regula el trabajo en plataformas digitales, la prestación de servicios de transporte de pasajeros a través de plataformas digitales lo califica como trabajador independiente respecto de dichas plataformas. La circunstancia de que MOVERENT SpA proporcione un vehículo en arriendo para la ejecución de tales servicios no altera, modifica ni transforma la naturaleza independiente de dicha relación.',
          'El Conductor mantiene plena autonomía para decidir cuándo, cómo y cuánto operar en las plataformas EAT, actúa por cuenta y riesgo propios, y ninguna disposición de este Acuerdo podrá interpretarse como instrucción, dirección o evaluación de su desempeño como conductor.',
          'El Conductor no podrá ceder ni transferir total ni parcialmente los derechos u obligaciones derivados de este Acuerdo sin el consentimiento previo y escrito de MOVERENT SpA. En caso de autorizarse una cesión, el Conductor continuará siendo responsable de sus obligaciones, salvo que MOVERENT SpA acepte expresamente la sustitución del cedente por el cesionario.',
          'MOVERENT SpA podrá ceder o transferir este Acuerdo, total o parcialmente, a cualquier sociedad relacionada, incluyendo MOVECOLLECT SpA, adquirente de activos o continuador legal, informando previamente al Conductor, sin que ello altere las condiciones económicas ni operativas pactadas.',
          'Si cualquier disposición de este Acuerdo fuere declarada nula, inválida o inaplicable por autoridad competente, dicha disposición se tendrá por no escrita en la parte afectada, manteniéndose plenamente vigentes y exigibles las demás. En tal caso, se interpretará la cláusula afectada del modo que más se aproxime a la intención original de las partes dentro de los límites legales aplicables.',
          'La circunstancia de que MOVERENT SpA no ejerza o haga valer en forma inmediata cualquier derecho derivado de este Acuerdo no constituirá renuncia a dicho derecho. Toda renuncia o modificación deberá constar por escrito para producir efectos.',
          'Ninguna de las partes será responsable por el incumplimiento de sus obligaciones cuando éste provenga de caso fortuito o fuerza mayor en los términos del artículo 45 del Código Civil. Durante la subsistencia del evento las obligaciones afectadas se suspenderán y no se devengará el canon correspondiente al período en que el Vehículo resulte inutilizable por esta causa.',
          'Confidencialidad. Las partes mantendrán estricta reserva sobre el contenido del contrato de arrendamiento, sus Anexos y las Liquidaciones, así como sobre toda objeción, reclamo, controversia, negociación, convenio de pago, transacción o finiquito que se produzca entre ellas, incluidos sus términos y montos, durante la vigencia del arriendo y en forma indefinida después de su término. Ninguna de las partes podrá comunicar dicha información a terceros, incluidas plataformas EAT, otros conductores, arrendadores de vehículos, medios de comunicación y redes sociales. Se exceptúa la información que deba entregarse: (i) a los asesores de cada parte, sujetos al mismo deber de reserva; (ii) por exigencia legal o requerimiento de autoridad o tribunal competente; (iii) para el ejercicio de acciones y defensas ante tribunales o autoridades; (iv) para la cobranza judicial o extrajudicial de las obligaciones del Usuario, incluida su publicación en registros de morosidad, tales como DICOM, conforme a la ley; y (v) a MOVECOLLECT SpA, plataformas EAT, aseguradoras, liquidadores, talleres y demás terceros que intervengan en la operación, en la medida estrictamente necesaria. La infracción de esta obligación por el Usuario constituirá Incumplimiento Grave conforme al contrato de arrendamiento, aun después de su término.',
        ],
      },
      {
        heading: 'Capítulo 29 — Acuerdo Completo',
        body: [
          'El presente Acuerdo incluye todos los términos, condiciones, políticas, avisos y demás documentos publicados en el Sitio y la App Movecar de MOVERENT SpA, incluyendo las Políticas de Privacidad de MOVERENT SpA y de MOVECOLLECT SpA y cualquier anexo, acta o documento complementario suscrito entre las partes.',
          'Este Acuerdo, junto con el Contrato de Arrendamiento y sus anexos, constituye el acuerdo íntegro entre las partes y reemplaza cualquier comunicación, entendimiento o propuesta previa o contemporánea, ya sea electrónica, oral o escrita, relativa al uso del Sitio, la App Movecar y los Servicios.',
          'Los títulos y numeraciones de los capítulos tienen únicamente fines de orden y referencia, y no afectarán la interpretación jurídica de sus disposiciones.',
          'El régimen de modificaciones de estos Términos se rige por el Capítulo 1.6.',
          'El Conductor podrá comunicar cualquier consulta o notificación a MOVERENT SpA al correo electrónico oficialmente publicado en el Sitio, y se obliga a mantener permanentemente actualizada su información de contacto, incluyendo correo electrónico, número telefónico y domicilio.',
        ],
      },
      {
        heading: 'Capítulo 30 — Forma de Aceptación y Copias',
        body: [
          'El presente Acuerdo podrá ser aceptado electrónicamente mediante la aceptación expresa de estos Términos de Servicio en la App Movecar o en el Sitio de MOVERENT SpA, al momento de comenzar su inscripción y/o posterior operación en la plataforma.',
          'Asimismo, las partes podrán suscribir versiones físicas o electrónicas adicionales, incluyendo contratos de arriendo específicos, actas de entrega o restitución del vehículo, pagarés, cartas de instrucciones y cualquier otro instrumento complementario, los cuales producirán plenos efectos jurídicos entre las partes.',
          'Las versiones electrónicas y físicas tendrán la misma validez y fuerza obligatoria conforme a la legislación vigente.',
        ],
      },
      {
        heading: 'Capítulo 31 — Matriz de Infracciones del Mover',
        body: [
          { sub: '31.1 Objeto' },
          'Este Capítulo tipifica las conductas del Usuario que constituyen incumplimiento, las clasifica, fija la escalera de actuación aplicable a cada una y determina su punto final. Se aplica sin perjuicio de las multas de tránsito y de las responsabilidades legales que correspondan, y en todo lo no previsto se rige por el Contrato de Arrendamiento, que prevalece sobre estos Términos.',
          { sub: '31.2 Niveles y cierres' },
          'Las conductas se clasifican en Simple, que se cursa y se cobra y requiere repetición para escalar; Media, que llega a su punto final al segundo evento; y Grave, que produce su efecto desde el primer evento, sin acumulación previa. Se denomina Cargo a la situación permitida que sólo genera cobro y no constituye infracción.',
          'El cierre de cada conducta puede ser multa sin término; multa y término del contrato de arriendo; pagaré y término; pagaré sin término; o término sin multa.',
          { sub: '31.3 Conversión' },
          'Tres infracciones simples de la misma familia, vigentes dentro de una ventana móvil de cuatro semanas, determinan que la cuarta sea calificada como grave. MOVERENT SpA podrá, a su entera discreción y atendida la gravedad de los hechos, considerar acumulables infracciones simples de distintas familias para configurar una infracción grave. Las infracciones simples prescriben al cierre de la ventana si no hubo reincidencia en la misma materia. Dos infracciones graves dentro de doce meses inhabilitan al Usuario para reincorporarse al servicio.',
          'Toda conducta grave que no tenga penalización específica se sanciona con la cláusula penal de 5 UF establecida en el Contrato de Arrendamiento, sin perjuicio de los daños, deducibles, cargos de recuperación y costos de cobranza que correspondan.',
          { sub: '31.4 Escalera estándar' },
          'Salvo que la conducta tenga una escalera propia, la actuación de MOVERENT SpA será: primer evento, notificación en App Movecar; segundo evento, notificación y llamado de Central; tercer evento, notificación, llamado y corte de corriente; cuarto evento, infracción grave, término del contrato de arriendo y retiro del Vehículo. El corte de corriente se ejecutará únicamente con el Vehículo detenido en la dirección declarada o sin movimiento, nunca en marcha ni con pasajero a bordo.',
          { sub: '31.5 Exención y debido proceso' },
          'Las conductas de inactividad operativa y de participación mínima en Uber quedarán sin efecto si el Usuario acompaña, dentro de las cuarenta y ocho horas siguientes, un antecedente formal que acredite la imposibilidad de operar durante el período respectivo.',
          'Cuando la causal no se encuentre acreditada, MOVERENT SpA suspenderá preventivamente la operación e informará al Usuario, quien dispondrá de cinco días hábiles para aportar antecedentes. Todo cargo calculado automáticamente admite revisión humana dentro de diez días hábiles y no será exigible mientras dicha revisión se encuentre pendiente. En cualquier obligación, y antes de que el Pagaré Complementario sea completado, el Usuario podrá prepagar por los medios habilitados.',
          { sub: '31.6 Cargos operativos' },
          'Las siguientes situaciones se encuentran permitidas, generan cobro y no constituyen infracción: viaje por Uber fuera del Gran Santiago dentro de 150 km, cobrado al canon variable por kilómetro sobre el trayecto de ida; viaje privado dentro de 150 km, cobrado al doble del canon variable, ida y regreso; viaje fuera de 150 km con autorización previa y expresa, cobrado igual que el viaje privado; TAG, peajes, multas de tránsito, grúa y bodegaje, de cargo del Usuario; devolución del Vehículo al cierre del contrato fuera del horario o punto acordado, cobrada al arriendo proporcional del día; término anticipado antes de las doce semanas, conforme al numeral 31.7; servicios adicionales contratados desde App Movecar; reemplazo del Vehículo por otro de categoría igual o superior; el Depósito en Garantía; el deducible de siniestro; y la inmovilización del Vehículo por branding, equipamiento o mantención.',
          { sub: '31.7 Término anticipado' },
          'La permanencia mínima es de doce semanas. Producido el término anticipado por causa imputable al Usuario, se cobrarán las semanas que falten para completarlas, calculadas al canon fijo del Plan más el canon variable aplicado al tope semanal de kilómetros del mismo Plan. Este cobro no admite descuento por reasignación del asiento.',
          { sub: '31.8 Infracciones económicas' },
          'A-01 Liquidación semanal cerrada con saldo insoluto: primera semana, notificación en App Movecar; segunda, descuento mandatorio, notificación y llamado; tercera, lo anterior más aviso de que la cuarta constituye infracción grave; cuarta semana de atraso pendiente, o $350.000 acumulados en cualquier momento, término del contrato y cobro del saldo.',
          'A-02 No enterar la cuota del Depósito en Garantía pactada en cuotas: primera y segunda, aviso; tercera, citación; cuarta cuota impaga, término del contrato y cobro del saldo.',
          'A-03 Deducible o reparación impaga: se paga en cuotas semanales de $100.000 hasta enterar el total. Si los fondos administrados no alcanzan, constituye Déficit y sigue por A-01.',
          { sub: '31.9 Infracciones sobre el uso del vehículo' },
          'B-01 Atraso o falta de entrega en el relevo AM/PM: entrega a las 06:00 y 18:00 con tolerancia de quince minutos, registrada en App Movecar. El cobro procede sólo si el Conductor afectado registra la incidencia. Se compensa por turno perdido o por hora proporcional. Tres atrasos en treinta días, o una falta de entrega que haga perder el turno completo, constituyen infracción grave.',
          'B-02 Exceder el tope de doce horas del Turno Libre: se cuenta por día operativo desde la telemetría y se aplica la escalera estándar del numeral 31.4. No aplica al Plan Full Gas.',
          'B-03 Entregar el Vehículo sin registrar la entrega en App Movecar: primer evento, notificación y corrección manual con Central; segundo, notificación y llamado; tercero, multa de 5 UF. El Conductor que recibe y no registra dentro del plazo se entiende que recibió conforme y pierde el derecho a reclamar.',
          'B-04 Subarrendar, ceder o prestar el Vehículo: infracción grave, multa de 5 UF y término del contrato. Causal de pérdida de cobertura.',
          'B-05 Permitir la conducción por un tercero, incluido familiar: infracción grave, multa de 5 UF y término del contrato. Causal de pérdida de cobertura.',
          'B-07 Salir fuera del radio de 150 kilómetros sin autorización previa: infracción grave, con tolerancia de 10% sobre el radio antes de cursar multa o término. Multa de 5 UF, término del contrato y cobro del viaje como privado.',
          'B-08 Pernoctar fuera de un recinto cerrado y seguro: primera ocurrencia, notificación; segunda y tercera, notificación, llamado y multa de 5 UF cada una; cuarta, término del contrato.',
          'B-10 Uso anormal del kilometraje: kilometraje semanal que excede en más de 30% el promedio de la flota (en Full Gas, el promedio de los vehículos Full Gas) en ventana móvil de cuatro semanas. Se comunica y se otorgan dos semanas para regularizar.',
          { sub: '31.10 Infracciones sobre la operación en plataforma' },
          'C-01 Día operativo sin ninguna carrera registrada, teniendo el Vehículo en poder y operativo: día 1 notificación; día 2 notificación y llamado; día 3 seguimiento; día 4 advertencia formal de infracción grave; día 5 término del contrato y retiro. Si se repite en la segunda semana, término directo. Rige con partner y sin partner, y no suspende el devengo del arriendo.',
          'C-02 Participación en Uber entre 30% y 60%: se aplica el plazo de regularización de cuatro semanas del numeral 12.3. Dentro de ese plazo, entre 50% y 60% llamado a las 72 horas, y entre 30% y 50% alerta y auditoría de recorrido a las 48 horas.',
          'C-03 Participación en Uber entre 1% y 30%: se tratará como indicio de uso no autorizado del Vehículo, con auditoría de recorrido a las 72 horas y notificación por medio formal que deje constancia fehaciente. Confirmada la auditoría, constituye infracción grave; no confirmada y encontrándose el Usuario al día, vuelve a gestión.',
          'C-04 Pérdida, suspensión o inhabilitación de la cuenta Uber Driver: notificación dentro de dos horas y cuarenta y ocho horas para acreditar regularización, ampliables cuando acredite revisión en curso. Vencido el plazo, término del contrato.',
          'C-06 Modificar la cuenta de destino de los fondos generados en plataformas: infracción grave, multa de 5 UF, término del contrato y cobro del Pagaré Complementario.',
          { sub: '31.11 Infracciones sobre la custodia y el estado del activo' },
          'D-01 Inasistencia a mantención agendada: primera falta 1,0 UF; segunda falta 2,0 UF; cada falta adicional suma 0,5 UF. Reiteración, término del contrato.',
          'D-02 Entregar el Vehículo bajo el mínimo de carga: se acredita con el registro del Conductor receptor en App Movecar. Dentro del mismo mes calendario, primer evento amonestación y penalización, segundo evento amonestación y penalización, tercer evento término del contrato. La penalización es de 0,5 UF bajo 60% y de 1 UF bajo 30%, y la mitad se bonifica al Conductor afectado.',
          'D-03 Operar el Vehículo después de avisar una falla o de ingresarlo a taller: pierde la suspensión del arriendo del período y, si el uso agravó el daño, responde por el 100% de la reparación.',
          'D-04 Dejar el Vehículo por más de doce horas en lugar no autorizado y sin aviso: primer evento, multa de 5 UF más grúa, custodia y 3 UF de reactivación; segundo evento, término del contrato y cobro del Pagaré por el saldo de la Liquidación Final de Salida.',
          'D-05 Negar o entorpecer la inspección de MOVERENT SpA: infracción grave desde el primer evento, multa de 5 UF y término del contrato.',
          'D-09 No colaborar con la fiscalización de Carabineros o de inspectores públicos: infracción grave, multa de 5 UF y término del contrato, siendo de cargo del Usuario la multa, grúa, bodegaje y recuperación.',
          'D-06 Vehículo sucio, fumado o con daño por mal uso: multa de 5 UF por evento más el daño a costo; tercera ocurrencia, término del contrato.',
          'D-07 Cubrir, dañar o remover la publicidad o las pantallas: 10 UF por evento de circulación con la publicidad cubierta o alterada y 15 UF de reposición por daño o remoción. Reincidencia, término del contrato.',
          'D-08 No presentar el Vehículo para branding o equipamiento: primera falta 1,0 UF; segunda falta 2,0 UF; cada falta adicional suma 0,5 UF. Reiteración, término del contrato.',
          { sub: '31.12 Infracciones sobre conducción y seguridad' },
          'E-01 Exceso de velocidad: cada lectura de telemetría sobre el límite legal constituye un evento tarifado conforme al numeral 12.8. Primera semana sobre el umbral de cobro, notificación; segunda, multa consolidada y llamado; tercera, aviso de infracción grave; cuarta, término del contrato. Un solo evento con exceso igual o superior a 60 km/h salta directamente al aviso de infracción grave.',
          'E-02 Conducción brusca reiterada: misma estructura de E-01 sobre aceleraciones y frenadas. El umbral se fijará conforme al scoring del proveedor de telemetría.',
          'E-03 Conducir bajo los efectos de alcohol o drogas, o negarse a los exámenes: infracción grave, multa de 5 UF, término del contrato y 100% del daño, cobrado por la vía del Pagaré Complementario.',
          'E-04 Fugarse o abandonar el lugar del accidente: infracción grave, multa de 5 UF, término del contrato y 100% del daño, cobrado por la vía del Pagaré Complementario.',
          'E-05 Participar en carreras, desafíos o conducción temeraria: infracción grave, multa de 5 UF, término del contrato y 100% del daño, cobrado por la vía del Pagaré Complementario.',
          'E-06 No dar aviso inmediato del siniestro: el estándar es contactar a Soporte MoveCar de inmediato, con tope de dos horas. Primer evento, multa de 3 UF más el deducible que corresponda; segundo evento, 5 UF y término del contrato, por evento.',
          'E-07 Vehículo retenido o incautado por la autoridad: el Usuario debe colaborar en su recuperación, el arriendo sigue devengándose íntegramente y los costos son de su cargo. En planes compartidos responde al otro Conductor por lucro cesante.',
          { sub: '31.13 Infracciones sobre telemetría y control' },
          'F-01 Manipular el GPS o la telemetría, o eludir el bloqueo remoto: infracción grave, multa de 5 UF, término del contrato y costo del equipo. Se presume imputable al Usuario salvo prueba en contrario.',
          'F-03 Incomunicación teniendo el Vehículo en poder: veinticuatro horas sin respuesta, notificación y protocolo de llamado; otras veinticuatro horas sin comunicación, inmovilización preventiva; cuarenta y ocho horas, multa de 5 UF y término del contrato.',
          { sub: '31.14 Infracciones sobre la restitución del vehículo' },
          'G-01 No restituir el Vehículo requerido: requerimiento con veinticuatro horas; recuperación domiciliaria forzosa a las cuarenta y ocho horas, con corte de corriente; denuncia por apropiación indebida a las setenta y dos horas del vencimiento. Se efectuará contacto telefónico en cada corte horario. Se devengan 3 UF por día de retención y 3 UF por reactivación.',
          'G-02 Ocultar el Vehículo, negarse a entregarlo o retenerlo frente a MOVERENT SpA: constituye tenencia precaria y no admite derecho de retención. Se aplica la misma escalera de G-01, con denuncia y cobro del Pagaré Complementario.',
          { sub: '31.15 Infracciones sobre probidad y requisitos' },
          'H-01 Ejercer violencia o amenazas contra el personal de MOVERENT SpA, colaboradores o proveedores: infracción grave, multa de 5 UF, término del contrato, retención del Depósito en Garantía, cobro del Pagaré Complementario y denuncia, con costas de cargo del Usuario.',
          'H-02 Haber proporcionado documentación o antecedentes falsos al ingresar: infracción grave, término del contrato, retención del Depósito y cobro del Pagaré Complementario.',
          'H-03 Pérdida o vencimiento de la licencia de conducir o de la cédula de identidad, o cambio significativo en la hoja de vida del conductor o en el registro de antecedentes: bloqueo y restitución del Vehículo, sin multa. El Vehículo se entrega al otro Conductor bajo la estructura de doce horas mientras el asiento queda vacante.',
          'H-04 Certificado de antecedentes u hoja de vida vencidos: notificación al quinto mes y actualización durante el sexto. Vencido el plazo, se bloquea la operación hasta su actualización y el arriendo se sigue devengando.',
          'H-05 Publicar contenido falso o difamatorio sobre el servicio: primera o segunda ocurrencia en canal comunicacional comprobable, con la gravedad calificada por MOVERENT SpA, término del contrato.',
          { sub: '31.16 Tope diario, Turno Libre e inactividad' },
          'Ningún Usuario podrá operar el Vehículo por más de doce horas por día operativo. Esta regla no aplica al Plan Full Gas, que permite el uso libre del Vehículo durante las 24 horas del día, sin perjuicio del deber del Usuario de respetar los descansos necesarios para una conducción segura. En los planes compartidos el tope lo impone la jornada del Plan contratado. Mientras el Vehículo tenga un solo Conductor asignado, por encontrarse vacante la jornada complementaria, el Usuario podrá operar en cualquier bloque horario manteniendo el mismo tope, en régimen denominado Turno Libre.',
          'El día operativo se abre con la primera activación, esto es el primer viaje registrado por la plataforma o la primera activación de telemetría, lo que ocurra primero, y se cierra con lo que ocurra primero: doce horas corridas contadas desde la apertura, o doce horas acumuladas de telemetría activa. Alcanzado el tope, MOVERENT SpA impedirá una nueva puesta en marcha. El bloqueo no se ejecutará con el Vehículo en movimiento ni con pasajero a bordo: el viaje en curso podrá completarse con una tolerancia máxima de cuarenta y cinco minutos, tras lo cual se habilitará un único trayecto de regreso, directo al recinto cerrado y seguro declarado, sin pasajeros y con tope de sesenta minutos. Las horas restantes del día operativo son de descanso obligatorio del Vehículo.',
          'El exceso no genera multa: la consecuencia es la imposibilidad de continuar operando. El canon variable por kilómetro se devenga igualmente. Al asignarse un segundo Conductor al Vehículo, el Turno Libre cesa previo aviso de cuarenta y ocho horas, sin que constituya derecho adquirido del Usuario.',
          'MOVERENT SpA mantendrá disponible para el Usuario, en la App Movecar, copia de todos los instrumentos suscritos y de la versión vigente de estos Términos de Servicio, con indicación de su número de versión y fecha de vigencia.',
        ],
      },
    ],
  },
  privacy: {
    title: 'Política de Privacidad',
    updated: 'Junio 2026',
    sections: [
      {
        heading: '1. Objetivo',
        body: [
          'El objetivo de esta política es informar sobre cómo MoveCar.pro trata los datos personales recopilados en el marco de la relación comercial, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada y la Ley N° 21.719.',
        ],
      },
      {
        heading: '2. Datos que recopilamos',
        body: [
          'MoveCar trata los siguientes tipos de información:',
          {
            list: [
              'Identificación y contacto: nombre, RUT, datos de contacto.',
              'Habilitación legal: licencia de conducir, certificado de antecedentes y hoja de vida del conductor.',
              'Información económica y financiera: datos bancarios necesarios para los pagos y liquidaciones semanales.',
              'Datos operacionales y telemetría: ubicación GPS en tiempo real, velocidad, kilometraje, tiempos de operación y parámetros de conducción.',
              'Datos de postulación: información entregada durante el proceso de postulación, incluyendo el número de teléfono ingresado en la web, el formulario de datos personales, la encuesta de perfil y los documentos subidos.',
            ],
          },
        ],
      },
      {
        heading: '3. Finalidad del tratamiento',
        body: [
          'Los datos son utilizados exclusivamente para:',
          {
            list: [
              'Gestionar el contrato de arrendamiento de vehículos y el mandato de recaudación.',
              'Monitorear el uso correcto del vehículo y garantizar la seguridad de la flota.',
              'Cumplir con obligaciones legales, incluyendo reportes a autoridades si fuera requerido.',
              'Procesar pagos, liquidaciones y gestionar siniestros a través de la aseguradora.',
              'Gestionar el proceso de postulación y evaluación de conductores.',
              'Verificar el cumplimiento de las obligaciones contractuales y aplicar multas contractuales, en base a los registros de telemetría.',
            ],
          },
        ],
      },
      {
        heading: '4. Compartición de información',
        body: [
          'MoveCar.pro no comercializa datos personales. La información se comparte únicamente con:',
          {
            list: [
              'MOVERENT SpA y MOVECOLLECT SpA: para la ejecución del modelo contractual.',
              'Proveedores tecnológicos: plataformas de gestión, telemetría y hosting.',
              'Compañías de seguros: para la gestión de siniestros.',
              'Autoridades: cuando exista una obligación legal de entrega de información.',
              'Talleres y proveedores de mantención: para la gestión de mantenciones y reparaciones del vehículo.',
            ],
          },
        ],
      },
      {
        heading: '5. Derechos del Titular (Derechos PROSA)',
        body: [
          'Los usuarios tienen derecho a solicitar:',
          {
            list: [
              'Acceso, Rectificación, Supresión, Oposición y Portabilidad de sus datos.',
              'Estos derechos rigen conforme a la Ley N° 21.719, vigente desde diciembre de 2026. El titular también puede reclamar ante la Agencia de Protección de Datos Personales.',
            ],
          },
          'Para ejercer estos derechos, el usuario debe contactar a los canales oficiales de soporte de MoveCar.pro.',
        ],
      },
      {
        heading: '6. Responsables del Tratamiento',
        body: [
          'Los responsables del tratamiento de los datos personales son MOVERENT SpA (arrendadora de los vehículos) y MOVECOLLECT SpA (recaudadora y administradora de ingresos), sociedades que operan bajo MoveCar.pro. Ambas tratan los datos de forma coordinada para la ejecución del modelo contractual.',
        ],
      },
      {
        heading: '7. Telemetría y Monitoreo',
        body: [
          'Todos los vehículos cuentan con sistemas de telemetría y monitoreo GPS activos las 24 horas. Al firmar el contrato de arrendamiento, el conductor autoriza expresamente este monitoreo y el tratamiento de la información obtenida (ubicación, velocidad, kilometraje, consumo de TAG, patrones de conducción y tiempos de operación) para fines de control operativo, verificación de uso, determinación de incumplimientos, aplicación de multas contractuales y gestión del riesgo.',
        ],
      },
      {
        heading: '8. Conservación de los Datos',
        body: [
          'Los datos personales se conservan mientras dure la relación contractual y, una vez terminada, por los plazos necesarios para cumplir obligaciones legales, gestionar contingencias pendientes (siniestros, cobros, garantía) y ejercer o defender derechos. Cumplidos esos plazos, los datos son eliminados o anonimizados.',
        ],
      },
      {
        heading: '9. Seguridad de la Información',
        body: [
          'MoveCar.pro aplica medidas técnicas y organizativas razonables para proteger los datos personales contra acceso no autorizado, pérdida, alteración o divulgación indebida, incluyendo el acceso restringido a la información según el rol de cada miembro del equipo y proveedores sujetos a obligaciones de confidencialidad.',
        ],
      },
      {
        heading: '10. Modificaciones a esta Política',
        body: [
          'MoveCar.pro puede actualizar esta Política de Privacidad. La versión vigente estará siempre publicada en el sitio web con su fecha de última actualización. Los cambios relevantes serán comunicados a los conductores a través de los canales oficiales.',
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
      'Somos la plataforma que le entrega a cada conductor un vehículo eléctrico o a combustión, con todo incluido, para que genere ingresos sin la carga de tener auto propio.',
  },
  // Sección 1 (hero): título + mosaico de rostros (placeholder).
  hero: {
    titleLead: 'Construimos',
    titleHighlight: 'oportunidades.',
    titleRest: 'No solo movilidad',
    paragraphs: [
      'Detrás de MoveCar.pro hay un equipo que ha participado en la creación y escalamiento de compañías que han impactado a millones de personas en Latinoamérica.',
      'Hoy ponemos esa experiencia al servicio de una nueva generación de conductores, combinando tecnología, analítica avanzada y una obsesión permanente por generar valor que se ve.',
    ],
    cta: 'Quiero postular',
    // Imágenes (placeholders): mosaico de rostros + fondo tenue de manos.
    image: { src: 'team/team-mosaic.webp', alt: 'Comunidad de movers Movecar.pro' },
    bg: 'backgrounds/nosotros.webp',
  },
  // Tercera sección: layout editorial "Más que arriendo de vehículos".
  modelo: {
    image1: { src: 'team/team.webp', alt: 'Equipo en sesión de fotos' },
    leftCol: [
      { kind: 'h', text: 'Más que un vehículo' },
      {
        kind: 'p',
        text: 'Los conductores no necesitan solamente un mejor auto. Necesitan un mejor aliado.',
      },
      {
        kind: 'p',
        text: 'Por eso creamos MoveCar.pro: una plataforma pensada para ayudar a miles de conductores a trabajar mejor, ganar más y preocuparse menos de todo lo que ocurre fuera del volante.',
      },
      { kind: 'h', text: 'Todo lo que necesitas para trabajar' },
      {
        kind: 'p',
        text: 'Un vehículo es solo el comienzo.',
      },{
        kind: 'p',
        text: 'MoveCar reúne tecnología, soporte, beneficios, analítica y servicios en un solo lugar, acompañando al conductor durante toda su operación para que pueda enfocarse en lo que realmente importa.',
      },
    ],
    rightCol: [
      { kind: 'h', text: 'La inteligencia detrás de cada decisión' },
      {
        kind: 'p',
        text: 'Cada kilómetro genera información.',
      },
      {
        kind: 'p',
        text: 'MoveCar utiliza inteligencia artificial para convertir esos datos en recomendaciones prácticas que ayudan a mejorar la operación, optimizar el tiempo y aumentar la rentabilidad de cada jornada.',
      },
      { kind: 'h', text: 'Construimos para quienes mueven las ciudades' },
      {
        kind: 'p',
        text: 'Somos emprendedores, tecnólogos y operadores. Sabemos que las mejores compañías no se construyen desde una oficina, sino entendiendo los problemas reales de las personas.',
      },
      {
        kind: 'p',
        text: 'Nuestra misión es simple: dignificar el trabajo del conductor profesional mediante tecnología, excelencia operacional y una obsesión permanente por crear valor.',
      },
    ],
    image: { src: 'vehicles/flota.webp', alt: 'Flota Movecar.pro en estación de carga' },
  },
  mision: {
    eyebrow: 'Nuestra misión',
    title: 'Que manejar deje de ser un gasto y sea una ganancia',
    body: 'Nacimos para resolver el mayor problema del conductor de apps: el costo y el riesgo de operar un auto. Movecar.pro pone el vehículo, el seguro, la mantención y la carga; tú pones las ganas de generar ingresos.',
    cta: 'Quiero postular',
    highlights: [
      'Vehículos 100% eléctricos de alta eficiencia',
      'Todo incluido: seguro, mantención y carga',
      'Soporte humano 24/7 y app de monitoreo',
    ],
  },
  stats: [
    { value: '+1.200', label: 'Conductores activos' },
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
      { icon: 'fa-people-group', title: 'Comunidad', body: 'Nuestros conductores son el centro: los escuchamos y crecemos con ellos.' },
      { icon: 'fa-headset', title: 'Cercanía', body: 'Soporte humano y rápido cuando lo necesitas, no un bot que te deja esperando.' },
      { icon: 'fa-shield-halved', title: 'Respaldo', body: 'Seguro con cobertura completa y auto de reemplazo (según disponibilidad).' },
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
    title: 'De la postulación a la calle en 4 días',
    subtitle:
      'Un proceso simple, online y sin costos de entrada. Te acompañamos en cada paso hasta que recibes tu vehículo y empiezas a generar.',
  },
  // Hero de la página (foto de conductor + streaks).
  hero: {
    title: '¿Por qué Movecar.pro es tu mejor opción?',
    subtitle:
      'Movecar.pro combina tecnología, soporte humano y una flota preparada para que puedas enfocarte en tus ingresos.',
    ctaPrimary: 'Quiero postular',
    ctaSecondary: 'Cómo funciona',
    bullets: ['Pago Inicial Flexible', 'Monitoreo de ingresos online', 'Soporte 24/7'],
    image: { src: 'lifestyle/driver-wheel.png', alt: 'Conductor Movecar.pro al volante' },
  },
  // Stepper horizontal "Cómo Funciona".
  flow: {
    eyebrow: 'Ingreso a Movecar.pro',
    title: 'Cómo Funciona',
    subtitle: 'Maximiza tus ingresos con una flota lista para trabajar y olvídate de los gastos imprevistos.',
    cta: 'Quiero postular',
    steps: [
      {
        label: 'Descubre tu Potencial',
        title: 'Calcula cuánto puedes generar por semana',
        items: [
          'Simula tus ingresos según tus horas de trabajo y el tipo de auto que elijas con nuestra calculadora.',
          'Datos reales de conductores activos en MoveCar: decides con datos transparentes, no con promesas.',
        ],
      },
      {
        label: ' Encuentra Tu vehículo Ideal',
        title: 'Compara y elige el plan que mejor se adapta a ti',
        items: [
          'Revisa nuestros modelos eléctricos y bencineros: calcula autonomía, consumo y equipamiento.',
          'Postula en un clic por WhatsApp: resuelve dudas en minutos, agenda tu entrevista y avanza sin trámites lentos ni filas.',
        ],
      },
      {
        label: 'Comienza',
        title: 'Cero sorpresas. \nCero letra chica',
        items: [
          'Sabrás exactamente cuánto pagas y qué incluye tu plan antes de firmar cualquier contrato.',
          'Revisa números cuando quieras: costos y liquidaciones disponibles siempre en App MoveCar.',
        ],
      },
      {
        label: 'Crece Con MoveCar',
        title: 'Manejas y cobras. \nNos encargamos del resto',
        items: [
          'Seguros, mantenciones periódicas, permisos y soporte operativo van 100% por nuestra cuenta para que nada detenga tus turnos.',
          'Usa las herramientas de App MoveCar para multiplicar tus ingresos.',
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
      content: 'No. Movecar.pro te entrega el vehículo eléctrico con seguro, mantención y carga incluidos.',
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
    title: 'Los planes más completos \ndel mercado',
    subtitle:
      'Una experiencia 360° pensada para maximizar tus ingresos: flota, tecnología, cobertura, beneficios y acompañamiento real para que solo te preocupes de manejar.',
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
            'Maximiza tus ingresos con bajo costo operativo del mercado. Ideal para complementar ingresos o trabajar de forma eficiente durante el día.',
          price: '2,5',
          period: 'UF/semanal',
          features: [
            'Sólo 0,0028 UF por km recorrido (aprox. $115)',
            'Pagas km solo hasta 1.100 km a la semana',
            'Turno: 06:00 a 18:00',
            'Bono $100.000 al mes para carga',
            'Seguro – 10 UF deducible por evento',
            'Auto de reemplazo según disponibilidad',
            'App Movecar.Pro, con monitoreo de ingresos, \nviajes, costos y ranking',
            'Opción de compra desde las 208 semanas; a $100 desde las 260',
          ],
          cta: 'Contratar',
        },
        {
          id: 'electric-pm',
          name: 'MoveElectric PM',
          badge: '100% Eléctrico',
          description:
            'Turno vespertino y nocturno en auto eléctrico (18:00 a 06:00): menor costo energético en los horarios de mayor demanda.',
          price: '3,9',
          period: 'UF/semanal',
          features: [
            'Sólo 0,0029 UF por km recorrido (aprox. $119)',
            'Pagas km solo hasta 1.200 km a la semana',
            'Turno: 18:00 a 06:00',
            'Bono $100.000 al mes para carga',
            'Seguro – 10 UF deducible por evento',
            'Auto de reemplazo según disponibilidad',
            'App MoveCar.Pro, con monitoreo de ingresos, \nviajes, costos y ranking',
            'Opción de compra desde las 208 semanas; a $100 desde las 260',
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
            'La forma más flexible y accesible de comenzar. Ideal para complementar ingresos con una baja inversión inicial.\n\n',
          price: '1,9',
          period: 'UF/semanal',
          features: [
            'Sólo 0,0028 UF por km recorrido (aprox. $115)',
            'Pagas km solo hasta 1.100 km a la semana',
            'Turno: 06:00 a 18:00',
            'Bono $100.000 al mes para bencina',
            'Seguro – 10 UF deducible por evento',
            'Auto de reemplazo según disponibilidad',
            'App MoveCar.Pro, con monitoreo de ingresos, \nviajes, costos y ranking',
            'Sin depender de carga eléctrica',
            'Opción de compra desde las 208 semanas; a $100 desde las 260',
          ],
          cta: 'Contratar',
        },
        {
          id: 'gas-pm',
          name: 'MoveGas PM',
          badge: 'Bencinero',
          description:
            'Libertad total para trabajar en horarios de alta demanda. Mayor autonomía y flexibilidad para maximizar ingresos sin depender de carga eléctrica.',
          price: '2,9',
          period: 'UF/semanal',
          features: [
            'Sólo 0,0029 UF por km recorrido (aprox. $119)',
            'Pagas km solo hasta 1.200 km a la semana',
            'Turno: 18:00 a 06:00',
            'Bono $100.000 al mes para bencina',
            'Seguro – 10 UF deducible por evento',
            'Auto de reemplazo según disponibilidad',
            'App MoveCar.Pro, con monitoreo de ingresos, \nviajes, costos y ranking',
            'Mayor potencial de ingresos',
            'Opción de compra desde las 208 semanas; a $100 desde las 260',
          ],
          cta: 'Contratar',
        },
        {
          id: 'gas-full',
          name: 'Full Gas',
          badge: 'Bencinero',
          description: 'Auto bencinero exclusivo, 24 horas.',
          price: '4,9',
          period: 'UF/semanal',
          features: [
            'Sólo 0,0033 UF por km recorrido (aprox. $135)',
            'Pagas km solo hasta 1.400 km a la semana',
            'Bono $100.000 al mes para bencina',
            'Seguro – 10 UF deducible por evento',
            'Auto de reemplazo según disponibilidad',
            'App Movecar',
            'Opción de compra desde las 208 semanas; a $100 desde las 260',
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
      { icon: 'fa-bolt', title: 'Rápido', body: 'Postulación 100% online y ágil: en pocos días estás generando.' },
      { icon: 'fa-receipt', title: 'Transparente', body: 'Cuentas claras, sin letra chica: todo en tu liquidación semanal.' },
      { icon: 'fa-shield-halved', title: 'Seguro', body: 'Seguro y soporte 24/7 en cada turno.' },
    ],
  },
  // Tabla comparativa: MoveCar vs. competencia. Cada columna lleva una imagen
  // en el encabezado. En móvil solo se muestran 2 columnas (Beneficio + MoveCar).
  compare: {
    eyebrow: 'Compara',
    title: 'Asegura el mejor plan para lo que necesitas',
    subtitle:
      'No todos los planes de arriendo son iguales. Movecar.pro combina tecnología, cobertura, flexibilidad y beneficios exclusivos para ayudarte a generar más ingresos con uno de los planes más completos del mercado.',
    rowHead: 'Beneficio',
    plans: [
      { name: 'MoveCar', img: 'plan/plan-movecar.png', brand: true },
      { name: 'Competidor 1', img: 'plan/plan1.png' },
      { name: 'Competidor 2', img: 'plan/plan2.png' },
      { name: 'Competidor 3', img: 'plan/plan3.png' },
    ],
    rows: [
      { label: 'Planes AM / PM diferenciados', values: ['Turnos AM y PM', true, false, false] },
      { label: 'Opción preferente de compra', values: ['Todos los planes', true, false, true] },
      {
        label: 'Cobertura eléctrica / gasolina',
        values: ['Eléctrico y gasolina\nCon tope', 'Solo eléctricos\nCon tope', 'Solo eléctricos\nCon tope', false],
      },
      {
        label: 'Seguro + deducibles preferenciales',
        values: [
          '10 UF máximo por evento',
          '10 UF daño menor / 30 UF pérdida total',
          '15 UF daño menor / 30 UF pérdida total',
          '15 UF daño menor / 30 UF pérdida total',
        ],
      },
      {
        label: 'Auto reemplazo / tiempos entrega',
        values: ['Según disponibilidad, sin arriendo mientras esperas', 'Según disponibilidad', false, 'Según disponibilidad'],
      },
      { label: 'App ingresos y gastos', values: [true, 'Básica', false, false] },
      { label: 'App + IA maximización ingresos', values: ['App Movecar', false, true, false] },
      { label: 'Flexibilidad en cuotas', values: ['Caso a caso', 'Hasta 7 cuotas', false, false] },
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
