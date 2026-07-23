import { useEffect } from "react";

/**
 * Injects a JSON-LD script tag into <head>. Cleans up on unmount.
 * `id` prevents duplicates when navigating between routes.
 */
export function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return undefined;
    const scriptId = `jsonld-${id}`;
    let el = document.getElementById(scriptId);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = scriptId;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, [id, data]);
}
