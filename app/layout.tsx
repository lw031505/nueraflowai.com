import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/content";
import { getOrganizationSchema, getWebsiteSchema, getLocalBusinessSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "AI coaching for small business",
    "AI consulting small business",
    "learn AI for business owners",
    "AI training workshops",
    "small business AI implementation",
    "AI tools for entrepreneurs",
    "Lucas Wagner AI",
    "NuEraFlow AI",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/assets/logo.png", width: 512, height: 512, alt: `${SITE.name} logo` }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "T8G_q-hXF9XxoDpeJhuqYp4cbjL3YlQDxQ_-e5OyrV8",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemas = [getOrganizationSchema(), getWebsiteSchema(), getLocalBusinessSchema()];

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="T8G_q-hXF9XxoDpeJhuqYp4cbjL3YlQDxQ_-e5OyrV8" />
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
        ))}
      </head>
      <body className="font-sans bg-bg text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
