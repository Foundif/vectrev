import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";
import { CTAStrip } from "@/components/CTAStrip";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title, excerpt: post.excerpt };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — VECTREV" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: `${loaderData.title} | VECTREV Insights` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function PostNotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <h1 className="text-3xl font-extrabold text-foreground">Article not found</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-accent-brand font-semibold">
        <ArrowLeft className="h-4 w-4" /> All articles
      </Link>
    </div>
  );
}

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return <PostNotFound />;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="px-5 sm:px-8 pt-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent-brand transition"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.22em] text-accent-brand">{post.tag}</div>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold heading-crisp text-foreground leading-[1.1]">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {post.readMins} min read
            </span>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          width={1280}
          height={720}
          className="mt-8 max-w-5xl mx-auto w-full rounded-[2rem] object-cover h-[300px] sm:h-[420px] shadow-card-premium"
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-10">
          {post.body.map((sec) => (
            <section key={sec.heading}>
              <h2 className="text-xl sm:text-2xl font-extrabold heading-crisp text-foreground">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p) => (
                <p key={p} className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="mt-5 space-y-2.5">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[15px] text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent-brand mt-1 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className="px-5 sm:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Keep reading</div>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            {more.map((m) => (
              <Link
                key={m.slug}
                to="/blog/$slug"
                params={{ slug: m.slug }}
                className="group rounded-2xl border border-border bg-card p-5 hover:-translate-y-1 transition shadow-card-premium"
              >
                <div className="text-[10px] uppercase tracking-widest text-accent-brand">{m.tag}</div>
                <div className="mt-2 font-semibold text-foreground flex items-start gap-2 leading-snug">
                  {m.title}
                  <ArrowUpRight className="h-4 w-4 mt-1 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:rotate-45 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="Need this on your site?"
        title="Book a technical consultation."
        subtitle="Our engineers will review your drawings and tell you exactly what the scope should be."
      />
    </>
  );
}
