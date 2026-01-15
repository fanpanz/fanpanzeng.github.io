import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PostRowProps {
  post: PostMeta;
}

export function PostRow({ post }: PostRowProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="postRow">
      <div>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postSummary">{post.summary}</p>
        <div className="postMeta">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.minutes} min read</span>
          {post.tags.length > 0 && (
            <>
              <span>·</span>
              <span className="postTags">
                {post.tags.map((tag, i) => (
                  <span key={tag}>
                    {tag}
                    {i < post.tags.length - 1 && ", "}
                  </span>
                ))}
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
