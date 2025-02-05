import Link from "next/link";
import { PostInterface } from "../types/PostInterface";
import { titleToSlug } from "../utils/titleToSlug";

export default async function blogListServer() {
  const response = await fetch("http://localhost:3000/blogs");
  const blogs = await response.json();


  return (
    <>
      <Link href="blog/AddNew">Add New Post</Link>
      <ul>
        {blogs.map((b: PostInterface) => (
          <li key={b.id}>
            <Link href={`blog/${titleToSlug(b.title)}`}>
              {b.title} <small>author: {b.author}</small>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
