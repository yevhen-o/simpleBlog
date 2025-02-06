"use client";
import { BackButtonHeading } from "@src/app/components/BackButtonHeading";
import { AddEditPostForm } from "@src/app/features/Blog/AddEditPostForm";

export default function AddBlogClient() {
  return (
    <div>
      <BackButtonHeading>Add new post</BackButtonHeading>
      <AddEditPostForm />
    </div>
  );
}
