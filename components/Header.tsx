"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md group-hover:bg-blue-500/30 transition-all duration-300" />
              <Image
                src="/assets/logo.png"
                alt={`${SITE.name} logo`}
                width={36}
                height={36}
                className="relative rounded-full drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]"
              />
            </div>
            <span className="font-bold text-base tracking-tight text-ink hidden sm:block">
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-bg/98 backdrop-blur-xl z-40 flex flex-col p-6 border-t border-white/[0.06]">
          <nav className="flex flex-col gap-1 mt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-lg font-medium text-ink rounded-xl hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full py-4 text-center text-base font-bold rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
