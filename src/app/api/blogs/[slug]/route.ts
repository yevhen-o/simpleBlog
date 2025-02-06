import { titleToSlug } from "@src/utils";
import { readJsonFile } from "@src/data/handlers";
import { PostInterface } from "@src/types/PostInterface";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  const posts = readJsonFile() || [];
  const post = posts.find(
    (post: PostInterface) => titleToSlug(post.title) === slug
  );
  return Response.json(post);
}
