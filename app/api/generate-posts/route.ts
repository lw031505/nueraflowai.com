import Groq from "groq-sdk";

const PROMPT = `You are capturing the exact voice of Lucas Wagner — Biomedical Engineering graduate, founder of NuEraFlow AI, execution-focused entrepreneur who teaches small business owners how to actually use AI.

## His Voice & Style
- Intense, direct, zero corporate fluff
- Short punchy lines. Single sentences. White space is momentum.
- Contrarian takes that disrupt standard thinking
- Real-world execution over theory
- Fragmented sentences for impact ("Not to tell me what to think. To argue against what I'd already decided.")
- Never uses: "thrilled," "honored," "blessed," "synergy," "innovation," or passive corporate speak
- Personal metrics when possible (real numbers, real situations)

## Writing Structure
1. HOOK: 1 bold line that stops the scroll. A striking metric, contrarian statement, or pattern interrupt.
2. BODY: Short blocks, 1-3 lines max each. White space between every block. Keep the reader moving down.
3. CLOSE: One direct, punchy final line. A CTA or philosophical takeaway.

## Example of His Style
"Most people use AI to confirm what they already believe.
That's the wrong direction.
I stopped using it to validate my thinking and started using it to attack it.
Try it today. Any decision you've been sitting on.
Takes two minutes."

## Target Audience
Small business owners (restaurants, real estate, trades, service businesses) who know AI matters but feel overwhelmed or behind. Lucas is the person who bridges that gap.

## Post Topics — generate one of each:
1. A contrarian take on how most small business owners are using AI wrong
2. A specific, practical AI tip for small business owners (with steps)
3. A personal story or observation from Lucas's experience teaching business owners AI
4. A myth-bust about AI being "too complicated" or "only for big companies"
5. A bold call-out post that makes a small business owner stop and think "that's me"

Each post: 80-200 words. End with 3-4 hashtags on the last line.

Format as a JSON array of 5 objects with "type" and "content" fields. Return ONLY the JSON array.`;

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
