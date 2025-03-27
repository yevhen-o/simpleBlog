"use client";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { AddEditPostForm } from "@src/features/Blog/AddEditPostForm";
import { UserMenu } from "@src/features/authentication/UserMenu";
import { CreateAuthorProfile } from "@src/features/Blog/CreateAuthorProfile/CreateAuthorProfile";
import { useAuthStore } from "@src/store/authStore";

export default function BlogAddNew() {
  const { user, isAuthor } = useAuthStore();

  return (
    <div>
      <BackButtonHeading>
        {isAuthor ? "Add new post" : "Create author profile"}
      </BackButtonHeading>
      {!user && "Sorry add posts can only be done by logged in users"}
      {!user && <UserMenu />}
      {!!user && (
        <>
          {isAuthor && <AddEditPostForm />}
          {!isAuthor && <CreateAuthorProfile />}
        </>
      )}
    </div>
  );
}
