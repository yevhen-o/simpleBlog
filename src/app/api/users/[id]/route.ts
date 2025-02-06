import { revalidateTag } from "next/cache";

export async function GET(
  _request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { tags: [`user--${id}`], revalidate: 120 },
  });
  const data = await res.json();
  console.log("------------------------------------------->", "Request user");
  return Response.json(data);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
  const newPost = await request.json();

  console.log("Post edited:", newPost);

  revalidateTag("users");
  revalidateTag(`user--${id}`);

  return Response.json({ success: true });
}
