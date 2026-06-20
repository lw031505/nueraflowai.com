import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description, slug, tags, content, date } = await req.json();
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO ?? "lw031505/nueraflowai.com";

  if (!token) {
    return Response.json({ error: "GITHUB_TOKEN not configured in environment variables." }, { status: 503 });
  }

  const postDate = date ?? new Date().toISOString().split("T")[0];
  const filename = `${slug}.md`;
  const frontmatter = `---\ntitle: "${title}"\ndescription: "${description}"\ndate: "${postDate}"\nslug: "${slug}"\ntags: ${JSON.stringify(tags)}\n---\n\n`;
  const fileContent = frontmatter + content;
  const encoded = Buffer.from(fileContent).toString("base64");

  const url = `https://api.github.com/repos/${repo}/contents/content/blog/${filename}`;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${token}`,
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
      message: `Add blog post: ${title}`,
      content: encoded,
      committer: { name: "NuEraFlow AI", email: "nueraflow@gmail.com" },
    }),
  });

  if (res.ok) {
    return Response.json({ ok: true, slug });
  }

  const err = await res.json();
  return Response.json({ error: err.message ?? "GitHub API error." }, { status: 500 });
}
