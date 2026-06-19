"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero mb-4">
            Common Questions
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to know before booking a call.
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="rounded-xl border border-white/[0.07] bg-card overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold text-ink leading-snug">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-blue-400" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-muted leading-relaxed border-t border-white/[0.06] pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
