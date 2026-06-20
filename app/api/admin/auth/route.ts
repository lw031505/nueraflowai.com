import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const correct = process.env.ADMIN_PASSWORD;

  if (!correct) {
    return Response.json({ error: "ADMIN_PASSWORD not configured in environment variables." }, { status: 503 });
  }

  if (password === correct) {
    return Response.json({ ok: true });
  }

  return Response.json({ ok: false, error: "Incorrect password." }, { status: 401 });
}
