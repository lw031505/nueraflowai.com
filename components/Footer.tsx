import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt={`${SITE.name} logo`}
                width={32}
                height={32}
                className="rounded-full drop-shadow-[0_0_6px_rgba(37,99,235,0.7)]"
              />
              <span className="font-bold text-ink">{SITE.name}</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
            <p className="text-muted text-sm mt-4">
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-ink transition-colors"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-ink transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted hover:text-ink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted hover:text-ink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Founded by {SITE.founder} · {SITE.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
