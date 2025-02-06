"use client";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  PostInterface,
  PostValidationSchema,
} from "@src/app/types/PostInterface";
import { getUrl, IDENTIFIERS } from "@src/app/utils";

export default function AddBlogClient() {
  type ValueType = Omit<PostInterface, "id">;

  const router = useRouter();
  const initialValues = {
    title: "",
    content: "",
    author: "",
    tags: [],
  };

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ValueType>({
    defaultValues: initialValues,
    resolver: zodResolver(PostValidationSchema.omit({ id: true })),
    mode: "all",
  });

  const submitFunction: SubmitHandler<ValueType> = async (data) => {
    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(data),
    });
    router.push(getUrl(IDENTIFIERS.BLOG));
  };

  return (
    <div>
      <Link href={getUrl(IDENTIFIERS.BLOG)}>Go to list</Link>
      <h2>Add new post</h2>
      <form onSubmit={handleSubmit(submitFunction)}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" {...register("title")} />
          <br />
          {errors.title && (
            <small style={{ color: "red" }}>{errors.title.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <br />
          <textarea id="content" {...register("content")} />
          <br />
          {errors.content && (
            <small style={{ color: "red" }}>{errors.content.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <br />
          <input id="author" type="text" {...register("author")} />
          <br />
          {errors.author && (
            <small style={{ color: "red" }}>{errors.author.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="tags">Tags</label>
          <br />
          <Controller
            control={control}
            name="tags"
            render={({ field }) => (
              <input
                {...field}
                value={field.value?.join(" ") || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  const tagsArray = value.split(" ");
                  setValue("tags", tagsArray);
                }}
                placeholder="Enter tags separated by spaces"
              />
            )}
          />
          <br />
          {errors.tags && (
            <small style={{ color: "red" }}>{errors.tags.message}</small>
          )}
        </div>

        <button type="submit">{isSubmitting ? "Submitting" : "Summit"}</button>
      </form>
    </div>
  );
}
