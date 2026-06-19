import Link from "next/link";
import { User, Users, Zap, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={22} className="text-blue-400" />,
  users: <Users size={22} className="text-cyan-400" />,
  zap: <Zap size={22} className="text-blue-300" />,
};

export default function ServicesOverview() {
  return (
    <section id="services" className="py-28 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">What We Offer</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero mb-4">
            Three Ways to Make AI Work For You
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need personal coaching, team training, or someone to build and implement AI systems in your business — we have a path for you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 100}>
              <div className="group h-full flex flex-col p-8 rounded-2xl bg-card border border-white/[0.06] card-border card-hover-border hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-2">
                  {service.tagline}
                </p>
                <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 group-hover:gap-2.5 transition-all duration-200"
                >
                  {service.cta} <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
