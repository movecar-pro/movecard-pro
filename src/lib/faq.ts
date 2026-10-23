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
        q: '¿Tengo que renovar mis documentos?',
        a: [
          'Sí. Tu certificado de antecedentes y tu hoja de vida del conductor deben estar vigentes durante todo el contrato. Cada 6 meses te pediremos actualizarlos desde la app. Si vencen, el auto se bloquea hasta que los actualices y el arriendo sigue corriendo.',
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
          'El proceso tiene 5 etapas:',
          {
            list: [
              'Postula (día 1): completas tus datos y la encuesta de perfil',
              'Evaluación (día 1–2): revisamos tus documentos y antecedentes',
              'Entrevista (día 2–3): nos conocemos y resolvemos tus dudas',
              'Onboarding (día 3–4): firmas el contrato y te capacitamos en la app',
              'Entrega (día 4): recibes tu auto y empiezas a generar',
            ],
          },
        ],
      },
      {
        q: '¿Cuánto tiempo demora el proceso hasta recibir el auto?',
        a: [
          'Alrededor de 4 días desde que postulas, según disponibilidad de autos y lo rápido que completes cada paso.',
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
          'MoveCar tiene cinco planes de arriendo, según el tipo de vehículo y el turno',
          {
            list: [
              'MoveElectric AM (eléctrico, turno diurno): horario 06:00 a 18:00 hrs — 2,5 UF/semana',
              'MoveElectric PM (eléctrico, turno vespertino y nocturno): horario 18:00 a 06:00 hrs — 3,9 UF/semana',
              'MoveGas AM (bencinero, turno diurno): horario 06:00 a 18:00 hrs — 1,9 UF/semana',
              'MoveGas PM (bencinero, turno vespertino y nocturno): horario 18:00 a 06:00 hrs — 2,9 UF/semana',
              'Full Gas (bencinero, 24 horas) — 4,9 UF/semana',
            ],
          },
        ],
      },
      {
        q: '¿Hay un tiempo mínimo de arriendo?',
        a: [
          'Sí. La permanencia mínima es de 12 semanas. Si terminas antes, se aplica la multa por término anticipado del contrato, con descuento si reasignamos el auto a otro conductor.',
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
              'Deducible por siniestro: 10 UF por evento, como tope máximo',
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
          'Sí, puedes operar en otras plataformas autorizadas, pero al menos el 60% de tu tiempo de operación debe ser en Uber, medido en períodos de 4 semanas. No está permitido usar el auto para carga ni para servicios distintos al transporte de pasajeros.',
        ],
      },
      {
        q: '¿El kilometraje tiene límite?',
        a: [
          'No. El valor por km se cobra solo hasta el tope semanal de tu plan: 1.100 km en turno AM y 1.200 km en turno PM; sobre ese tope no pagas variable. Por telemetría revisamos usos que superen en más de 30% el promedio de la flota.',
        ],
      },
      {
        q: '¿Puedo hacer viajes hacia o desde el aeropuerto?',
        a: [
          'No, salvo autorización expresa de MoveCar. Mientras no esté operativo el Registro de la Ley N° 21.553, los viajes al aeropuerto tienen alto riesgo de fiscalización y retención del auto. Si el auto es retenido en uno de esos viajes, el arriendo sigue corriendo y los costos de multa, grúa, bodegaje y recuperación son de tu cargo.',
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
          'La garantía es de $350.000. Las condiciones de pago se evalúan caso a caso.',
          'Además, firmas un pagaré complementario por hasta 60 UF (90 UF en el plan Full Gas), que respalda las obligaciones del contrato. Solo se cobra si quedan deudas impagas 15 días después de tu Liquidación Final de Salida.',
        ],
      },
      {
        q: '¿Me devuelven la garantía cuando termino el contrato?',
        a: [
          'Sí. Al devolver el auto emitimos tu Liquidación Final de Salida y te devolvemos la garantía descontando lo que quede pendiente: multas, TAG, deducibles o daños. Si hay cargos que todavía no se pueden calcular, como multas que aún no llegan, retenemos solo el monto estimado de esos cargos y te devolvemos el resto cuando se conozcan.',
        ],
      },
      {
        q: '¿Cuándo y cómo recibo mi pago semanal?',
        a: [
          'Cada semana MoveCar emite una liquidación detallada. Si el saldo es positivo (tus ingresos superan los descuentos), el depósito se realiza el jueves en tu cuenta bancaria. Si el saldo es negativo, tienes hasta el martes de la semana siguiente para regularizar el pago.',
        ],
      },
      {
        q: '¿Qué se descuenta de mis ingresos?',
        a: [
          'De tus ingresos brutos se descuentan en orden de prioridad:',
          {
            list: [
              'Canon de arriendo semanal',
              'Multas contractuales (velocidad u otras)',
              'Déficits de períodos anteriores',
              'Comisión de administración MOVECOLLECT (1% de tu ingreso, neto de las comisiones de la plataforma)',
              'Multas de tránsito',
              'TAG y peajes',
              'Deducibles de seguros u otros cargos asociados al uso del vehículo',
            ],
          },
        ],
      },
      {
        q: '¿Qué pasa si mis ingresos no alcanzan para cubrir el arriendo?',
        a: [
          'Queda un saldo pendiente que debes pagar a más tardar el martes de la semana siguiente. La garantía no se usa para cubrir déficits mientras el contrato está vigente: se liquida solo al término. Si acumulas 4 semanas con saldo pendiente, seguidas o no, o $350.000 de deuda, es incumplimiento grave y puede terminar el contrato.',
        ],
      },
      {
        q: '¿Qué pasa si cobré muchos viajes en efectivo y Uber me quedó debiendo menos de lo que recibí?',
        a: [
          'Cuando haces muchos viajes en efectivo, recibes el dinero directo del pasajero en el momento. Sin embargo, Uber descuenta su comisión (tasa de servicio) de tus ingresos digitales. Si en una semana cobraste más en efectivo que lo que Uber te debe transferir, puede quedar un saldo pendiente con Uber — es decir, Uber ya no te deposita nada y tú "les debes" la comisión de esos viajes en efectivo.',
          {
            list: [
              'MoveCar recibe la información de tus ingresos desde Uber al cierre de cada semana',
              'Si hay un saldo pendiente con Uber, este se refleja como deuda en tu liquidación MoveCar',
              'Ese monto se suma a tu liquidación y debes pagarlo a más tardar el martes de la semana siguiente.',
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
          'No. MoveCar no cobra cuota de inscripción. Entras sin poner plata de tu bolsillo — solo la garantía, cuyas condiciones de pago se evalúan caso a caso.',
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
          'Sí, hasta 150 km. Si el viaje es por Uber, se cobra el valor por km de tu plan sobre los kilómetros de ida. Si es un viaje privado, se cobra el doble del valor por km, ida y vuelta, desde tu domicilio registrado. Para viajes sobre 150 km necesitas autorización previa de MoveCar.',
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
          'Debes informar a MoveCar de inmediato, apenas estés en condiciones, y además:',
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
          'Si la cobertura aplica, pagas un deducible de 10 UF por evento, como tope máximo. Si la reparación cuesta menos, pagas solo su costo. Puedes pagarlo en cuotas desde tus liquidaciones. Si el siniestro ocurre en una situación excluida (alcohol, fuga, uso no autorizado), respondes por el 100% de los daños.',
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
              'A las 208 semanas continuas: puedes comprar el vehículo a un valor preferente definido en tu contrato',
              'A las 260 semanas continuas: precio de compra de $100',
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
    title: 'App MoveCar',
    items: [
      {
        q: '¿Qué es la app MoveCar?',
        a: [
          'Es la app exclusiva para conductores MoveCar. Te acompaña en cada turno con información práctica sobre tus ingresos, el estado de tu liquidación, el rendimiento del vehículo y tu progreso hacia la opción de compra del auto.',
        ],
      },
      {
        q: '¿Qué puedo hacer desde la app?',
        a: [
          'La app tiene cuatro funciones principales:',
          {
            list: [
              'Ver tus ingresos: consulta cuánto llevas ganado hoy, esta semana y este mes, con el detalle de lo que se descuenta y lo que recibirás el jueves',
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
          'Ya está disponible. Te enviaremos el link directo de descarga en tu proceso de ingreso. Próximamente descargable desde App Store o Google Play.',
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
          'MoveCar cuenta con un equipo de soporte disponible a través de mesa de ayuda y WhatsApp. Para siniestros o urgencias, debes avisar de inmediato.',
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
          'MoveCar trata datos de identificación personal, contacto, habilitación legal (licencia, antecedentes), datos económicos y financieros, datos operacionales del vehículo y datos de telemetría (ubicación, velocidad, kilometraje). Todo conforme a la Política de Privacidad y la Ley N° 19.628 y la Ley N° 21.719, que entra en vigencia en diciembre de 2026.',
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
          'Sí. Tienes derecho a solicitar acceso, rectificación, supresión, oposición y portabilidad de tus datos (derechos PROSA conforme a la Ley N° 21.719, que entra en vigencia en diciembre de 2026). Puedes ejercerlos escribiendo a los canales oficiales de MoveCar.',
        ],
      },
    ],
  },
];
