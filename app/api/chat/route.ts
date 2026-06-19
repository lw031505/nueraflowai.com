import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are the AI assistant for NuEraFlow AI, a company founded by Lucas Wagner that helps small business owners learn and implement AI in their businesses.

About NuEraFlow AI:
- Founded: May 2025 by Lucas Wagner
- Mission: Make AI accessible, practical, and profitable for small business owners
- Services:
  1. 1-on-1 AI Coaching (via Zoom) — personalized sessions for individuals
  2. Team Workshops (in-person) — hands-on group training for business teams
  3. AI Consulting — identify business problems, then build or teach solutions

Who we help:
- Small business owners who know AI is important but don't know where to start
- Business teams that need to get aligned on AI tools and workflows
- Entrepreneurs who want to save time and make smarter decisions with AI

Lucas's background:
- Has been deeply studying AI since it first became widely available
- Works with businesses across many industries
- Focuses on practical, jargon-free AI education
- Believes AI should be accessible to everyone, not just tech people

Your role:
- Answer questions about AI, the services NuEraFlow AI offers, and how AI can help small businesses
- Keep responses concise, warm, and jargon-free
- For pricing, direct users to book a free strategy call
- For booking, direct users to the Contact page or the "Book a Free Strategy Call" button
- If asked about something outside your knowledge, be honest and suggest booking a call

Tone: Knowledgeable but approachable. You make AI feel exciting, not scary. Never condescending. Always helpful.`;

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({ error: "AI assistant is not configured yet. Please contact us directly at support@nueraflowai.com" }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();

  if (!messages || !Array.isArray(messages)) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const stream = await client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    messages: messages.slice(-10),
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(chunk.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
