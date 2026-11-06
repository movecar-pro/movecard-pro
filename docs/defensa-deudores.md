# Landing Grupo Defensa × Movecar.pro

La página `src/pages/defensa-deudores.astro` genera `/defensa-deudores` dentro del frontend Astro existente. Los textos están en `src/lib/defensa-content.js` y los recursos en `public/defensa-deudores/`.

Los dos CTA se renderizan en HTML, sin depender de JavaScript, con el mismo enlace a `https://api.whatsapp.com/send`, teléfono `56963228508` y mensaje `¡Hola! 😊 me interesa postular a Movecar.pro. Vengo de Defensa Deudores.` El texto se codifica con `encodeURIComponent`.

El PDF de referencia aporta el contenido comercial, el logo de Defensa Deudores y la fotografía. La política de privacidad usa el contenido vigente del frontend en un desplegable accesible. Las preguntas frecuentes también usan desplegables HTML nativos.

## Publicación

Repositorio: `movecar-pro/movecard-pro`. Proyecto Vercel: `movecard-pro` (`prj_0gTBCHl2RMeztPobpqqIb7m7EDa3`). El dominio `www.movecar.pro` está verificado y asignado a producción. No se necesita cambiar DNS, crear otro proyecto ni agregar redirects o rewrites para esta ruta. Se publica mediante el despliegue de la rama `main` del proyecto existente.

## Validación

- `ASTRO_TELEMETRY_DISABLED=1 npm run build`.
- ESLint de los dos archivos nuevos y formato Prettier.
- Revisión de los dos enlaces en el HTML y en navegador.
- Navegador a 1280, 390 y 320 px; sin desbordamiento horizontal.
- Imágenes cargadas, FAQ abre y consola sin errores ni advertencias.

Rollback: revertir el commit de integración y desplegar nuevamente `main`.
