// 80+ SEO + GEO targeted topics for high-value service businesses.
// The cron job rotates through these, never repeating a published slug.

export interface Topic {
  keyword: string;       // The search intent / topic to write about
  slug: string;          // URL-friendly identifier
  audience: string;      // Who this post speaks to
  type: "reactive" | "predictive";
}

export const TOPICS: Topic[] = [
  // ── Med Spas & Aesthetics ────────────────────────────────────────────
  { keyword: "AI tools for med spas", slug: "ai-tools-for-med-spas", audience: "med spa owners", type: "reactive" },
  { keyword: "How to automate med spa client follow-ups with AI", slug: "automate-med-spa-client-followups-ai", audience: "med spa owners", type: "reactive" },
  { keyword: "ChatGPT for med spa marketing", slug: "chatgpt-med-spa-marketing", audience: "med spa marketing managers", type: "reactive" },
  { keyword: "AI appointment scheduling for aesthetic clinics", slug: "ai-appointment-scheduling-aesthetic-clinics", audience: "aesthetic clinic owners", type: "reactive" },
  { keyword: "How med spas use AI to retain more clients", slug: "med-spa-ai-client-retention", audience: "med spa owners", type: "reactive" },
  { keyword: "AI-powered consultation intake forms for med spas", slug: "ai-consultation-intake-med-spas", audience: "med spa owners", type: "reactive" },
  { keyword: "Why every med spa will have an AI receptionist by 2027", slug: "med-spa-ai-receptionist-2027", audience: "forward-thinking med spa owners", type: "predictive" },
  { keyword: "AI review management for aesthetic clinics", slug: "ai-review-management-aesthetic-clinics", audience: "aesthetic clinic owners", type: "reactive" },

  // ── Real Estate ──────────────────────────────────────────────────────
  { keyword: "AI tools for real estate agencies", slug: "ai-tools-real-estate-agencies", audience: "real estate agency owners", type: "reactive" },
  { keyword: "How real estate agents use ChatGPT to close more deals", slug: "real-estate-chatgpt-close-deals", audience: "real estate agents", type: "reactive" },
  { keyword: "AI follow-up automation for real estate agents", slug: "ai-followup-automation-real-estate", audience: "real estate agents", type: "reactive" },
  { keyword: "AI-generated property listings — is it worth it?", slug: "ai-generated-property-listings", audience: "real estate agents", type: "reactive" },
  { keyword: "How to use AI to nurture real estate leads", slug: "ai-lead-nurturing-real-estate", audience: "real estate agents", type: "reactive" },
  { keyword: "AI for real estate market analysis", slug: "ai-real-estate-market-analysis", audience: "real estate investors and agents", type: "reactive" },
  { keyword: "How AI agents will close real estate deals without human follow-up by 2026", slug: "ai-agents-real-estate-deals-2026", audience: "real estate agency owners", type: "predictive" },
  { keyword: "AI CRM tools for real estate agencies", slug: "ai-crm-tools-real-estate", audience: "real estate agency owners", type: "reactive" },

  // ── Law Firms ────────────────────────────────────────────────────────
  { keyword: "AI for small law firms — what actually works", slug: "ai-for-small-law-firms", audience: "small law firm owners", type: "reactive" },
  { keyword: "How lawyers use AI to save 10 hours a week", slug: "lawyers-ai-save-time", audience: "attorneys and law firm owners", type: "reactive" },
  { keyword: "AI document review for small law firms", slug: "ai-document-review-law-firms", audience: "attorneys", type: "reactive" },
  { keyword: "ChatGPT for legal research — a practical guide", slug: "chatgpt-legal-research-guide", audience: "attorneys", type: "reactive" },
  { keyword: "AI client intake automation for law firms", slug: "ai-client-intake-law-firms", audience: "law firm administrators", type: "reactive" },
  { keyword: "The AI stack every law firm will run in 2026", slug: "ai-stack-law-firms-2026", audience: "forward-thinking attorneys", type: "predictive" },

  // ── Insurance Agencies ───────────────────────────────────────────────
  { keyword: "How insurance agencies use AI to close more policies", slug: "ai-insurance-agencies-close-policies", audience: "insurance agency owners", type: "reactive" },
  { keyword: "AI lead follow-up for insurance agents", slug: "ai-lead-followup-insurance-agents", audience: "insurance agents", type: "reactive" },
  { keyword: "ChatGPT for insurance policy explanations", slug: "chatgpt-insurance-policy-explanations", audience: "insurance agents", type: "reactive" },
  { keyword: "AI-powered quote generation for insurance agencies", slug: "ai-quote-generation-insurance", audience: "insurance agency owners", type: "reactive" },
  { keyword: "How AI reduces customer churn for insurance agencies", slug: "ai-reduce-churn-insurance", audience: "insurance agency owners", type: "reactive" },
  { keyword: "AI prospecting tools for independent insurance agents", slug: "ai-prospecting-insurance-agents", audience: "independent insurance agents", type: "reactive" },

  // ── Financial Advisors ───────────────────────────────────────────────
  { keyword: "AI tools for financial advisors", slug: "ai-tools-financial-advisors", audience: "financial advisors", type: "reactive" },
  { keyword: "How financial advisors use AI to prepare client meetings", slug: "ai-financial-advisor-client-meetings", audience: "financial advisors", type: "reactive" },
  { keyword: "AI for wealth management firms", slug: "ai-wealth-management-firms", audience: "wealth management firm owners", type: "reactive" },
  { keyword: "ChatGPT for financial planning — what advisors need to know", slug: "chatgpt-financial-planning-advisors", audience: "financial advisors", type: "reactive" },
  { keyword: "AI client communication tools for financial advisors", slug: "ai-client-communication-financial-advisors", audience: "financial advisors", type: "reactive" },

  // ── Marketing Agencies ───────────────────────────────────────────────
  { keyword: "How marketing agencies are using AI to scale", slug: "marketing-agencies-using-ai-scale", audience: "marketing agency owners", type: "reactive" },
  { keyword: "AI content creation tools for marketing agencies", slug: "ai-content-creation-marketing-agencies", audience: "marketing agency owners", type: "reactive" },
  { keyword: "How to use AI to deliver better results for clients", slug: "ai-better-results-agency-clients", audience: "agency owners", type: "reactive" },
  { keyword: "AI reporting automation for marketing agencies", slug: "ai-reporting-automation-agencies", audience: "marketing agency owners", type: "reactive" },
  { keyword: "The AI tools every marketing agency should use", slug: "ai-tools-marketing-agencies-must-use", audience: "marketing agency owners", type: "reactive" },
  { keyword: "How AI will reshape the marketing agency model by 2027", slug: "ai-reshape-marketing-agency-2027", audience: "forward-thinking agency owners", type: "predictive" },

  // ── Dental & Healthcare ──────────────────────────────────────────────
  { keyword: "AI tools for dental practices", slug: "ai-tools-dental-practices", audience: "dental practice owners", type: "reactive" },
  { keyword: "How dental offices use AI to reduce no-shows", slug: "ai-dental-reduce-no-shows", audience: "dental office managers", type: "reactive" },
  { keyword: "AI patient communication for healthcare practices", slug: "ai-patient-communication-healthcare", audience: "healthcare practice owners", type: "reactive" },
  { keyword: "AI scheduling for chiropractic clinics", slug: "ai-scheduling-chiropractic-clinics", audience: "chiropractors", type: "reactive" },

  // ── General High-Value Service Business ─────────────────────────────
  { keyword: "AI client intake automation for service businesses", slug: "ai-client-intake-automation-service-businesses", audience: "service business owners", type: "reactive" },
  { keyword: "How to use AI to handle customer follow-ups automatically", slug: "ai-customer-followups-automation", audience: "service business owners", type: "reactive" },
  { keyword: "AI-powered lead nurturing for service businesses", slug: "ai-lead-nurturing-service-businesses", audience: "service business owners", type: "reactive" },
  { keyword: "How to use AI to write better proposals", slug: "ai-write-better-proposals", audience: "service business owners", type: "reactive" },
  { keyword: "AI onboarding automation for service businesses", slug: "ai-onboarding-automation-service-businesses", audience: "service business owners", type: "reactive" },
  { keyword: "How AI saves service businesses 15 hours a week", slug: "ai-saves-service-businesses-15-hours", audience: "service business owners", type: "reactive" },
  { keyword: "What AI can and cannot do for your service business", slug: "what-ai-can-cannot-do-service-business", audience: "skeptical service business owners", type: "reactive" },
  { keyword: "How to start using AI in your business this week", slug: "start-using-ai-business-this-week", audience: "service business owners new to AI", type: "reactive" },
  { keyword: "AI vs hiring: when to use each for your service business", slug: "ai-vs-hiring-service-business", audience: "growing service business owners", type: "reactive" },
  { keyword: "The biggest AI mistakes service business owners make", slug: "ai-mistakes-service-business-owners", audience: "service business owners", type: "reactive" },
  { keyword: "How to train your team to use AI without the overwhelm", slug: "train-team-ai-without-overwhelm", audience: "service business owners with teams", type: "reactive" },
  { keyword: "AI phone call handling for service businesses", slug: "ai-phone-call-handling-service-businesses", audience: "service business owners", type: "reactive" },
  { keyword: "How AI helps service businesses compete with larger companies", slug: "ai-compete-larger-companies", audience: "small service business owners", type: "reactive" },
  { keyword: "AI-powered email marketing for service businesses", slug: "ai-email-marketing-service-businesses", audience: "service business owners", type: "reactive" },
  { keyword: "What happens to service businesses that ignore AI", slug: "what-happens-ignore-ai-service-business", audience: "service business owners", type: "reactive" },

  // ── Predictive / Forward-Looking ────────────────────────────────────
  { keyword: "Voice AI for service business phone calls — what is coming in 2026", slug: "voice-ai-service-business-2026", audience: "service business owners", type: "predictive" },
  { keyword: "How AI agents will replace repetitive tasks in 2026", slug: "ai-agents-replace-repetitive-tasks-2026", audience: "forward-thinking business owners", type: "predictive" },
  { keyword: "Why every high-value service business will need an AI system by 2027", slug: "ai-system-required-service-business-2027", audience: "service business owners", type: "predictive" },
  { keyword: "The AI tools that do not exist yet but will change service businesses", slug: "future-ai-tools-service-businesses", audience: "early-adopter business owners", type: "predictive" },
  { keyword: "How AI will change client acquisition for service businesses in 2026", slug: "ai-client-acquisition-2026", audience: "service business owners", type: "predictive" },
  { keyword: "Preparing your service business for the AI economy", slug: "prepare-service-business-ai-economy", audience: "forward-thinking service business owners", type: "predictive" },

  // ── How-To / Educational ─────────────────────────────────────────────
  { keyword: "How to use ChatGPT to write client proposals in minutes", slug: "chatgpt-write-client-proposals", audience: "service business owners", type: "reactive" },
  { keyword: "How to use AI to respond to Google reviews automatically", slug: "ai-respond-google-reviews", audience: "local service business owners", type: "reactive" },
  { keyword: "How to build an AI-powered FAQ for your service business", slug: "ai-powered-faq-service-business", audience: "service business owners", type: "reactive" },
  { keyword: "How to use AI to create social media content for your business", slug: "ai-social-media-content-business", audience: "service business owners", type: "reactive" },
  { keyword: "The best free AI tools for service businesses in 2025", slug: "best-free-ai-tools-service-businesses-2025", audience: "budget-conscious service business owners", type: "reactive" },
  { keyword: "How to automate your most repetitive business task with AI", slug: "automate-repetitive-business-task-ai", audience: "service business owners", type: "reactive" },
  { keyword: "A beginner's guide to AI for high-value service businesses", slug: "beginners-guide-ai-service-businesses", audience: "service business owners new to AI", type: "reactive" },
  { keyword: "How to use Zapier and AI to automate your service business", slug: "zapier-ai-automate-service-business", audience: "service business owners", type: "reactive" },

  // ── Mortgage / Accounting ────────────────────────────────────────────
  { keyword: "AI tools for mortgage brokers", slug: "ai-tools-mortgage-brokers", audience: "mortgage brokers", type: "reactive" },
  { keyword: "How accountants use AI to save time and serve more clients", slug: "ai-accountants-save-time", audience: "accountants and CPA firms", type: "reactive" },
  { keyword: "AI for bookkeeping firms — what actually works", slug: "ai-bookkeeping-firms", audience: "bookkeeping firm owners", type: "reactive" },
];
