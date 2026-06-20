import Groq from "groq-sdk";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  if (!process.env.GROQ_API_KEY) {
    return Response.json({ error: "GROQ_API_KEY not configured." }, { status: 503 });
  }

  const { keyword, audience } = await req.json();

  const prompt = `You are a content writer for NuEraFlow AI, a company founded by Lucas Wagner that teaches small business owners how to use AI.

Write a high-quality, SEO-optimized blog post targeting the keyword: "${keyword}"
Target audience: ${audience || "small business owners who are new to AI"}

The post should:
- Be 600-900 words
- Have a compelling, keyword-rich title
- Include an introduction that addresses a real pain point
- Have 3-4 main sections with H2 subheadings
- Use plain language — no jargon, no corporate speak
- Include practical, actionable advice
- End with a call to action to book a free strategy call at NuEraFlow AI
- Sound like Lucas writing directly to a business owner, not like a generic blog post

Return a JSON object with:
- "title": the blog post title
- "description": a 1-2 sentence meta description (under 160 characters)
- "slug": a URL-friendly slug based on the title
- "tags": array of 3-4 relevant tags
- "content": the full blog post content in Markdown (without frontmatter)

Return ONLY the JSON object.`;

  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens: 2048,
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0]?.message?.content ?? "{}";

  try {
    const post = JSON.parse(raw);
    return Response.json({ post });
  } catch {
    return Response.json({ error: "Failed to parse AI response. Try again." }, { status: 500 });
  }
}
