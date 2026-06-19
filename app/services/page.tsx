import Link from "next/link";
import { User, Users, Zap, ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTABanner from "@/components/sections/CTABanner";
import { SERVICES, SITE } from "@/lib/content";
import { getServicesSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — AI Coaching, Workshops & Consulting",
  description: `${SITE.name} offers 1-on-1 AI coaching, team workshops, and AI consulting for small business owners who want to implement AI without the confusion.`,
};

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={28} className="text-blue-400" />,
  users: <Users size={28} className="text-cyan-400" />,
  zap: <Zap size={28} className="text-blue-300" />,
};

export default function ServicesPage() {
  const schemas = getServicesSchema();

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Header */}
      <section className="pt-36 pb-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Services</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
              Find the Right Fit For Your Business
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Whether you&apos;re learning AI yourself, training your team, or need someone to build it into your systems — there&apos;s a path for you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="pb-28 px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} id={service.id}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                    {iconMap[service.icon]}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{service.tagline}</p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">{service.title}</h2>
                  <p className="text-muted text-lg leading-relaxed mb-8">{service.description}</p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {service.cta}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Card */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="rounded-2xl bg-card border border-white/[0.07] p-8 card-border">
                    <p className="text-sm font-semibold text-muted mb-4 uppercase tracking-wider">What&apos;s Included</p>
                    <ul className="flex flex-col gap-4">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-blue-400" />
                          </div>
                          <span className="text-sm text-muted leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
