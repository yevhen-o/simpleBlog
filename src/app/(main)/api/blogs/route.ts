import { PostInterface } from "@src/types/PostInterface";
import { countCommas, countDots } from "@src/utils";
import { readJsonFile, writeJsonFile } from "@src/data/handlers";

export async function GET() {
  const posts = readJsonFile() || [];
  return Response.json(posts);
}

export async function POST(request: Request) {
  const posts = readJsonFile() || [];
  const post = (await request.json()) as PostInterface;
  const newPost = {
    ...post,
    id: (posts.length + 1).toString(),
    commaCount: countCommas(post.content),
    dotCount: countDots(post.content),
    tags: post.tags || [],
  };

  posts.push(newPost);
  writeJsonFile(posts);

  return new Response(JSON.stringify(newPost), {
    headers: { ContentType: "application/json" },
    status: 201,
  });
}
