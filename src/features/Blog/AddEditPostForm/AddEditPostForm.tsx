"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@src/hooks/useAuth";
import { Button } from "@src/components/Button";
import { useCustomFormContext } from "@src/hooks";
import { postNewBlog } from "@src/services/clientHttpClient";
import { ControlledTextArea } from "@src/components/Form/TextArea";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { ControlledTagsField } from "@src/components/Form/TagsField";
import { PostInterface, PostValidationSchema } from "@src/types/PostInterface";
import { ControlledInputField } from "@src/components/Form/InputField";
import { getUrl, IDENTIFIERS, maskEmail, titleToSlug } from "@src/utils";

import "./AddEditPostForm.scss";

export const AddEditPostForm: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    title: "",
    content: "",
    author: "",
    tags: [],
  };

  const submitFunction = async (data: PostInterface) => {
    try {
      await postNewBlog(data);
      router.push(getUrl(IDENTIFIERS.BLOG));
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="post-form__wrapper">
      <ControlledForm<PostInterface>
        schema={PostValidationSchema}
        onSubmit={submitFunction}
        defaultValues={initialValues}
      >
        <AddEditFormFields />
      </ControlledForm>
    </div>
  );
};

const AddEditFormFields: React.FC = () => {
  const {
    reset,
    watch,
    setValue,
    setAllFieldsTouched,
    formState: { isSubmitting, isDirty },
  } = useCustomFormContext<PostInterface>();

  const { user } = useAuth();

  const title = watch("title");

  useEffect(() => {
    if (!user) return;

    setValue("author", user.displayName || maskEmail(user.email || ""));
  }, [user, setValue]);

  useEffect(() => {
    const newSlug = titleToSlug(title);
    setValue("id", newSlug);
  }, [title, setValue]);
  return (
    <>
      <ControlledInputField<PostInterface> name="title" placeholder="Title" />
      <ControlledTextArea<PostInterface>
        name="content"
        placeholder="Content"
        rows={5}
      />
      <ControlledInputField<PostInterface> name="author" placeholder="Author" />
      <ControlledTagsField<PostInterface>
        name="tags"
        placeholder="Tags separated by space"
      />

      <Button
        isPrimary
        type="submit"
        className="post-form__button"
        disabled={isSubmitting}
        onClick={setAllFieldsTouched}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
      {isDirty && <Button onClick={() => reset()}>Reset</Button>}
    </>
  );
};
