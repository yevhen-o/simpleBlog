import { revalidateTag } from "next/cache";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { tags: ["users"], revalidate: 120 },
  });
  const data = await res.json();
  console.log(
    "------------------------------------------->",
    "Request list users"
  );
  return Response.json(data);
}

export async function POST(req: Request) {
  const newPost = await req.json();

  console.log("New post added:", newPost);

  revalidateTag("users");

  return Response.json({ success: true });
}
