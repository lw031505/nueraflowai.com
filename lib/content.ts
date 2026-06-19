// ─── SITE CONTENT ────────────────────────────────────────────────────────────
// Update this file to change text across the entire site.
// No coding knowledge needed — just edit the text between the quotes.

export const SITE = {
  name: "NuEraFlow AI",
  tagline: "AI Made Simple. Business Made Powerful.",
  description:
    "NuEraFlow AI helps small business owners learn, use, and benefit from AI through 1-on-1 coaching, team workshops, and hands-on consulting.",
  email: "nueraflow@gmail.com",
  url: "https://www.nueraflowai.com",
  founder: "Lucas Wagner",
  founded: "2025",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "#contact",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO = {
  badge: "AI Training & Consulting for Small Business",
  headline: "Your Business Deserves AI That Actually Works",
  subheadline:
    "Most business owners know AI is important — but have no idea where to start. NuEraFlow AI bridges the gap with personalized coaching, team training, and hands-on consulting.",
  cta1: "Book a Free Strategy Call",
  cta2: "Explore Services",
};

export const SERVICES = [
  {
    id: "coaching",
    icon: "user",
    title: "1-on-1 AI Coaching",
    tagline: "Personal. Practical. Powerful.",
    description:
      "Private Zoom sessions built around your specific business, tools, and goals. No generic tutorials — just direct answers to your exact situation.",
    bullets: [
      "Personalized curriculum based on your business",
      "Learn the AI tools most relevant to your industry",
      "Ongoing sessions at your own pace",
      "Direct access to expert guidance",
    ],
    cta: "Start Coaching",
  },
  {
    id: "workshops",
    icon: "users",
    title: "Team Workshops",
    tagline: "Align your team. Unlock AI together.",
    description:
      "In-person, hands-on workshops that get your entire team on the same page about AI — what it can do, how to use it, and how to build it into your daily workflow.",
    bullets: [
      "Custom-built for your team's use cases",
      "In-person, high-engagement format",
      "Practical exercises, not slide decks",
      "Takeaway playbooks your team keeps",
    ],
    cta: "Book a Workshop",
  },
  {
    id: "consulting",
    icon: "zap",
    title: "AI Consulting",
    tagline: "Identify the problem. Build the solution.",
    description:
      "We map your business processes, identify where AI creates the most leverage, then either build the solution for you or teach you to build it yourself.",
    bullets: [
      "Deep-dive into your current workflows",
      "Identify the highest-ROI AI opportunities",
      "Build custom AI tools or teach you how",
      "Ongoing support during implementation",
    ],
    cta: "Start a Consultation",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Free Strategy Call",
    description:
      "We talk through your business, your goals, and where you're getting stuck. No pitch, just clarity.",
  },
  {
    num: "02",
    title: "Custom Plan",
    description:
      "You get a clear roadmap — which AI tools matter for you, what to learn first, and what can wait.",
  },
  {
    num: "03",
    title: "Build & Learn",
    description:
      "We work through it together, your pace. Coaching, workshops, or building — whatever fits.",
  },
  {
    num: "04",
    title: "Real Results",
    description:
      "Fewer repetitive tasks. Better decisions. A business that runs smarter with AI baked in.",
  },
];

export const FAQS = [
  {
    q: "Do I need to be tech-savvy to work with NuEraFlow AI?",
    a: "Not at all. The whole point is to make AI understandable for business owners, not engineers. If you can use email and a smartphone, you can learn this.",
  },
  {
    q: "What kinds of businesses do you work with?",
    a: "Primarily small business owners across industries — retail, service businesses, agencies, real estate, trades, and more. If your business has repetitive tasks, communication, or decision-making, AI can help.",
  },
  {
    q: "How is this different from just watching YouTube tutorials?",
    a: "YouTube gives generic information. We give you a custom plan for your specific business, answer your exact questions, and walk you through implementation. No wasted time on things that don't apply to you.",
  },
  {
    q: "What AI tools will I learn to use?",
    a: "It depends on your business. We might cover ChatGPT, Claude, Gemini, AI automation tools like Zapier or Make, or industry-specific tools. We only teach what's useful for your situation.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see meaningful time savings within the first 2-3 sessions. The more you implement, the faster the compounding effect.",
  },
  {
    q: "What does AI consulting look like in practice?",
    a: "We start by mapping your current workflow and identifying your biggest bottlenecks. Then we either build an AI-powered solution for you or teach you to build it yourself — depending on what makes more sense for your situation.",
  },
];

export const ABOUT = {
  headline: "Built by someone who went all-in on AI before it was obvious.",
  bio: [
    "My name is Lucas Wagner. Since AI first became widely available, I've been obsessively learning how it works, what it can do, and — most importantly — how real businesses can actually use it.",
    "I started NuEraFlow AI because I kept seeing the same thing: business owners who knew AI was important but had no idea where to begin. The tools are overwhelming. The hype is everywhere. And most of the advice is built for tech people, not business owners.",
    "My job is to bridge that gap. I'll help you cut through the noise, figure out what actually matters for your business, and implement AI in a way that saves you real time and creates real results.",
  ],
  values: [
    { title: "No jargon", description: "We speak business, not tech." },
    { title: "No fluff", description: "Every session is practical and actionable." },
    { title: "Your pace", description: "We move at whatever speed works for you." },
  ],
};
