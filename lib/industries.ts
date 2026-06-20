export interface Industry {
  slug: string;
  name: string;
  headline: string;
  description: string;
  painPoints: string[];
  useCases: { title: string; description: string; icon: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "med-spas",
    name: "Med Spas & Aesthetic Clinics",
    headline: "AI for Med Spas — More Bookings, Less Admin",
    description: "Med spas run on relationships, reputation, and repeat clients. AI handles the admin so your team focuses on delivering results.",
    painPoints: [
      "Staff spending hours on appointment scheduling and reminders",
      "Leads falling through the cracks after an inquiry",
      "Inconsistent follow-up with past clients",
      "Generic marketing that doesn't convert",
    ],
    useCases: [
      { icon: "calendar", title: "Automated Booking & Reminders", description: "AI handles appointment confirmations, reminders, and rescheduling via text — reducing no-shows by up to 40%." },
      { icon: "mail", title: "Lead Follow-Up on Autopilot", description: "Every inquiry gets an immediate, personalized response — even at 11pm. No lead goes cold." },
      { icon: "users", title: "Client Reactivation Campaigns", description: "AI identifies clients who haven't booked in 60+ days and sends personalized re-engagement messages." },
      { icon: "star", title: "Review Generation", description: "After every visit, AI sends a perfectly-timed review request. More 5-star reviews, effortlessly." },
    ],
    faqs: [
      { q: "Can AI actually handle med spa scheduling?", a: "Yes. AI tools integrate with booking systems like Jane App or Vagaro to handle confirmations, reminders, and even rescheduling conversations via SMS or email — without any staff involvement." },
      { q: "Is AI appropriate for a client-facing business like a med spa?", a: "Absolutely. The best implementations are invisible to clients — they just experience faster responses and better communication. The human touch stays exactly where it matters." },
      { q: "How long does it take to implement AI in a med spa?", a: "Most workflows can be automated in 1-2 weeks. A strategy call identifies your biggest time drains, and we build from there." },
      { q: "What does NuEraFlow AI do for med spas specifically?", a: "We map your current client journey, identify where time is wasted, and build AI systems that handle follow-up, reminders, and marketing automatically — then teach your team to manage it." },
      { q: "How much does AI implementation cost for a med spa?", a: "Most AI tools we implement have free or low-cost tiers. Our coaching and consulting fees depend on scope — book a free call to discuss." },
    ],
    cta: "See how AI can fill your calendar",
  },
  {
    slug: "real-estate-agencies",
    name: "Real Estate Agencies",
    headline: "AI for Real Estate — Close More Deals, Follow Up Faster",
    description: "In real estate, speed wins. AI ensures every lead gets an immediate response, every client gets consistent follow-up, and no deal slips through the cracks.",
    painPoints: [
      "Leads going cold because follow-up was slow",
      "Agents spending hours writing listing descriptions and emails",
      "Inconsistent client communication across the team",
      "Manually tracking where every lead is in the pipeline",
    ],
    useCases: [
      { icon: "zap", title: "Instant Lead Response", description: "AI responds to every new lead within 60 seconds — qualifying them, answering questions, and booking showings automatically." },
      { icon: "file", title: "Listing Description Generation", description: "AI writes compelling property descriptions in seconds. Agents review and post. What used to take 30 minutes takes 2." },
      { icon: "mail", title: "Automated Drip Campaigns", description: "AI nurtures every lead with personalized follow-up sequences until they're ready to buy or sell." },
      { icon: "bar-chart", title: "Market Report Automation", description: "AI generates personalized market reports for clients, keeping them engaged and positioning your agents as local experts." },
    ],
    faqs: [
      { q: "Can AI replace a real estate agent?", a: "No — and that's not the goal. AI handles the repetitive communication so agents spend their time where it matters: building relationships and closing deals." },
      { q: "Will AI responses feel impersonal to clients?", a: "Not when implemented correctly. AI drafts responses that sound like your agents — personalized, warm, and specific to each client's situation." },
      { q: "What CRMs work with AI for real estate?", a: "Most major real estate CRMs (Follow Up Boss, kvCORE, Chime, HubSpot) integrate with AI tools. We map the right setup for your existing stack." },
      { q: "How quickly can a real estate agency implement AI?", a: "Most agencies see their first automated workflows live within 1-2 weeks of starting." },
      { q: "What's the ROI of AI for real estate agencies?", a: "The most common result is agents closing 1-2 more deals per quarter simply from faster follow-up and better lead nurturing — which more than covers any cost." },
    ],
    cta: "Book a free call to see AI in action for your agency",
  },
  {
    slug: "law-firms",
    name: "Law Firms",
    headline: "AI for Law Firms — More Billable Hours, Less Admin",
    description: "Small and mid-size law firms are quietly using AI to dramatically cut non-billable work. Here's how to do it without compromising accuracy or client trust.",
    painPoints: [
      "Attorneys spending hours on intake, scheduling, and emails instead of client work",
      "Research and document review eating into billable time",
      "Inconsistent client communication causing frustration",
      "Billing and follow-up falling behind",
    ],
    useCases: [
      { icon: "file", title: "Document Drafting & Review", description: "AI drafts contracts, briefs, and letters for attorney review — cutting drafting time by 60-70%." },
      { icon: "user", title: "Client Intake Automation", description: "AI handles initial intake forms, gathers case information, and schedules consultations automatically." },
      { icon: "search", title: "Legal Research Assistance", description: "AI surfaces relevant case law and precedents in minutes, not hours." },
      { icon: "mail", title: "Client Communication", description: "AI drafts status updates and follow-up emails in the firm's voice, keeping clients informed without partner time." },
    ],
    faqs: [
      { q: "Is it safe to use AI with confidential client information?", a: "Yes, when using the right tools with appropriate data handling. We only recommend tools that meet legal industry privacy standards, and we help you implement proper protocols." },
      { q: "Can AI actually do legal research?", a: "AI significantly accelerates legal research by surfacing relevant materials quickly. Attorneys still verify and apply judgment — AI removes the grunt work." },
      { q: "Will clients know we're using AI?", a: "Most AI implementations are internal tools that improve your team's output, not client-facing. The client just experiences better, faster service." },
      { q: "Does NuEraFlow AI work with solo practitioners?", a: "Yes. Solo practitioners actually benefit the most — AI effectively gives you the leverage of a larger team." },
      { q: "What's the first AI implementation a law firm should do?", a: "Client intake automation is almost always the highest-ROI starting point. Book a call and we'll map it out for your specific practice." },
    ],
    cta: "See how much billable time AI can recover for your firm",
  },
  {
    slug: "insurance-agencies",
    name: "Insurance Agencies",
    headline: "AI for Insurance Agencies — More Policies, Less Manual Work",
    description: "Insurance is a volume and follow-up game. AI ensures every lead gets worked and every client stays engaged — without adding headcount.",
    painPoints: [
      "Leads not getting called fast enough after an inquiry",
      "Manual policy renewal reminders eating up staff time",
      "Inconsistent follow-up across the agent team",
      "Clients leaving at renewal because of lack of communication",
    ],
    useCases: [
      { icon: "phone", title: "Instant Lead Response", description: "AI contacts every new lead within minutes via text or email, qualifying them and booking agent calls automatically." },
      { icon: "calendar", title: "Renewal Automation", description: "AI sends personalized renewal reminders at the right time, reducing lapses and keeping clients in-book." },
      { icon: "users", title: "Cross-Sell Campaigns", description: "AI identifies existing clients who likely need additional coverage and triggers targeted outreach." },
      { icon: "mail", title: "Quote Follow-Up Sequences", description: "Every quote request triggers an automated follow-up sequence — so no lead goes un-worked." },
    ],
    faqs: [
      { q: "Can AI help independent insurance agents compete with larger carriers?", a: "Yes. AI gives independent agents the speed and consistency of a large operation — instant response times and systematic follow-up — without the overhead." },
      { q: "Will AI handle compliance-sensitive communications correctly?", a: "We build AI communications that stay within compliance boundaries and are reviewed for your specific state regulations." },
      { q: "What insurance CRMs work with AI automation?", a: "Applied Epic, AgencyBloc, HawkSoft, and most other major agency management systems can be integrated with AI tools." },
      { q: "How do I get started with AI for my insurance agency?", a: "A free strategy call with NuEraFlow AI is the first step. We'll identify your biggest opportunities and map a realistic implementation plan." },
      { q: "What results can insurance agencies expect from AI?", a: "Most agencies see meaningful improvement in lead conversion rates and renewal retention within the first 90 days of implementation." },
    ],
    cta: "Book a free call to see what AI can do for your agency",
  },
  {
    slug: "financial-advisors",
    name: "Financial Advisors & Wealth Management",
    headline: "AI for Financial Advisors — More Clients, Deeper Relationships",
    description: "AI handles the prep work, scheduling, and follow-up so advisors spend more time on what only they can do: building trust and growing wealth.",
    painPoints: [
      "Hours spent preparing for client meetings manually",
      "Inconsistent client touchpoints between annual reviews",
      "Leads from referrals going cold before a first meeting",
      "Administrative work reducing time available for high-value clients",
    ],
    useCases: [
      { icon: "file", title: "Client Meeting Prep", description: "AI generates personalized briefings before every client meeting — portfolio summaries, life events, and talking points — in minutes." },
      { icon: "mail", title: "Proactive Client Communication", description: "AI sends timely, personalized touchpoints throughout the year — market commentary, birthday messages, check-ins — without advisor effort." },
      { icon: "users", title: "Prospect Nurturing", description: "Referrals and leads get an automated nurture sequence that keeps your firm top-of-mind until they're ready to engage." },
      { icon: "bar-chart", title: "Report Generation", description: "AI drafts quarterly performance summaries and market updates, personalized for each client." },
    ],
    faqs: [
      { q: "Is AI use compliant for financial advisors?", a: "AI for internal productivity and draft generation is generally compliant. Client-facing AI communications should be reviewed — we help you implement within your compliance framework." },
      { q: "Can AI help me serve more clients without hiring?", a: "Yes. Most advisors who implement AI effectively can handle 20-30% more clients without adding staff." },
      { q: "What does a typical AI implementation look like for a financial advisor?", a: "We typically start with client communication and meeting prep automation. Most advisors see meaningful time savings within the first month." },
      { q: "Will clients notice the AI involvement?", a: "The communications AI generates are reviewed and personalized by the advisor before sending. Clients just experience better, more consistent service." },
      { q: "Where does NuEraFlow AI fit in for financial advisors?", a: "We coach advisors on AI tools and build custom workflows for their specific client management process — with full handoff so your team can run it independently." },
    ],
    cta: "Free strategy call — see how AI fits your practice",
  },
  {
    slug: "marketing-agencies",
    name: "Marketing Agencies",
    headline: "AI for Marketing Agencies — Scale Output Without Scaling Headcount",
    description: "The agencies winning in 2025 use AI to deliver more for clients at higher margins — without burning out their team.",
    painPoints: [
      "Content creation bottlenecks slowing client deliverables",
      "Reporting taking hours every week",
      "Pitches and proposals taking too long to produce",
      "Scaling client load without proportionally increasing team size",
    ],
    useCases: [
      { icon: "sparkles", title: "Content at Scale", description: "AI generates first drafts of blogs, ads, emails, and social posts for human refinement — cutting production time by 60%." },
      { icon: "bar-chart", title: "Automated Reporting", description: "AI pulls client data, generates performance summaries, and drafts commentary. Reports that took 3 hours take 20 minutes." },
      { icon: "file", title: "Proposal Generation", description: "AI drafts customized client proposals based on discovery call notes — ready for review in minutes, not days." },
      { icon: "zap", title: "Campaign Ideation", description: "AI generates campaign concepts, hooks, and copy variations at a pace no human team can match." },
    ],
    faqs: [
      { q: "Won't AI-generated content hurt client results?", a: "Only if used without human judgment. AI is a first-draft tool — your team's strategy, voice, and expertise is what makes it perform. The output quality goes up, not down." },
      { q: "Should I tell clients I'm using AI?", a: "Most agencies are transparent about AI-assisted production while emphasizing the human strategy behind it. This is becoming industry standard." },
      { q: "Can AI help us take on more clients?", a: "Yes. Most agencies that implement AI effectively can increase client capacity by 25-40% with the same team." },
      { q: "What's the best starting point for an agency implementing AI?", a: "Content production is almost always the highest-ROI starting point. It impacts every client and every deliverable." },
      { q: "Does NuEraFlow AI work with agencies to implement across the full team?", a: "Yes. Our team workshops are designed exactly for this — getting every person on your team using AI effectively, not just the tech-savvy ones." },
    ],
    cta: "Book a workshop for your agency team",
  },
  {
    slug: "dental-practices",
    name: "Dental Practices",
    headline: "AI for Dental Practices — Fuller Schedule, Less Front Desk Stress",
    description: "Dental practices live and die by their schedule. AI keeps it full, reduces no-shows, and handles patient communication automatically.",
    painPoints: [
      "No-shows and last-minute cancellations disrupting the schedule",
      "Front desk spending hours on appointment reminders",
      "Patients not returning for cleanings and follow-up care",
      "New patient inquiries not being responded to fast enough",
    ],
    useCases: [
      { icon: "calendar", title: "Automated Reminders", description: "AI sends personalized appointment reminders via text and email, dramatically reducing no-shows." },
      { icon: "user", title: "Patient Reactivation", description: "AI identifies patients overdue for cleanings and sends personalized reactivation messages automatically." },
      { icon: "mail", title: "New Patient Follow-Up", description: "Every new inquiry gets an immediate response and a frictionless path to booking." },
      { icon: "star", title: "Review Requests", description: "AI sends perfectly-timed review requests after appointments, building your Google rating automatically." },
    ],
    faqs: [
      { q: "Is AI HIPAA compliant for dental practices?", a: "When implemented with the right tools and protocols, yes. We help dental practices implement AI within HIPAA guidelines." },
      { q: "Will AI replace our front desk?", a: "No — AI handles the repetitive communication tasks so your front desk focuses on the in-person patient experience." },
      { q: "How long does AI take to implement for a dental practice?", a: "Most core workflows can be running within 2 weeks. Book a call to discuss your specific setup." },
      { q: "What practice management systems work with AI?", a: "Dentrix, Eaglesoft, Open Dental, and most major systems can integrate with AI communication tools." },
      { q: "What's the biggest result dental practices see from AI?", a: "No-show reduction is almost always the most immediate and measurable result — often 25-35% within the first month." },
    ],
    cta: "See how AI can fill your schedule",
  },
  {
    slug: "chiropractic-clinics",
    name: "Chiropractic Clinics",
    headline: "AI for Chiropractic Clinics — More Patients, Less Admin",
    description: "Chiropractic practices grow on referrals and retention. AI keeps your existing patients coming back and your schedule consistently full.",
    painPoints: [
      "Patients dropping off after initial treatment without completing their care plan",
      "Staff time consumed by reminder calls and scheduling",
      "Difficulty staying in touch with patients between visits",
      "New patient inquiries not converting fast enough",
    ],
    useCases: [
      { icon: "calendar", title: "Care Plan Reminders", description: "AI automatically follows up with patients who miss scheduled visits, keeping them on their care plan." },
      { icon: "mail", title: "Patient Re-engagement", description: "AI identifies inactive patients and sends personalized messages to bring them back." },
      { icon: "user", title: "New Patient Onboarding", description: "AI sends intake forms, welcome messages, and appointment confirmations automatically before the first visit." },
      { icon: "star", title: "Referral Requests", description: "AI identifies satisfied patients at the right moment and asks for referrals systematically." },
    ],
    faqs: [
      { q: "Can AI help chiropractic clinics retain more patients?", a: "Yes. The biggest impact is usually in following up with patients who missed visits — AI does this automatically and systematically, which no human team does consistently." },
      { q: "What scheduling software works with AI for chiropractic clinics?", a: "ChiroTouch, Jane App, Genesis, and most major systems can be paired with AI communication tools." },
      { q: "Is AI implementation complicated for a chiropractic practice?", a: "Not with guidance. Most practices have core AI workflows running within 2 weeks." },
      { q: "What results do chiropractic clinics see from AI?", a: "The most common improvements are in patient retention rates and consistent schedule fullness — both driven by better follow-up." },
      { q: "How does NuEraFlow AI work with chiropractic clinics?", a: "We start with a free strategy call to identify your biggest practice management challenges, then build and implement the right AI workflows for your specific situation." },
    ],
    cta: "Book a free call to see AI in action for your clinic",
  },
  {
    slug: "mortgage-brokers",
    name: "Mortgage Brokers",
    headline: "AI for Mortgage Brokers — Close More Loans, Follow Up Faster",
    description: "The mortgage broker who responds first wins. AI makes sure that's always you — while handling the follow-up that converts applications to closings.",
    painPoints: [
      "Leads going to competitors because response time was too slow",
      "Pre-approval follow-up falling through the cracks",
      "Hours spent manually updating clients on loan status",
      "Past clients not being nurtured for refinancing opportunities",
    ],
    useCases: [
      { icon: "zap", title: "Instant Lead Response", description: "AI responds to every new inquiry within minutes — day or night — qualifying prospects and booking calls." },
      { icon: "mail", title: "Application Follow-Up", description: "AI keeps borrowers updated throughout the loan process, reducing status call volume and increasing client satisfaction." },
      { icon: "users", title: "Past Client Reactivation", description: "AI monitors market conditions and alerts past clients when refinancing makes sense — then follows up automatically." },
      { icon: "file", title: "Document Collection", description: "AI sends personalized reminders for outstanding documents, keeping the loan process moving." },
    ],
    faqs: [
      { q: "Can AI help mortgage brokers compete with big banks?", a: "Yes — specifically on speed and communication. AI gives independent brokers instant response times and systematic follow-up that large institutions struggle to replicate." },
      { q: "Is AI compliant for mortgage lending communications?", a: "AI-assisted communication that's reviewed before sending is generally compliant. We help implement within RESPA and applicable regulations." },
      { q: "What CRM systems work with AI for mortgage brokers?", a: "Total Expert, Velocify, Jungo, and most major mortgage CRMs integrate with AI automation tools." },
      { q: "How quickly can a mortgage broker start seeing results from AI?", a: "Most brokers see faster lead response and better pipeline visibility within the first 2-4 weeks of implementation." },
      { q: "Does NuEraFlow AI work with solo mortgage brokers?", a: "Yes. Solo brokers benefit enormously because AI gives them the capacity of a larger operation." },
    ],
    cta: "Book a free call — see AI in action for your mortgage business",
  },
  {
    slug: "accounting-firms",
    name: "Accounting & CPA Firms",
    headline: "AI for Accounting Firms — More Clients, Less Repetitive Work",
    description: "Accounting firms that adopt AI are serving more clients with the same team — and winning the talent war by eliminating the grunt work everyone hates.",
    painPoints: [
      "Staff spending hours on repetitive data entry and document requests",
      "Tax season overwhelming the team year after year",
      "Client communication and follow-up falling behind",
      "Difficulty scaling without proportionally increasing headcount",
    ],
    useCases: [
      { icon: "file", title: "Document Collection Automation", description: "AI sends personalized reminders for missing client documents, tracking responses and escalating as needed." },
      { icon: "mail", title: "Client Communication Drafts", description: "AI drafts status updates, follow-up emails, and notices in your firm's voice for staff to review and send." },
      { icon: "sparkles", title: "Advisory Report Generation", description: "AI generates draft advisory letters, tax planning summaries, and financial reviews from your data." },
      { icon: "calendar", title: "Deadline Management", description: "AI tracks client deadlines and proactively follows up with both clients and staff to keep filings on track." },
    ],
    faqs: [
      { q: "Is AI appropriate for handling sensitive financial data?", a: "When using enterprise-grade tools with appropriate access controls, yes. We help firms implement AI with proper security protocols." },
      { q: "Can AI help with tax preparation?", a: "AI accelerates document collection, data organization, and draft generation — but the final review and judgment remains with your CPAs." },
      { q: "Will AI affect our professional liability?", a: "AI is a productivity tool, not a replacement for professional judgment. All AI-generated content is reviewed by your team before use with clients." },
      { q: "What accounting software integrates with AI?", a: "QuickBooks, Xero, Thomson Reuters, and most major platforms have AI integration options. We map the right tools for your stack." },
      { q: "What's the first AI implementation for an accounting firm?", a: "Document collection automation is almost always the highest-ROI starting point — it impacts every client and every engagement." },
    ],
    cta: "Book a free call to see AI in action for your firm",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
