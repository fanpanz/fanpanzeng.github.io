import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import {PostRow} from "@/components/PostRow";

export default function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const posts = getAllPosts();
  const tag = searchParams.tag;

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
  const filtered = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  return (
    <div>
      <h1 className="h1" style={{ fontSize: 36 }}>Blog</h1>
      <p className="sub">Notes on engineering, AI / ML, and product thinking.</p>

      <div className="pills">
        <Link className={`pill ${!tag ? "pillActive" : ""}`} href="/blog">
          all
        </Link>
        {allTags.map((t) => (
          <Link
            key={t}
            className={`pill ${tag === t ? "pillActive" : ""}`}
            href={`/blog?tag=${encodeURIComponent(t)}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className="hr" />

      <div>
        {filtered.map((p) => (
          <PostRow key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
