import { BlogItem } from "@src/features/Blog/BlogItem";
import { ListWrapper } from "@src/components/ListWrapper";
import { getBlogPosts } from "../../services/httpClient";

export default async function blogListServer() {
  const blogsResponse = await getBlogPosts();

  return (
    <>
      <h1>List of articles</h1>
      <ListWrapper>
        {blogsResponse.map((value) => (
          <BlogItem key={value.slug} item={value} />
        ))}
      </ListWrapper>
    </>
  );
}

export const dynamic = "force-dynamic";
