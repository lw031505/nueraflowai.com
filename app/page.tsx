import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Process from "@/components/sections/Process";
import AboutSnippet from "@/components/sections/AboutSnippet";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import { FAQS, SITE } from "@/lib/content";
import { getFAQSchema, getPersonSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE.name} — AI Training & Consulting for Small Business`,
  description: SITE.description,
};

export default function Home() {
  const faqSchema = getFAQSchema(FAQS);
  const personSchema = getPersonSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Hero />
      <ServicesOverview />
      <Process />
      <AboutSnippet />
      <FAQ />
      <CTABanner />
    </>
  );
}
