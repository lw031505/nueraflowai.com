import AnimatedSection from "@/components/ui/AnimatedSection";
import { PROCESS_STEPS } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">The Process</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero mb-4">
            How It Works
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Simple, clear, and built around your business. No confusing frameworks.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 120}>
                <div className="flex flex-col items-center text-center p-6">
                  {/* Number bubble */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <span className="text-lg font-black text-white">{step.num}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
