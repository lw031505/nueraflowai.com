import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Tips & Insights for Small Business",
  description: `Practical AI tips, tutorials, and insights for small business owners from ${SITE.founder} at ${SITE.name}. Coming soon.`,
};

const COMING_SOON_TOPICS = [
  "5 AI Tools Every Small Business Should Be Using in 2025",
  "How to Write Better Prompts for ChatGPT (Business Edition)",
  "Automate Your Email Responses with AI — Step by Step",
  "The Real ROI of AI for Small Businesses",
  "AI vs. Hiring: When to Use Each",
  "How to Train Your Team on AI Without Overwhelming Them",
];

export default function BlogPage() {
  return (
    <section className="pt-36 pb-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6">
            <Rss size={12} />
            Coming Soon
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
            The AI for Business Blog
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl mx-auto mb-16">
            Practical guides, tutorials, and insights to help small business owners use AI without the overwhelm. First posts dropping soon.
          </p>
        </AnimatedSection>

        {/* Preview topics */}
        <AnimatedSection delay={100}>
          <div className="text-left rounded-2xl bg-card border border-white/[0.07] p-8 mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Topics We&apos;re Covering</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMING_SOON_TOPICS.map((topic) => (
                <div key={topic} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-white/[0.05]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <p className="text-sm text-muted leading-snug">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-muted mb-6 text-sm">
            Want to be notified when we publish? Reach out directly.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
