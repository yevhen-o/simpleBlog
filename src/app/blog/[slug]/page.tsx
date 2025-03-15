import { BlogArticle } from "@src/features/Blog/BlogArticle";
import { getBlogBySlug } from "@src/services/httpClient";

export default async function blogServer({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return <BlogArticle article={Object.values(blog)[0]} />;
}
