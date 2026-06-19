import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Message Received",
  description: `Your message has been received. ${SITE.founder} will be in touch within 24 hours.`,
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={36} className="text-blue-400" />
        </div>
        <h1 className="text-4xl font-extrabold gradient-text-hero mb-4">Message Received!</h1>
        <p className="text-muted text-lg leading-relaxed mb-8">
          Thanks for reaching out. {SITE.founder} will review your message and get back to you personally within 24 hours.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200"
        >
          Back to Home
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
