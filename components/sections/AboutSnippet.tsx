import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ABOUT, SITE } from "@/lib/content";

export default function AboutSnippet() {
  return (
    <section className="py-28 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto lg:mx-0 rounded-3xl bg-card border border-white/[0.07] overflow-hidden flex flex-col justify-end p-8">
                {/* Background glow */}
                <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl" />

                {/* Values */}
                <div className="relative z-10 flex flex-col gap-3">
                  {ABOUT.values.map((v) => (
                    <div key={v.title} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-white/[0.06]">
                      <CheckCircle2 size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-ink">{v.title}</p>
                        <p className="text-xs text-muted">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: text */}
          <AnimatedSection direction="right">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">About</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
                {ABOUT.headline}
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                {ABOUT.bio.slice(0, 2).map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                More about {SITE.founder} <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
