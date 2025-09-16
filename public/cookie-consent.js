// public/cookie-consent.js
(function () {
  var CONSENT_COOKIE = "cookie_consent";
  var MAX_AGE_DAYS = 30; // tweak as you like

  function getConsent() {
    var m = document.cookie.match(
      new RegExp("(?:^|; )" + CONSENT_COOKIE + "=([^;]*)")
    );
    if (!m) return "unset";
    var v = decodeURIComponent(m[1]);
    return v === "granted" || v === "denied" ? v : "unset";
  }

  function setConsent(val) {
    var maxAge = 60 * 60 * 24 * MAX_AGE_DAYS;
    document.cookie =
      CONSENT_COOKIE +
      "=" +
      val +
      "; Path=/; Max-Age=" +
      maxAge +
      "; SameSite=Lax";
    window.dispatchEvent(new CustomEvent("consent-changed", { detail: val }));
  }

  function activateInertScripts() {
    var inert = document.querySelectorAll(
      'script[type="text/plain"][data-consent="analytics"]'
    );
    inert.forEach(function (oldScript) {
      var s = document.createElement("script");
      Array.from(oldScript.attributes).forEach(function (attr) {
        if (
          attr.name === "type" ||
          attr.name === "data-consent" ||
          attr.name === "data-src"
        )
          return;
        s.setAttribute(attr.name, attr.value);
      });
      var dataSrc = oldScript.getAttribute("data-src");
      if (dataSrc) {
        s.src = dataSrc;
        s.async = true;
      } else {
        s.text = oldScript.innerHTML;
      }
      if (oldScript.parentNode) oldScript.parentNode.insertBefore(s, oldScript);
      oldScript.remove();
    });
  }

  // ---------- tiny UI helpers ----------
  function makeStyles(el, styles) {
    for (var k in styles) el.style[k] = styles[k];
  }
  function makeButton(text, styleObj) {
    var btn = document.createElement("button");
    btn.textContent = text;
    btn.type = "button";
    makeStyles(
      btn,
      Object.assign(
        {
          padding: "10px 14px",
          borderRadius: "6px",
          border: "1px solid transparent",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "1",
        },
        styleObj || {}
      )
    );
    return btn;
  }
  function makeParagraph(text) {
    var p = document.createElement("p");
    p.textContent = text;
    makeStyles(p, { margin: "0 0 12px 0", color: "#111" });
    return p;
  }

  function makeOverlay() {
    var overlay = document.createElement("div");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-live", "polite");
    overlay.setAttribute("aria-modal", "true");
    overlay.id = "cookie-consent";
    makeStyles(overlay, {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,.45)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
    var card = document.createElement("div");
    makeStyles(card, {
      width: "100%",
      maxWidth: "640px",
      background: "#fff",
      color: "#111",
      borderRadius: "10px",
      boxShadow: "0 20px 40px rgba(0,0,0,.25)",
      padding: "24px",
    });
    overlay.appendChild(card);
    return { overlay: overlay, card: card };
  }

  function openSettings(onSave, onCancel, initial) {
    var modal = document.createElement("div");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.id = "cookie-settings";
    makeStyles(modal, {
      position: "fixed",
      inset: "0",
      background: "rgba(0,0,0,.45)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });

    var card = document.createElement("div");
    makeStyles(card, {
      width: "100%",
      maxWidth: "560px",
      background: "#fff",
      color: "#111",
      borderRadius: "10px",
      boxShadow: "0 20px 40px rgba(0,0,0,.25)",
      padding: "24px",
    });

    var h = document.createElement("h3");
    h.textContent = "Cookie & analytics settings";
    makeStyles(h, { margin: "0 0 12px 0", fontSize: "20px" });

    var p = makeParagraph(
      "Choose what to enable. Essential cookies are always on so the site works."
    );
    var grp = document.createElement("div");
    makeStyles(grp, { display: "grid", gap: "10px", marginTop: "8px" });

    var nec = document.createElement("label");
    nec.innerHTML =
      '<input type="checkbox" checked disabled> Strictly necessary (always on)';
    makeStyles(nec, {
      border: "1px solid #e5e7eb",
      padding: "12px",
      borderRadius: "8px",
    });

    var analytics = document.createElement("label");
    analytics.htmlFor = "analytics-toggle";
    analytics.textContent = " Analytics (GTM + Microsoft Clarity)";
    var aBox = document.createElement("input");
    aBox.type = "checkbox";
    aBox.id = "analytics-toggle";
    aBox.checked = !!initial;
    analytics.prepend(aBox);
    makeStyles(analytics, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "1px solid #e5e7eb",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
    });

    grp.appendChild(nec);
    grp.appendChild(analytics);

    var actions = document.createElement("div");
    makeStyles(actions, {
      marginTop: "16px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    });

    var save = makeButton("Save preferences", {
      background: "#005c5c",
      color: "#fff",
      borderColor: "#005c5c",
    });
    var cancel = makeButton("Cancel", {
      background: "#fff",
      color: "#111",
      borderColor: "#d1d5db",
    });

    save.addEventListener("click", function () {
      onSave({ analytics: aBox.checked });
      modal.remove();
    });
    cancel.addEventListener("click", function () {
      onCancel();
      modal.remove();
    });

    actions.appendChild(save);
    actions.appendChild(cancel);

    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(grp);
    card.appendChild(actions);
    modal.appendChild(card);
    document.body.appendChild(modal);
  }

  function makeBanner() {
    var ui = makeOverlay(),
      overlay = ui.overlay,
      card = ui.card;

    var h = document.createElement("h3");
    h.textContent = "About cookies and analytics on this site";
    makeStyles(h, { margin: "0 0 12px 0", fontSize: "22px" });

    var p1 = makeParagraph(
      "We use cookies and analytics tools, including Microsoft Clarity, to understand how visitors interact with our website. This helps us improve site performance, enhance user experience, and deliver more relevant content and marketing."
    );
    var p2 = makeParagraph(
      "Certain data such as clicks, scrolls, and navigation patterns may be collected, but personal information like names, emails, or payment details is never captured."
    );

    var learn = document.createElement("a");
    learn.href = "/privacy-policy";
    learn.target = "_blank";
    learn.rel = "noopener";
    learn.textContent = "Learn more";
    makeStyles(learn, { color: "#0a66c2", textDecoration: "underline" });

    var actions = document.createElement("div");
    makeStyles(actions, {
      marginTop: "16px",
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    });

    // Accept = red
    var allowAll = makeButton("Allow all cookies & analytics", {
      background: "#dc2626",
      color: "#fff",
      borderColor: "#dc2626",
    });
    var denyAll = makeButton("Deny all", {
      background: "#333",
      color: "#fff",
      borderColor: "#333",
    });
    var settingsBtn = makeButton("Cookie & analytics settings", {
      background: "#fff",
      color: "#111",
      borderColor: "#d1d5db",
    });

    denyAll.addEventListener("click", function () {
      setConsent("denied");
      overlay.remove();
    });
    allowAll.addEventListener("click", function () {
      setConsent("granted");
      activateInertScripts();
      overlay.remove();
    });

    settingsBtn.addEventListener("click", function () {
      openSettings(
        function onSave(prefs) {
          if (prefs.analytics) {
            setConsent("granted");
            activateInertScripts();
          } else {
            setConsent("denied");
          }
          overlay.remove();
        },
        function onCancel() {
          /* keep the banner open */
        },
        false // initial analytics toggle (off by default)
      );
    });

    actions.appendChild(allowAll);
    actions.appendChild(denyAll);
    actions.appendChild(settingsBtn);
    card.appendChild(h);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(learn);
    card.appendChild(actions);
    document.body.appendChild(overlay);
  }

  function init() {
    var consent = getConsent();
    if (consent === "granted") {
      activateInertScripts();
    } else if (consent === "unset") {
      if (document.readyState === "loading")
        document.addEventListener("DOMContentLoaded", makeBanner);
      else makeBanner();
    }
    window.addEventListener("consent-changed", function (e) {
      if (e.detail === "granted") activateInertScripts();
    });

    // expose helpers (optional)
    window.CookieConsent = {
      get: getConsent,
      grant: function () {
        setConsent("granted");
        activateInertScripts();
      },
      deny: function () {
        setConsent("denied");
      },
      reset: function () {
        document.cookie = CONSENT_COOKIE + "=; Path=/; Max-Age=0; SameSite=Lax";
        var b = document.getElementById("cookie-consent");
        if (b) b.remove();
        makeBanner();
      },
    };
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  )
    setTimeout(init, 0);
  else document.addEventListener("DOMContentLoaded", init);
})();
