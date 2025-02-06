import { titleToSlug } from "@src/app/utils";
import { readJsonFile } from "@src/app/data/handlers";
import { PostInterface } from "@src/app/types/PostInterface";

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
