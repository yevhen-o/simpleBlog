import { titleToSlug } from "@src/utils";
import { readJsonFile } from "@src/data/handlers";
import { PostInterface } from "@src/types/PostInterface";

type Params = Promise<{ slug: string }>;

export async function GET(_request: Request, segmentData: { params: Params }) {
  const params = await segmentData.params;
  const slug = params.slug;
  const posts = readJsonFile() || [];
  const post = posts.find(
    (post: PostInterface) => titleToSlug(post.title) === slug
  );
  return Response.json(post);
}
