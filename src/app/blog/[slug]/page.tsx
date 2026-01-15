import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const html = await markdownToHtml(post.content);

  return (
    <article className="article">
      <h1>{post.meta.title}</h1>
      <div className="meta">
        {post.meta.minutes} min read · {post.meta.date} ·{" "}
        {post.meta.tags.map((t) => `#${t}`).join(" ")}
      </div>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
