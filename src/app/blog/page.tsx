import { BlogItem } from "@src/app/features/Blog/BlogItem";
import { PostInterface } from "@src/app/types/PostInterface";
import { ListWrapper } from "@src/app/components/ListWrapper";

export default async function blogListServer() {
  const response = await fetch("http://localhost:3000/api/blogs");
  const blogs = await response.json();

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
