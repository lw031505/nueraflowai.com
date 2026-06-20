import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import * as LucideIcons from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { INDUSTRIES, getIndustryBySlug } from "@/lib/industries";
import { SITE } from "@/lib/content";
import { getFAQSchema } from "@/lib/schema";
import type { Metadata } from "next";

interface Props { params: { industry: string } }

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) return {};
  return {
    title: industry.headline,
    description: industry.description,
    openGraph: { title: industry.headline, description: industry.description },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const pascalName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const LIcon = (LucideIcons as any)[pascalName];
  if (!LIcon) return null;
  return <LIcon size={size} className={className} />;
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustryBySlug(params.industry);
  if (!industry) notFound();

  const faqSchema = getFAQSchema(industry.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-36 pb-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-cyan-500/8 blur-[80px]" />
        </div>
        <div className="relative max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6 uppercase tracking-wide">
              AI for {industry.name}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight gradient-text-hero leading-tight mb-6">
              {industry.headline}
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {industry.description}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300"
            >
              {industry.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-ink mb-3">Sound familiar?</h2>
            <p className="text-muted">These are the problems we hear most from {industry.name.toLowerCase()}.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.painPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-white/[0.07]">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ChevronDown size={12} className="text-red-400 rotate-180" />
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{point}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What We Build</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">
              How AI Solves These Problems
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.useCases.map((uc, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="h-full p-7 rounded-2xl bg-card border border-white/[0.07] card-border card-hover-border hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                    <Icon name={uc.icon} size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{uc.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for this industry */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-ink mb-6">How We Work With {industry.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left mt-10">
              {[
                { num: "01", title: "Free Strategy Call", desc: `We learn your business, your current tools, and where ${industry.name.toLowerCase()} spend the most time.` },
                { num: "02", title: "Custom AI Plan", desc: "You get a clear roadmap — what to implement first, what tools to use, and what to skip." },
                { num: "03", title: "Build & Train", desc: "We implement the workflows and train your team to manage them. Then hand off the keys." },
              ].map((step, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-card border border-white/[0.07]">
                  <span className="text-2xl font-black gradient-text">{step.num}</span>
                  <h3 className="text-sm font-bold text-ink">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-ink">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="flex flex-col gap-3">
            {industry.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl bg-card border border-white/[0.07]">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-ink">{faq.q}</p>
                  </div>
                  <p className="text-sm text-muted leading-relaxed pl-6">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="relative p-12 rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-card to-transparent">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative">
                <h2 className="text-3xl font-extrabold gradient-text-hero mb-4">
                  Ready to see AI work in your {industry.name.toLowerCase().split(" ")[0]}?
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  Book a free 30-minute call with {SITE.founder}. No pitch — just a real conversation about what AI can do for your specific business.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {industry.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
