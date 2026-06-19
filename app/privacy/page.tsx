import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}`,
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-28 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold gradient-text-hero mb-2">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: June 2025</p>

        <div className="flex flex-col gap-10 text-muted leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Information We Collect</h2>
            <p>When you submit a contact form on this site, we collect your name, email address, phone number, and any message you provide. This information is used solely to respond to your inquiry.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">How We Use Your Information</h2>
            <p>We use the information you provide to contact you about our services. We do not sell, trade, or share your personal information with third parties except as required to fulfill your request (e.g., email delivery services).</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Communications</h2>
            <p>By providing your phone number, you consent to receive text messages from {SITE.name} related to your inquiry. Message and data rates may apply. You can opt out at any time by replying STOP.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Cookies</h2>
            <p>This site may use basic analytics cookies to understand visitor behavior. No personally identifiable information is collected through cookies.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink mb-3">Contact</h2>
            <p>For privacy-related questions, contact us at <a href={`mailto:${SITE.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">{SITE.email}</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
