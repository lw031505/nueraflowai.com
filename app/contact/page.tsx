import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Book a Free Strategy Call",
  description: `Book a free AI strategy call with ${SITE.founder} at ${SITE.name}. No pitch — just a real conversation about what AI can do for your business.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Contact</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              The first call is completely free. Drop your info below and {SITE.founder} will reach out personally within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="pb-28 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-card border border-white/[0.07]">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Calendar size={20} className="text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">Free Strategy Call</h3>
                <p className="text-sm text-muted leading-relaxed">
                  30 minutes to map out where AI can save you time and money. No obligation.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/[0.07]">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <MessageSquare size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">AI Chat Assistant</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Have questions right now? Use the chat bubble in the corner — it&apos;s powered by AI and knows everything about our services.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-white/[0.07]">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Mail size={20} className="text-blue-300" />
                </div>
                <h3 className="text-base font-bold text-ink mb-2">Email</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="rounded-2xl bg-card border border-white/[0.07] p-8 card-border">
              <h2 className="text-xl font-bold text-ink mb-6">Send a Message</h2>
              <form
                action={`https://formsubmit.co/${SITE.email}`}
                method="POST"
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="_subject" value="NuEraFlow AI — New Inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value={`${SITE.url}/thank-you`} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    What does your business do?
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="e.g. Real estate agency, restaurant, law firm..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    What do you want to achieve with AI?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me what's taking up too much of your time, what you're hoping AI can help with, or any questions you have..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>

                <p className="text-xs text-muted">
                  By submitting, you agree to be contacted about NuEraFlow AI services. Read our{" "}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Terms of Service
                  </a>.
                </p>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Send Message — Get a Response Within 24 Hours
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
