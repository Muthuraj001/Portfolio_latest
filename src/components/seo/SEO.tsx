import { useEffect } from "react";
import { siteConfig } from "../../data/site";

interface SEOProps {
  title?: string;
  description?: string;
  slug?: string;
  type?: "website" | "profile" | "article";
}

export function SEO({
  title,
  description = siteConfig.description,
  slug = "",
  type = "website",
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.role}`;
  const canonicalUrl = `${siteConfig.url}/${slug}`;

  useEffect(() => {
    // 1. Update primary tab title
    document.title = fullTitle;

    // 2. Helper to manage meta tags
    const updateMetaTag = (attrName: string, attrVal: string, value: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    updateMetaTag("name", "description", description);
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("name", "twitter:title", fullTitle);
    updateMetaTag("name", "twitter:description", description);

    // 3. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Inject structural JSON-LD structured metadata for recruitment parsing
    let jsonLdScript = document.getElementById("json-ld-seo") as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.id = "json-ld-seo";
      jsonLdScript.type = "application/ld+json";
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": siteConfig.name,
      "jobTitle": "Full Stack & DevOps Engineer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance",
      },
      "url": siteConfig.url,
      "email": siteConfig.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India",
      },
      "sameAs": [siteConfig.github, siteConfig.linkedin, siteConfig.twitter],
    };

    jsonLdScript.text = JSON.stringify(structuredData);
  }, [fullTitle, description, canonicalUrl, type]);

  return null;
}
