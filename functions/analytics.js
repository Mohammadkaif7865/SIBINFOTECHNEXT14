// functions/analytics.js
// Consent-gated GA4/GTM event helpers.
// GTM (GTM-WSSFNZR) only loads after the visitor grants analytics consent
// (see public/cookie-consent.js). These helpers only push to dataLayer when
// consent has been granted, so no analytics data leaves the browser otherwise.

function hasConsent() {
  if (typeof window === "undefined") return false;

  const viaApi =
    typeof window.CookieConsent !== "undefined" &&
    typeof window.CookieConsent.get === "function" &&
    window.CookieConsent.get() === "granted";

  const viaCookie =
    typeof document !== "undefined" &&
    /(?:^|; )cookie_consent=granted(?:;|$)/.test(document.cookie);

  return viaApi || viaCookie;
}

export function pushEvent(eventName, params = {}) {
  if (!eventName) return;
  if (!hasConsent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}

export function trackLead(source) {
  pushEvent("generate_lead", { lead_source: source });
}

export function trackWhatsAppClick() {
  pushEvent("click_whatsapp");
}

export function trackCallClick() {
  pushEvent("click_call");
}
