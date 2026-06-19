"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HERO, SITE } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-orb-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px] animate-orb-2" />
        <div className="absolute top-3/4 left-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/6 blur-[80px] animate-orb-3" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial fade at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,transparent_50%,var(--bg)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {HERO.badge}
        </div>

        {/* Logo mark */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-150" />
          <Image
            src="/assets/logo.png"
            alt={`${SITE.name} mark`}
            width={80}
            height={80}
            className="relative rounded-full drop-shadow-[0_0_30px_rgba(37,99,235,0.9)] drop-shadow-[0_0_60px_rgba(6,182,212,0.4)]"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
          <span className="gradient-text-hero">{HERO.headline}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
          {HERO.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
          >
            {HERO.cta1}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold border border-white/10 bg-white/[0.04] text-ink hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300"
          >
            {HERO.cta2}
          </Link>
        </div>

        {/* Trust line */}
        <p className="text-xs text-muted mt-2">
          Helping small business owners compete with AI · No tech background required
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted opacity-60 animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
