import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = "https://hokuinsurance.lovable.app";
const DEFAULT_OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/snqyPX6evRdYNSFkjfzA8jCQ5gE3/social-images/social-1772499102914-Screenshot_2026-03-02_at_2.50.16_PM.webp";

const SEO = ({ title, description, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    const metaTags: Record<string, string> = {
      description,
      "og:title": title,
      "og:description": description,
      "og:url": fullCanonical,
      "og:image": image,
      "og:type": "website",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
      "twitter:card": "summary_large_image",
    };

    // Set or create meta tags
    Object.entries(metaTags).forEach(([key, value]) => {
      const isOg = key.startsWith("og:");
      const isTwitter = key.startsWith("twitter:");
      const attr = isOg ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    });

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    return () => {
      // Cleanup canonical on unmount so next page can set its own
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.remove();
    };
  }, [title, description, canonical, ogImage]);

  return null;
};

export default SEO;
