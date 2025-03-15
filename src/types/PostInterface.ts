import { z } from "zod";

export const PostValidationSchema = z.object({
  slug: z.string().min(1).max(256),
  createdAt: z.string(),
  title: z.string().min(3).max(256),
  content: z.string().min(15).max(1000),
  author: z.string().min(3).max(256),
  authorId: z.string().min(3).max(256),
  tags: z.array(z.string()).describe("List of tags").optional(),
  countCommas: z.number().optional(),
  countDots: z.number().optional(),
});

export type PostInterface = z.infer<typeof PostValidationSchema>;

export const BlogPostsValidationSchema = z.array(PostValidationSchema);
export const FirebasePostsSchema = z.record(z.string(), PostValidationSchema);
export type FirebasePostInterface = z.infer<typeof FirebasePostsSchema>;
