import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name}`,
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold gradient-text-hero mb-2">Terms of Service</h1>
        <p className="text-muted text-sm mb-12">Last updated: June 2025</p>

        <div className="flex flex-col gap-10 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Services</h2>
            <p>{SITE.name} provides AI coaching, team workshops, and AI consulting services. All services are subject to availability and mutual agreement between {SITE.founder} and the client.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Payment</h2>
            <p>Payment terms for services are agreed upon prior to commencement of work. Rates and packages are discussed during the initial strategy call.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Intellectual Property</h2>
            <p>All materials, frameworks, and content provided by {SITE.name} remain the intellectual property of {SITE.name} unless otherwise agreed in writing. Clients may use materials for their own business purposes.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Limitation of Liability</h2>
            <p>{SITE.name} provides guidance and education. Results from implementing AI tools and strategies vary based on individual business circumstances. We do not guarantee specific outcomes.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Contact</h2>
            <p>Questions about these terms? Reach us at <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">{SITE.email}</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
