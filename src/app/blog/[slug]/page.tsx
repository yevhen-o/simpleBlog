import { PostInterface } from "@src/app/types/PostInterface";
import { BlogArticle } from "@src/app/features/Blog/BlogArticle";

export default async function blogServer({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const response = await fetch(`http://localhost:3000/api/blogs/${slug}`);
  const blog = (await response.json()) as PostInterface;

  return <BlogArticle article={blog} />;
}
