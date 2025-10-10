// utils/utm.js
export const UTM_KEYS = [
  "utm_source","utm_medium","utm_campaign","utm_term","utm_content",
  "gclid","fbclid","msclkid","dclid","wbraid","gbraid","li_fat_id",
  "ttclid","twclid","yclid","utm_id"
];

export function captureUTM() {
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  UTM_KEYS.forEach(k => {
    const v = params.get(k);
    if (v) utm[k] = v;
  });
  sessionStorage.setItem("utm_params", JSON.stringify(utm));
  return utm;
}

export function appendUTM(formData) {
  const savedUtm = JSON.parse(sessionStorage.getItem("utm_params") || "{}");
  UTM_KEYS.forEach(k => {
    formData.append(k, savedUtm[k] || "");
  });
}
