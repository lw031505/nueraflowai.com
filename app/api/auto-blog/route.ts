import Groq from "groq-sdk";
import { NextRequest } from "next/server";
import { TOPICS } from "@/lib/topics";

const REPO = process.env.GITHUB_REPO ?? "lw031505/nueraflowai.com";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

async function getPublishedSlugs(): Promise<string[]> {
  if (!GITHUB_TOKEN) return [];
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/content/blog`,
    { headers: { Authorization: `token ${GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" } }
  );
  if (!res.ok) return [];
  const files = await res.json();
  return Array.isArray(files)
    ? files.map((f: { name: string }) => f.name.replace(".md", ""))
    : [];
}

async function publishPost(slug: string, title: string, description: string, tags: string[], content: string): Promise<boolean> {
  if (!GITHUB_TOKEN) return false;
  const date = new Date().toISOString().split("T")[0];
  const frontmatter = `---\ntitle: "${title.replace(/"/g, "'")}"\ndescription: "${description.replace(/"/g, "'")}"\ndate: "${date}"\nslug: "${slug}"\ntags: ${JSON.stringify(tags)}\n---\n\n`;
  const fileContent = frontmatter + content;
  const encoded = Buffer.from(fileContent).toString("base64");

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contents/content/blog/${slug}.md`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        message: `Auto-publish: ${title}`,
        content: encoded,
        committer: { name: "NuEraFlow AI Bot", email: "nueraflow@gmail.com" },
      }),
    }
  );
  return res.ok;
}

export async function GET(req: NextRequest) {
  // Verify this is called by Vercel Cron (or manually with secret)
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!GITHUB_TOKEN) {
    return Response.json({ error: "GITHUB_TOKEN not configured" }, { status: 503 });
  }
  if (!process.env.GROQ_API_KEY) {
    return Response.json({ error: "GROQ_API_KEY not configured" }, { status: 503 });
  }

  // Find an unused topic
  const published = await getPublishedSlugs();
  const unused = TOPICS.filter((t) => !published.includes(t.slug));

  if (unused.length === 0) {
    return Response.json({ message: "All topics have been published. Add more to lib/topics.ts." });
  }

  // Pick the next unused topic (first in list order)
  const topic = unused[0];

  const isPredictive = topic.type === "predictive";
  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const prompt = `You are a content writer for NuEraFlow AI, founded by Lucas Wagner. He coaches and consults high-value service businesses (med spas, real estate agencies, law firms, insurance agencies, financial advisors, marketing agencies) on implementing AI.

Write a high-quality, SEO-optimized blog post targeting this keyword: "${topic.keyword}"
Target reader: ${topic.audience}
Post type: ${isPredictive ? "Predictive/forward-looking — write about what is coming in AI, using phrases like 'this is where things are heading' and 'early adopters are already seeing this'. Be specific but frame predictions as informed perspectives, not guarantees." : "Practical and actionable — real advice they can use this week."}

Requirements:
- 750-950 words
- H2 and H3 subheadings that include keywords naturally
- Plain language, no jargon, no corporate speak
- Specific and practical — not generic
- Lucas's voice: direct, confident, no fluff, execution-focused
- 5 FAQ questions at the end in a section titled "## Frequently Asked Questions" (format each as "**Q: [question]**" then the answer on the next line)
- End with a CTA paragraph linking to /contact for a free strategy call
- Internal links: mention /services at least once naturally in the text

Return a JSON object with:
- "title": SEO-optimized title
- "description": meta description under 155 characters
- "tags": array of 3-4 tags
- "content": full post in Markdown (no frontmatter)

Return ONLY the JSON object.`;

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens: 2500,
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0]?.message?.content ?? "{}";

  let post: { title: string; description: string; tags: string[]; content: string };
  try {
    post = JSON.parse(raw);
  } catch {
    return Response.json({ error: "Failed to parse AI response" }, { status: 500 });
  }

  const ok = await publishPost(topic.slug, post.title, post.description, post.tags, post.content);

  if (!ok) {
    return Response.json({ error: "Failed to publish to GitHub" }, { status: 500 });
  }

  return Response.json({
    success: true,
    published: { slug: topic.slug, title: post.title },
    remaining: unused.length - 1,
  });
}
