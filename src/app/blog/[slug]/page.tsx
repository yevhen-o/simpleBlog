import Link from "next/link";
import { PostInterface } from "@src/app/types/PostInterface";
import { countCommas, countDots } from "@src/app/utils";

export default async function blogServer({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const response = await fetch(`http://localhost:3000/blogs/${slug}`);
  const blog = (await response.json()) as PostInterface;

  return (
    <div>
      <Link href="/blog">Go to list</Link>
      <h1>{blog.title}</h1>
      <article>{blog.content}</article>
      <div className="author">{blog.author}</div>
      <div className="tags">
        <h5>List of tags</h5>
        {blog.tags && blog.tags.map((tag) => <div key={tag}>{tag}</div>)}
      </div>
      <div>
        <h5>Details</h5>
        <div>
          Count of commas:{" "}
          {typeof blog.countCommas !== "undefined"
            ? blog.countCommas
            : countCommas(blog.content)}
        </div>
        <div>
          Count of dots:{" "}
          {typeof blog.countDots !== "undefined"
            ? blog.countDots
            : countDots(blog.content)}
        </div>
      </div>
    </div>
  );
}
