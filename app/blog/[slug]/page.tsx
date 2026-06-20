import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { marked } from "marked";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/content";
import { getBlogPostSchema, getFAQSchema } from "@/lib/schema";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: SITE.founder }],
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const html = marked(post.content) as string;

  // Extract FAQs from post content for schema (format: **Q: ...** \n answer)
  const faqMatches = [...post.content.matchAll(/\*\*Q:\s*(.+?)\*\*\s*\n+([^*\n][^\n]+(?:\n(?!\n|\*\*)[^\n]+)*)/g)];
  const faqs = faqMatches.map((m) => ({ q: m[1].trim(), a: m[2].trim() }));

  const blogSchema = getBlogPostSchema(post.title, post.description, post.date, post.slug);
  const faqSchema = faqs.length > 0 ? getFAQSchema(faqs) : null;

  return (
    <article className="pt-36 pb-28 px-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Tag size={10} /> {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight gradient-text-hero leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-muted text-lg leading-relaxed">{post.description}</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xs font-black text-white">
              LW
            </div>
            <span className="text-sm text-muted">By <span className="text-ink">{SITE.founder}</span></span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-transparent mb-10" />

        {/* Content */}
        <div
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-transparent text-center">
          <h3 className="text-xl font-bold text-ink mb-3">Ready to apply this to your business?</h3>
          <p className="text-muted text-sm mb-6">Book a free 30-minute strategy call with Lucas — no pitch, just clarity on your next step with AI.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </article>
  );
}
