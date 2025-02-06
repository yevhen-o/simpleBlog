"use client";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { AddEditPostForm } from "@src/features/Blog/AddEditPostForm";

export default function AddBlogClient() {
  return (
    <div>
      <BackButtonHeading>Add new post</BackButtonHeading>
      <AddEditPostForm />
    </div>
  );
}
