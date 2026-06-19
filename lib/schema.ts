import { SITE, SERVICES } from "./content";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.png`,
    description: SITE.description,
    email: SITE.email,
    founder: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "AI Trainer & Consultant",
      worksFor: { "@type": "Organization", name: SITE.name },
    },
    sameAs: [],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "AI Trainer & Business Consultant",
    worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/about`,
    knowsAbout: [
      "Artificial Intelligence",
      "AI Tools for Business",
      "Business Process Automation",
      "AI Training and Coaching",
      "Small Business AI Implementation",
    ],
  };
}

export function getServicesSchema() {
  return SERVICES.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    serviceType: "AI Training and Consulting",
    areaServed: "United States",
  }));
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
