import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="py-28 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-card to-cyan-500/5 p-12 sm:p-16 text-center">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
                Ready to Start?
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
                Let&apos;s talk about what AI can do for your business.
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                The first call is free. No pressure, no pitch — just a real conversation about where AI fits in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-base font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                >
                  Book a Free Strategy Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
