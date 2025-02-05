import { z } from "zod";

export const PostValidationSchema = z.object({
  id: z.string().min(1).max(256),
  title: z.string().min(3).max(256),
  content: z.string().min(15).max(1000),
  author: z.string().min(3).max(256),
  tags: z.array(z.string()).describe("List of tags").optional(),
  countCommas: z.number().optional(),
  countDots: z.number().optional(),
});

export type PostInterface = z.infer<typeof PostValidationSchema>;
