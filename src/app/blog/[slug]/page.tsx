import { BlogArticle } from "@src/app/features/Blog/BlogArticle";
import { getBlogBySlug } from "@src/app/services/httpClient";

export default async function blogServer({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return <BlogArticle article={blog} />;
}
