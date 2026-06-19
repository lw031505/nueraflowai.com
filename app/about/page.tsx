import Link from "next/link";
import { ArrowRight, Lightbulb, Target, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
import { ABOUT, SITE } from "@/lib/content";
import { getPersonSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${SITE.founder} — AI Trainer & Consultant`,
  description: `${SITE.founder} is an AI trainer and consultant helping small business owners implement AI without the confusion. Founded ${SITE.name} in ${SITE.founded}.`,
};

const valueIcons = [
  <Lightbulb key="lightbulb" size={20} className="text-blue-400" />,
  <Target key="target" size={20} className="text-cyan-400" />,
  <Heart key="heart" size={20} className="text-blue-300" />,
];

export default function AboutPage() {
  const schema = getPersonSchema();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">About</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
              {ABOUT.headline}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile card */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl bg-card border border-white/[0.07] p-8 text-center sticky top-24">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-3xl font-black text-white mx-auto mb-4 shadow-xl shadow-blue-500/30">
                  LW
                </div>
                <h2 className="text-lg font-bold text-ink">{SITE.founder}</h2>
                <p className="text-sm text-muted mt-1">AI Trainer & Consultant</p>
                <p className="text-sm text-muted mt-0.5">Founder, {SITE.name}</p>
                <div className="mt-6 pt-6 border-t border-white/[0.06] text-left">
                  <div className="flex flex-col gap-3 text-xs text-muted">
                    <div className="flex justify-between">
                      <span>Founded</span>
                      <span className="text-ink font-medium">May {SITE.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus</span>
                      <span className="text-ink font-medium">Small Business AI</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format</span>
                      <span className="text-ink font-medium">Virtual & In-Person</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 block w-full py-3 text-sm font-bold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
                >
                  Book a Call
                </Link>
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="flex flex-col gap-6">
                {ABOUT.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Values */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {ABOUT.values.map((v, i) => (
                    <div key={v.title} className="p-5 rounded-xl bg-card border border-white/[0.07] flex flex-col gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        {valueIcons[i]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{v.title}</p>
                        <p className="text-xs text-muted mt-0.5">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-2">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
