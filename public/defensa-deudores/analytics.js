/* Analítica de landings Movecar: solo tras consentimiento explícito. */
(() => {
  const scriptNode = document.currentScript;
  const containerId = scriptNode?.dataset.gtmId || '';
  const campaign = scriptNode?.dataset.campaign || '';
  if (!/^GTM-[A-Z0-9]+$/.test(containerId) || !/^GD-(DEU|LAB)$/.test(campaign)) return;

  const consentKey = 'movecar_analytics_consent_v1';
  const path = window.location.pathname;
  const push = (event, details = {}) => {
    if (window.localStorage.getItem(consentKey) !== 'granted') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, campaign_code: campaign, landing_path: path, ...details });
  };
  const activate = () => {
    if (window.__movecarGtmActive) return;
    window.__movecarGtmActive = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(containerId);
    document.head.appendChild(tag);
    push('landing_view');
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('a[href*="whatsapp.com/send"],a[href*="wa.me/"]');
    if (!link) return;
    push('whatsapp_click', { cta_position: link.closest('.hero') ? 'hero' : 'final' });
  });
  document.querySelectorAll('.faqs details').forEach((faq, i) =>
    faq.addEventListener('toggle', () => {
      if (faq.open) push('faq_open', { faq_index: i + 1 });
    }),
  );
  let scrolled = false;
  window.addEventListener('scroll', () => {
    if (scrolled) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && window.scrollY / max >= .75) {
      scrolled = true;
      push('scroll_75');
    }
  }, { passive: true });

  let choice = null;
  try { choice = window.localStorage.getItem(consentKey); } catch { return; }
  if (choice === 'granted') { activate(); return; }
  if (choice === 'denied') return;
  const banner = document.createElement('section');
  banner.className = 'mc-analytics-consent';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Preferencias de analítica');
  const text = document.createElement('p');
  text.textContent = '¿Nos permites usar cookies de analítica para mejorar esta página? Puedes rechazar sin afectar tu postulación.';
  const actions = document.createElement('div');
  const decline = document.createElement('button');
  decline.type = 'button'; decline.textContent = 'Rechazar';
  const accept = document.createElement('button');
  accept.type = 'button'; accept.textContent = 'Aceptar analítica';
  decline.addEventListener('click', () => { window.localStorage.setItem(consentKey, 'denied'); banner.remove(); });
  accept.addEventListener('click', () => { window.localStorage.setItem(consentKey, 'granted'); banner.remove(); activate(); });
  actions.append(decline, accept);
  banner.append(text, actions);
  document.body.appendChild(banner);
})();
