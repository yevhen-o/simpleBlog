import { PostInterface } from "../../types/PostInterface";
import { countCommas, countDots } from "../../utils";

export const posts = [
  {
    id: "1",
    title: "Man on the Moon",
    content:
      "On July 20, 1969, Apollo 11 astronaut Neil Armstrong became the first human to walk on the Moon, marking a significant achievement in space exploration.",
    author: "John Doe",
    tags: ["space", "NASA", "history"],
  },
  {
    id: "2",
    title: "Vytal Taking Over the World",
    content:
      "Vytal, a revolutionary tech company, is changing the world with its innovative products and services. From AI to sustainable energy solutions, Vytal is at the forefront of technological advancement.",
    author: "Jane Smith",
    tags: ["technology", "innovation", "future"],
  },
  {
    id: "3",
    title: "The Rise of Remote Work",
    content:
      "The global pandemic has accelerated the trend of remote work, making it a permanent fixture in many industries. This article explores the benefits and challenges of working from home.",
    author: "Alice Johnson",
    tags: ["remote work", "pandemic", "future of work"],
  },
  {
    id: "4",
    title: "The Importance of Mental Health",
    content:
      "Mental health awareness is growing, and it's essential to understand the impact of mental health on overall well-being. This post delves into ways to maintain good mental health.",
    author: "Bob Brown",
    tags: ["mental health", "well-being", "self-care"],
  },
  {
    id: "5",
    title: "Exploring the Depths of the Ocean",
    content:
      "The ocean is the final frontier on Earth. Scientists are continually discovering new species and geological formations in the deep sea, unveiling the mysteries of the underwater world.",
    author: "Charlie Green",
    tags: ["oceanography", "science", "exploration"],
  },
];

export function getPosts() {
  return posts;
}

export async function GET() {
  return Response.json(posts);
}

export async function POST(request: Request) {
  const post = (await request.json()) as PostInterface;
  const newPost = {
    ...post,
    id: (posts.length + 1).toString(),
    commaCount: countCommas(post.content),
    dotCount: countDots(post.content),
    tags: post.tags || [],
  };
  posts.push(newPost);

  return new Response(JSON.stringify(newPost), {
    headers: { ContentType: "application/json" },
    status: 201,
  });
}
