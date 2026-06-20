import Groq from "groq-sdk";

const PROMPT = `You are a LinkedIn content strategist for Lucas Wagner, founder of NuEraFlow AI — an AI coaching and consulting company for small business owners.

Generate exactly 5 LinkedIn posts for Lucas. Each post should:
- Sound like a real person talking, not a corporate brand
- Be conversational, direct, and confident — never fluffy or generic
- Target small business owners who are curious about AI but overwhelmed or skeptical
- Be 100-250 words (optimal LinkedIn length)
- End with either a question to spark comments, or a soft CTA to book a free call
- Include 3-5 relevant hashtags at the end
- Cover different angles: educational tip, personal story, myth-busting, before/after scenario, or a controversial take

Format your response as a JSON array with exactly 5 objects, each with:
- "type": the post angle (e.g. "Educational Tip", "Personal Story", etc.)
- "content": the full post text including hashtags

Return ONLY the JSON array, no other text.`;

export async function POST() {
  if (!process.env.GROQ_API_KEY) {
    return Response.json({ error: "GROQ_API_KEY not configured." }, { status: 503 });
  }

  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const completion = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens: 2048,
    messages: [{ role: "user", content: PROMPT }],
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0]?.message?.content ?? "[]";

  try {
    const parsed = JSON.parse(raw);
    const posts = Array.isArray(parsed) ? parsed : parsed.posts ?? [];
    return Response.json({ posts });
  } catch {
    return Response.json({ error: "Failed to parse AI response. Try again." }, { status: 500 });
  }
}
