import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE, BUSINESS } from "../lib/config";
import { NATURE_MIST } from "../lib/destinations";

export function useSEO(title, description, options = {}) {
  const { pathname } = useLocation();
  const image = options.image || NATURE_MIST.gallery[0].src;
  const text = description || `${title}. ${BUSINESS.tagline} in Dandeli and Wayanad.`;
  useEffect(() => {
    document.title = title;
    const setMeta = (attribute, name, content) => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) { meta = document.createElement("meta"); meta.setAttribute(attribute, name); document.head.appendChild(meta); }
      meta.setAttribute("content", content);
    };
    const canonicalUrl = `${SITE.url}${pathname}`;
    const imageUrl = new URL(image, SITE.url).href;
    setMeta("name", "description", text);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", text);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", text);
    setMeta("name", "twitter:image", imageUrl);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = canonicalUrl;
  }, [title, text, pathname, image]);
}