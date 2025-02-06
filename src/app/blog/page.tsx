import Link from "next/link";
import { PostInterface } from "../types/PostInterface";
import { getUrl, IDENTIFIERS, titleToSlug } from "../utils";

export default async function blogListServer() {
  const response = await fetch("http://localhost:3000/api/blogs");
  const blogs = await response.json();

  return (
    <>
      <Link href={getUrl(IDENTIFIERS.BLOG_ADD)}>Add New Post</Link>
      <ul>
        {blogs.map((b: PostInterface) => (
          <li key={b.id}>
            <Link
              href={getUrl(IDENTIFIERS.BLOG_VIEW, {
                slug: titleToSlug(b.title),
              })}
            >
              {b.title} <small>author: {b.author}</small>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
