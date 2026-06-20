import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Tips & Insights for Small Business",
  description: `Practical AI tips, tutorials, and guides for small business owners from ${SITE.founder} at ${SITE.name}.`,
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-36 pb-28 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Blog</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight gradient-text-hero mb-6 leading-tight">
            AI for Business, Plain and Simple
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl">
            Practical guides to help small business owners use AI without the overwhelm.
          </p>
        </AnimatedSection>

        {posts.length === 0 ? (
          <AnimatedSection delay={100}>
            <div className="rounded-2xl bg-card border border-white/[0.07] p-12 text-center">
              <p className="text-muted">First posts coming soon. Check back shortly.</p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="p-8 rounded-2xl bg-card border border-white/[0.07] card-border card-hover-border hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                      </span>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-ink mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-4">{post.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all duration-200">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
