import { titleToSlug } from "@src/app/utils";
import { getPosts } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  const posts = getPosts();
  const post = posts.find((post) => titleToSlug(post.title) === slug);
  return Response.json(post);
}
