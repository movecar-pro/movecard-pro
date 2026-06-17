/**
 * ============================================================
 * PREGUNTAS FRECUENTES — contenido completo del sitio.
 * ------------------------------------------------------------
 * Transcrito de "MOVECAR_Preguntas_Frecuentes_Web_v4.1" respetando
 * categorías, orden y jerarquía (párrafos + listas).
 *
 * Estructura: categorías numeradas → preguntas → respuesta como
 * secuencia de bloques (string = párrafo, {list} = viñetas).
 * Lo consume la isla FaqAccordion (un solo ítem abierto a la vez).
 * ============================================================
 */
export type FaqBlock = string | { list: string[] };
export interface FaqItem {
  q: string;
  a: FaqBlock[];
}
export interface FaqCategory {
  n: number;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    n: 1,
    title: 'Requisitos para postular',
    items: [
      {
        q: '¿Cuántos años debo tener para postular?',
        a: [
          'El rango óptimo es entre 23 y 65 años. Se evalúan casos entre 66 y 70 años con entrevista especial. Menores de 23 y mayores de 70 no pueden postular.',
        ],
      },
      {
        q: '¿Qué documentos necesito para postular?',
        a: [
          'Debes presentar los siguientes documentos vigentes:',
          {
            list: [
              'Cédula de identidad vigente',
              'Licencia de conducir vigente',
              'Certificado de antecedentes sin delitos graves',
              'Hoja de vida del conductor sin infracciones graves',
            ],
          },
        ],
      },
      {
        q: '¿Necesito tener experiencia previa en apps de transporte?',
        a: [
          'No es obligatorio, pero es un factor positivo en la evaluación. Si no tienes experiencia previa en Uber u otras apps (DiDi, Cabify, Bolt), igual puedes postular y pasarás por una entrevista de evaluación.',
        ],
      },
      {
        q: '¿Necesito tener cuenta de Uber para postular?',
        a: [
          'Sí, contar con una cuenta de Uber Driver activa es un requisito operativo esencial. Si aún no tienes una, el equipo de MoveCar te guía en el proceso de creación y habilitación durante el onboarding.',
        ],
      },
      {
        q: '¿Puedo postular si vivo fuera de Santiago?',
        a: [
          'Por ahora el servicio opera en Santiago y la Región Metropolitana. Comunas con alta alerta de riesgo operacional pueden ser revisadas caso a caso durante la postulación.',
        ],
      },
      {
        q: '¿Qué pasa si tengo antecedentes penales?',
        a: [
          'Los antecedentes graves (delitos contra la propiedad, violencia, fraude, drogas o tráfico) son causa de rechazo automático. Los antecedentes leves o manejo en estado de ebriedad son evaluados caso a caso con revisión manual y entrevista.',
        ],
      },
    ],
  },
  {
    n: 2,
    title: 'El proceso de postulación',
    items: [
      {
        q: '¿Cómo funciona el proceso de postulación?',
        a: [
          'El proceso tiene 6 etapas:',
          {
            list: [
              'Postulación: completas el formulario con tus datos básicos',
              'Evaluación de perfil: respondes una encuesta que evalúa tu compatibilidad con el modelo',
              'Subida de documentos: cargas tu cédula, licencia, antecedentes y hoja de vida',
              'Precalificación: MoveCar revisa tu perfil y documentos',
              'Entrevista: instancia de validación personal con el equipo',
              'Onboarding: firma de contrato, capacitación y entrega del vehículo',
            ],
          },
        ],
      },
      {
        q: '¿Cuánto tiempo demora el proceso hasta recibir el auto?',
        a: [
          'El proceso es rápido y ágil. Una vez aprobada la postulación y completado el onboarding, en pocos días puedes estar en la calle generando. Los tiempos dependen de la disponibilidad de vehículos y la velocidad con que completes los pasos.',
        ],
      },
      {
        q: '¿Me pueden rechazar en el proceso?',
        a: [
          'Sí. En la etapa de precalificación y en la entrevista existen puntos de decisión donde MoveCar puede no aprobar la postulación, principalmente si no se cumplen los requisitos mínimos de perfil, documentación o ajuste al modelo. Los conductores rechazados quedan registrados en la base de datos para futura evaluación.',
        ],
      },
    ],
  },
  {
    n: 3,
    title: 'Planes y arriendo',
    items: [
      {
        q: '¿Qué planes de arriendo ofrece MoveCar?',
        a: [
          'MoveCar tiene dos planes principales:',
          {
            list: [
              'Plan Diurno (AM) "Ingreso Estable": horario 06:00 a 18:00 hrs, turno de 8,5 hrs productivas — $242.500/semana',
              'Plan Nocturno (PM) "Aumenta tus Ingresos": horario 18:00 a 06:00 hrs, turno de 10 hrs productivas — $343.375/semana',
            ],
          },
        ],
      },
      {
        q: '¿Hay un tiempo mínimo de arriendo?',
        a: [
          'Sí. El arriendo mínimo es de 4 semanas (1 mes). Esto permite que tanto el conductor como MoveCar puedan operar con estabilidad y continuidad desde el inicio de la relación.',
        ],
      },
      {
        q: '¿Qué incluye el precio semanal?',
        a: [
          'El precio semanal incluye todo lo que necesitas para operar:',
          {
            list: [
              'Vehículo habilitado y configurado para Uber y apps similares',
              'Seguro vehicular completo con gestión integral de siniestros',
              'Mantenciones preventivas programadas (neumáticos, frenos, suspensión, revisión general)',
              'Soporte MoveCar: mesa de ayuda, monitoreo GPS y resolución de incidencias',
              'Liquidación semanal detallada con reporte de ingresos y descuentos',
            ],
          },
        ],
      },
      {
        q: '¿Qué no incluye el arriendo y queda de cargo del conductor?',
        a: [
          'El conductor es responsable de:',
          {
            list: [
              'Multas de tránsito',
              'TAG y peajes',
              'Deducible por siniestro: 10 UF en daño parcial / 30 UF en pérdida total',
            ],
          },
        ],
      },
      {
        q: '¿Puedo usar el auto en cualquier horario?',
        a: [
          'El vehículo debe ser utilizado exclusivamente en el horario del plan contratado. El uso fuera del horario asignado constituye incumplimiento contractual y puede derivar en multas o término del contrato.',
        ],
      },
      {
        q: '¿Puedo usar el auto en otras apps además de Uber?',
        a: [
          'Sí, puedes operar en otras plataformas de transporte autorizadas. Sin embargo, al menos el 50% de los kilómetros semanales deben ser realizados en Uber. El resto puede distribuirse en otras apps o usos personales. Lo que no está permitido es usar el vehículo para transporte interregional, carga o servicios distintos al transporte de pasajeros.',
        ],
      },
      {
        q: '¿El kilometraje tiene límite?',
        a: [
          'El vehículo tiene kilometraje ilimitado, sujeto a un uso razonable coherente con la operación en plataformas de transporte. MoveCar puede evaluar si el uso se aparta significativamente de los estándares normales de la flota a través de la telemetría.',
        ],
      },
    ],
  },
  {
    n: 4,
    title: 'Garantía y pagos',
    items: [
      {
        q: '¿Cuánto es la garantía y cómo se paga?',
        a: [
          'La garantía es de $350.000. Puedes pagarla de dos formas:',
          {
            list: [
              'Al momento de recibir el vehículo en un solo pago',
              'En cuotas semanales descontadas directamente de tus ganancias (entre $35.000 y $70.000 por semana)',
            ],
          },
        ],
      },
      {
        q: '¿Me devuelven la garantía cuando termino el contrato?',
        a: [
          'Sí, se devuelve en dos partes: el monto que excede los $150.000 se restituye a las 3 semanas de devuelto el vehículo, y el saldo restante a las 6 semanas, siempre que no existan cargos, multas, deducibles u otras obligaciones pendientes.',
        ],
      },
      {
        q: '¿Cuándo y cómo recibo mi pago semanal?',
        a: [
          'Cada semana MoveCar emite una liquidación detallada. Si el saldo es positivo (tus ganancias superan los descuentos), el depósito se realiza el jueves en tu cuenta bancaria. Si el saldo es negativo, tienes hasta el martes para regularizar el pago.',
        ],
      },
      {
        q: '¿Qué se descuenta de mis ganancias?',
        a: [
          'De tus ingresos brutos se descuentan en orden de prioridad:',
          {
            list: [
              'Canon de arriendo semanal',
              'Multas contractuales (velocidad u otras)',
              'Déficits de períodos anteriores',
              'Comisión de administración MOVECOLLECT (1% del ingreso bruto)',
              'Multas de tránsito',
              'TAG y peajes',
              'Deducibles de seguros u otros cargos asociados al uso del vehículo',
            ],
          },
        ],
      },
      {
        q: '¿Qué pasa si mis ganancias no alcanzan para cubrir el arriendo?',
        a: [
          'Si los ingresos no cubren el arriendo y los cargos del período, se genera un déficit. Este se imputa automáticamente a la garantía. Si la garantía tampoco alcanza, el saldo negativo queda como deuda exigible que debes pagar. La acumulación de déficits puede derivar en la suspensión del servicio o término del contrato.',
        ],
      },
      {
        q: '¿Qué pasa si cobré muchos viajes en efectivo y Uber me quedó debiendo menos de lo que recibí?',
        a: [
          'Cuando haces muchos viajes en efectivo, recibes el dinero directo del pasajero en el momento. Sin embargo, Uber descuenta su comisión (tasa de servicio) de tus ganancias digitales. Si en una semana cobraste más en efectivo que lo que Uber te debe transferir, puede quedar un saldo pendiente con Uber — es decir, Uber ya no te deposita nada y tú "les debes" la comisión de esos viajes en efectivo.',
          {
            list: [
              'MoveCar recibe la información de tus ganancias desde Uber al cierre de cada semana',
              'Si hay un saldo pendiente con Uber, este se refleja como deuda en tu liquidación MoveCar',
              'Ese monto se descuenta de tu garantía o deberás pagarlo antes del martes',
              'Para evitarlo: intenta mantener un equilibrio entre viajes en efectivo y viajes con tarjeta cada semana',
            ],
          },
        ],
      },
      {
        q: '¿Puedo objetar una liquidación si no estoy de acuerdo?',
        a: [
          'Sí. Tienes 5 días corridos desde que recibes la liquidación para objetarla por escrito al correo oficial de MoveCar. Transcurrido ese plazo sin objeción fundada, la liquidación se entiende aceptada.',
        ],
      },
      {
        q: '¿Se cobra alguna cuota de inscripción?',
        a: [
          'No. MoveCar no cobra cuota de inscripción. Entras sin poner plata de tu bolsillo — solo la garantía, que además puedes pagar en cuotas desde tus ganancias.',
        ],
      },
    ],
  },
  {
    n: 5,
    title: 'El vehículo',
    items: [
      {
        q: '¿Qué tipo de vehículo me asignan?',
        a: [
          'MoveCar entrega vehículos modernos, habilitados y configurados para operar en Uber y otras apps desde el primer día. El modelo exacto se detalla en el Acta de Entrega-Recepción. En casos operativos o técnicos, MoveCar puede reemplazar el vehículo por uno de categoría equivalente o superior.',
        ],
      },
      {
        q: '¿Puedo prestarle el auto a otra persona?',
        a: [
          'No. El vehículo es de uso exclusivo del conductor autorizado. Subarrendar, ceder o permitir que una tercera persona conduzca el auto — incluyendo familiares — es un incumplimiento grave que puede resultar en multa de 5 UF, suspensión inmediata y término del contrato.',
        ],
      },
      {
        q: '¿Qué hago si el auto tiene una falla mecánica?',
        a: [
          'Debes reportarlo de inmediato al equipo de soporte de MoveCar a través del canal habilitado (WhatsApp o mesa de ayuda). MoveCar gestiona las mantenciones preventivas programadas. Fallas menores o imprevistos son gestionados por el equipo de soporte.',
        ],
      },
      {
        q: '¿El auto tiene GPS y telemetría?',
        a: [
          'Sí. Todos los vehículos cuentan con sistemas de telemetría y monitoreo GPS activos las 24 horas. Estos registran ubicación, velocidad, kilometraje, tiempos de operación y otros parámetros de conducción. Al firmar el contrato, el conductor autoriza expresamente este monitoreo. Manipular o desactivar estos sistemas es una falta grave.',
        ],
      },
      {
        q: '¿Puedo llevar el auto fuera de Santiago?',
        a: [
          'No. El vehículo está habilitado para uso dentro del área de operación de plataformas de transporte en Santiago. El uso interregional está expresamente prohibido por contrato.',
        ],
      },
    ],
  },
  {
    n: 6,
    title: 'Seguros y siniestros',
    items: [
      {
        q: '¿El auto tiene seguro?',
        a: [
          'Sí. MoveCar contrata y gestiona una póliza de seguro vehicular que cubre los riesgos asociados al uso del vehículo, conforme a las condiciones y exclusiones de la aseguradora. El conductor no necesita contratar un seguro por su cuenta.',
        ],
      },
      {
        q: '¿Qué debo hacer si tengo un accidente?',
        a: [
          'Debes informar a MoveCar dentro de las 12 horas siguientes al siniestro y:',
          {
            list: [
              'Registrar fotográficamente el evento',
              'Recopilar datos de terceros involucrados',
              'Obtener constancia policial si corresponde',
              'No abandonar el lugar del accidente',
            ],
          },
        ],
      },
      {
        q: '¿Cuánto tengo que pagar si choco el auto?',
        a: [
          'Si la cobertura del seguro aplica, pagas un deducible de 10 UF en caso de daño parcial o 30 UF en caso de pérdida total. El deducible puede pagarse en cuotas o descontarse de la garantía. Si el siniestro ocurre bajo circunstancias excluidas de la cobertura (alcohol, fuga del lugar, uso no autorizado), respondes por el 100% de los daños sin límite.',
        ],
      },
      {
        q: '¿Qué situaciones dejan sin cobertura del seguro?',
        a: [
          'El seguro no cubre situaciones como:',
          {
            list: [
              'Conducción bajo los efectos del alcohol o drogas',
              'Fuga del lugar del accidente',
              'Participación en carreras o conducción temeraria',
              'Uso del vehículo en actividades no autorizadas por el contrato',
            ],
          },
        ],
      },
    ],
  },
  {
    n: 7,
    title: 'Opción de compra',
    items: [
      {
        q: '¿Puedo comprar el auto que arriendo?',
        a: [
          'Sí. MoveCar tiene una opción de compra para conductores comprometidos con la continuidad:',
          {
            list: [
              'A las 200 semanas continuas: puedes comprar el vehículo al 10% de su valor de tasación fiscal vigente',
              'A las 250 semanas continuas: precio de compra de $100 (cien pesos)',
            ],
          },
        ],
      },
      {
        q: '¿Qué pasa con las semanas acumuladas si tengo un siniestro?',
        a: [
          'Depende de la responsabilidad: si el siniestro es imputable al conductor pero no constituye incumplimiento grave, el conteo de semanas se reinicia desde cero. Si el siniestro no es imputable al conductor, el conteo continúa sin alteraciones.',
        ],
      },
      {
        q: '¿Pierdo la opción de compra si tengo un incumplimiento grave?',
        a: [
          'Sí. Un incumplimiento grave (subarriendo, manipulación de telemetría, uso no autorizado, entre otros) hace perder definitivamente el derecho a ejercer la opción de compra.',
        ],
      },
      {
        q: '¿Tengo que comprar el mismo auto que manejé?',
        a: [
          'Sí, la opción de compra aplica sobre el vehículo asignado durante el período de arriendo. El proceso de pago puede ser gestionado por MOVECOLLECT SpA conforme al contrato de mandato.',
        ],
      },
    ],
  },
  {
    n: 8,
    title: 'App MoveCar Copilot',
    items: [
      {
        q: '¿Qué es la app MoveCar Copilot?',
        a: [
          'Es la app exclusiva para conductores MoveCar. Te acompaña en cada turno con información práctica sobre tus ganancias, el estado de tu liquidación, el rendimiento del vehículo y tu progreso hacia la opción de compra del auto.',
        ],
      },
      {
        q: '¿Qué puedo hacer desde la app?',
        a: [
          'La app tiene cuatro funciones principales:',
          {
            list: [
              'Ver tus ganancias: consulta cuánto llevas ganado hoy, esta semana y este mes, con el detalle de lo que se descuenta y lo que recibirás el jueves',
              'Revisar tu liquidación: accede al desglose completo de tu semana, historial de períodos anteriores y un canal directo para consultar cualquier diferencia',
              'Conocer el estado del auto: revisa la carga disponible, los kilómetros estimados por recorrer y reporta cualquier incidente con fotos desde el mismo teléfono',
              'Seguir tu progreso: mira cuántas semanas llevas acumuladas, cuántas te faltan y cuánto cuesta hoy el auto que manejas',
            ],
          },
        ],
      },
      {
        q: '¿Cuándo está disponible la app?',
        a: [
          'La app MoveCar Copilot está en desarrollo. Será informada su disponibilidad a través de los canales oficiales de MoveCar.',
        ],
      },
    ],
  },
  {
    n: 9,
    title: 'Soporte y contacto',
    items: [
      {
        q: '¿Cómo me contacto con MoveCar si tengo un problema?',
        a: [
          'MoveCar cuenta con un equipo de soporte disponible a través de mesa de ayuda y WhatsApp. Para siniestros o urgencias, tienes un máximo de 12 horas para reportar el evento.',
        ],
      },
      {
        q: '¿MoveCar tiene equipo disponible todos los días?',
        a: [
          'Sí. El soporte MoveCar está disponible 24/7 para incidencias operacionales, monitoreo de flota y resolución de problemas durante tu turno.',
        ],
      },
      {
        q: '¿Qué pasa si pierdo mi cuenta de Uber?',
        a: [
          'La cuenta de Uber Driver activa es un requisito esencial del contrato. Si tu cuenta se suspende o inhabilita y no se regulariza, MoveCar puede suspender la operación del vehículo o poner término al contrato.',
        ],
      },
    ],
  },
  {
    n: 10,
    title: 'Privacidad y datos',
    items: [
      {
        q: '¿Qué datos recopila MoveCar sobre mí?',
        a: [
          'MoveCar trata datos de identificación personal, contacto, habilitación legal (licencia, antecedentes), datos económicos y financieros, datos operacionales del vehículo y datos de telemetría (ubicación, velocidad, kilometraje). Todo conforme a la Política de Privacidad y la Ley N° 19.628 y Ley N° 21.719.',
        ],
      },
      {
        q: '¿Mis datos se comparten con terceros?',
        a: [
          'Solo en casos necesarios para la operación: entre MOVERENT SpA y MOVECOLLECT SpA para ejecutar el modelo contractual, con la aseguradora para gestión de siniestros, con proveedores tecnológicos, talleres y con autoridades cuando exista obligación legal. Nunca se comercializan datos personales.',
        ],
      },
      {
        q: '¿Puedo pedir que borren mis datos?',
        a: [
          'Sí. Tienes derecho a solicitar acceso, rectificación, supresión, oposición y portabilidad de tus datos (derechos PROSA conforme a la Ley N° 21.719 vigente desde diciembre 2026). Puedes ejercerlos escribiendo a los canales oficiales de MoveCar.',
        ],
      },
    ],
  },
];
