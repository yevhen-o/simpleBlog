import { BlogItem } from "@src/app/features/Blog/BlogItem";
import { PostInterface } from "@src/app/types/PostInterface";
import { ListWrapper } from "@src/app/components/ListWrapper";
import { getBlogPosts } from "../services/httpClient";

export default async function blogListServer() {
  const blogs = await getBlogPosts();

  return (
    <>
      <h1>List of articles</h1>
      <ListWrapper>
        {blogs.map((blogPost: PostInterface) => (
          <BlogItem key={blogPost.id} item={blogPost} />
        ))}
      </ListWrapper>
    </>
  );
}
