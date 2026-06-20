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
    sameAs: [
      "https://www.linkedin.com/in/lucaswagner-/",
    ],
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "AI Trainer & Business Consultant",
    description: "Lucas Wagner is an AI trainer and consultant who helps high-value service businesses implement AI. He is the founder of NuEraFlow AI.",
    worksFor: { "@type": "Organization", name: SITE.name, url: SITE.url },
    url: `${SITE.url}/about`,
    sameAs: [
      "https://www.linkedin.com/in/lucaswagner-/",
    ],
    knowsAbout: [
      "Artificial Intelligence for Business",
      "AI Tools for Service Businesses",
      "Business Process Automation",
      "AI Training and Coaching",
      "AI Implementation for Med Spas",
      "AI Implementation for Real Estate Agencies",
      "AI Implementation for Law Firms",
      "AI Implementation for Insurance Agencies",
      "AI Implementation for Financial Advisors",
      "ChatGPT for Business",
      "AI Workflow Automation",
      "Small Business AI Strategy",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    author: { "@type": "Person", name: SITE.founder },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/blog?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.png`,
    description: "AI coaching, team workshops, and consulting for high-value service businesses including med spas, real estate agencies, law firms, insurance agencies, and financial advisors.",
    email: SITE.email,
    founder: SITE.founder,
    foundingDate: SITE.founded,
    areaServed: "United States",
    serviceType: [
      "AI Coaching",
      "AI Team Workshops",
      "AI Business Consulting",
      "AI Implementation",
      "AI Training",
    ],
    sameAs: [
      "https://www.linkedin.com/in/lucaswagner-/",
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

export function getBlogPostSchema(title: string, description: string, date: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: SITE.founder,
      url: `${SITE.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/assets/logo.png` },
    },
    url: `${SITE.url}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/blog/${slug}` },
  };
}
