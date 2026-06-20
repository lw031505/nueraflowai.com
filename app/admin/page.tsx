"use client";

import { useState } from "react";
import { Lock, Sparkles, Copy, Check, RefreshCw, Loader2 } from "lucide-react";

type AuthState = "idle" | "loading" | "error" | "authed";

interface LinkedInPost { type: string; content: string; }

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState<AuthState>("idle");
  const [authError, setAuthError] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setAuthState("loading");
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.ok) {
      setAuthState("authed");
    } else {
      setAuthState("error");
      setAuthError(data.error ?? "Incorrect password.");
    }
  }

  if (authState !== "authed") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Lock size={24} className="text-blue-400" />
            </div>
            <h1 className="text-2xl font-extrabold text-ink">Admin Panel</h1>
            <p className="text-muted text-sm mt-1">NuEraFlow AI Content Engine</p>
          </div>
          <form onSubmit={login} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-card border border-white/[0.08] text-ink placeholder:text-muted text-sm outline-none focus:border-blue-500/50 transition-all"
              autoFocus
            />
            {authState === "error" && (
              <p className="text-xs text-red-400 text-center">{authError}</p>
            )}
            <button
              type="submit"
              disabled={authState === "loading" || !password}
              className="py-3 rounded-full font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-500 text-white disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {authState === "loading" ? <><Loader2 size={15} className="animate-spin" /> Checking...</> : "Enter"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Admin</p>
          <h1 className="text-3xl font-extrabold gradient-text-hero">Content Engine</h1>
          <p className="text-muted text-sm mt-1">Generate LinkedIn posts with AI. All free.</p>
        </div>

        <div className="flex flex-col gap-10">
          <LinkedInGenerator />
        </div>
      </div>
    </div>
  );
}

/* ─── LinkedIn Post Generator ─────────────────────────── */
function LinkedInGenerator() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  async function generate() {
    setLoading(true);
    setPosts([]);
    try {
      const res = await fetch("/api/generate-posts", { method: "POST" });
      const data = await res.json();
      setPosts(data.posts ?? []);
    } catch {
      alert("Error generating posts. Check your GROQ_API_KEY.");
    } finally {
      setLoading(false);
    }
  }

  function copy(text: string, i: number) {
    navigator.clipboard.writeText(text);
    setCopied(i);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section className="rounded-2xl bg-card border border-white/[0.07] overflow-hidden">
      <div className="flex items-center justify-between gap-4 p-6 border-b border-white/[0.07]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
            <Sparkles size={18} className="text-blue-400" />
          </div>
          <div>
            <h2 className="text-base font-bold text-ink">LinkedIn Post Generator</h2>
            <p className="text-xs text-muted">Generates 5 ready-to-post drafts in your voice</p>
          </div>
        </div>
        <button
          onClick={generate}
          disabled={loading}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white disabled:opacity-50 hover:-translate-y-0.5 transition-all"
        >
          {loading ? <><Loader2 size={14} className="animate-spin" /> Generating...</> : <><RefreshCw size={14} /> Generate 5 Posts</>}
        </button>
      </div>

      {posts.length > 0 && (
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {posts.map((post, i) => (
            <div key={i} className="p-6">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {post.type}
                </span>
                <button
                  onClick={() => copy(post.content, i)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-ink transition-colors"
                >
                  {copied === i ? <><Check size={13} className="text-green-400" /> Copied!</> : <><Copy size={13} /> Copy</>}
                </button>
              </div>
              <p className="text-sm text-muted leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>
          ))}
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div className="p-8 text-center text-muted text-sm">
          Click &quot;Generate 5 Posts&quot; to get LinkedIn content drafts ready to copy and post.
        </div>
      )}
    </section>
  );
}

