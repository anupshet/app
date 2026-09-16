const GOOGLE_ADS_SEND_TO = "AW-18349153988/-9x_CNPtldkcEMS9x61E";

export function reportContactConversion(onComplete) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    onComplete?.();
    return;
  }

  let completed = false;
  const complete = () => {
    if (completed) return;
    completed = true;
    onComplete?.();
  };

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_SEND_TO,
    event_callback: complete,
    event_timeout: 1000,
  });

  if (onComplete) window.setTimeout(complete, 1100);
}