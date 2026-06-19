"use client";

import { useState } from "react";
import { Mail, MessageSquare, Calendar, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";

const EMAIL = "nueraflow@gmail.com";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.trim());
}

function isValidPhone(phone: string) {
  return phone.replace(/\D/g, "").length >= 10;
}

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  function validateEmail(val: string) {
    setEmailError(val && !isValidEmail(val) ? "Please enter a valid email address." : "");
  }

  function validatePhone(val: string) {
    setPhoneError(val && !isValidPhone(val) ? "Please enter a valid phone number (at least 10 digits)." : "");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const emailVal = data.email as string;
    const phoneVal = data.phone as string;

    const emailBad = !isValidEmail(emailVal);
    const phoneBad = !isValidPhone(phoneVal);

    if (emailBad) setEmailError("Please enter a valid email address.");
    if (phoneBad) setPhoneError("Please enter a valid phone number (at least 10 digits).");
    if (emailBad || phoneBad) return;

    setStatus("loading");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: "NuEraFlow AI — New Inquiry",
          _captcha: "false",
          _template: "box",
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email us directly at " + EMAIL);
    }
  }

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
              The first call is completely free. Drop your info below and Lucas will reach out personally within 24 hours.
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
                <a href={`mailto:${EMAIL}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  {EMAIL}
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Form / Success */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="rounded-2xl bg-card border border-white/[0.07] overflow-hidden card-border">
              {status === "success" ? (
                /* ── Success state ── */
                <div className="flex flex-col items-center text-center px-8 py-16 gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl scale-150" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/30">
                      <CheckCircle2 size={36} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-ink mb-2">Message Received!</h2>
                    <p className="text-muted leading-relaxed max-w-sm">
                      Thanks for reaching out. Lucas will review your message and get back to you personally within 24 hours.
                    </p>
                  </div>
                  <div className="w-full pt-4 border-t border-white/[0.06]">
                    <p className="text-xs text-muted mb-4">While you wait, feel free to explore</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 bg-white/[0.04] text-ink hover:bg-white/[0.08] transition-all"
                      >
                        View Services <ArrowRight size={14} />
                      </Link>
                      <Link
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 transition-all"
                      >
                        Read the Blog <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8">
                  <h2 className="text-xl font-bold text-ink">Send a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        id="name" name="name" type="text" placeholder="Your name" required
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        id="email" name="email" type="email" placeholder="your@email.com" required
                        onChange={(e) => validateEmail(e.target.value)}
                        onBlur={(e) => validateEmail(e.target.value)}
                        className={`w-full px-4 py-3 rounded-xl bg-surface border text-ink placeholder:text-muted text-sm outline-none focus:ring-1 transition-all ${emailError ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : "border-white/[0.08] focus:border-blue-500/50 focus:ring-blue-500/20"}`}
                      />
                      {emailError && <p className="text-xs text-red-400 mt-1.5">{emailError}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required
                      onChange={(e) => validatePhone(e.target.value)}
                      onBlur={(e) => validatePhone(e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl bg-surface border text-ink placeholder:text-muted text-sm outline-none focus:ring-1 transition-all ${phoneError ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : "border-white/[0.08] focus:border-blue-500/50 focus:ring-blue-500/20"}`}
                    />
                    {phoneError && <p className="text-xs text-red-400 mt-1.5">{phoneError}</p>}
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      What does your business do?
                    </label>
                    <input
                      id="business" name="business" type="text" placeholder="e.g. Real estate agency, restaurant, law firm..."
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      What do you want to achieve with AI?
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      placeholder="Tell me what's taking up too much of your time, what you're hoping AI can help with, or any questions you have..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <p className="text-xs text-muted">
                    By submitting, you agree to be contacted about NuEraFlow AI services. Read our{" "}
                    <a href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a>.
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      "Send Message — Get a Response Within 24 Hours"
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
