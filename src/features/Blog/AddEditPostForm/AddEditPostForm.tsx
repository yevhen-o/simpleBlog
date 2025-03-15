"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@src/hooks/useAuth";
import { Button } from "@src/components/Button";
import { useCustomFormContext } from "@src/hooks";
import { isSlugInUse, postNewBlog } from "@src/services/clientHttpClient";
import { ControlledTextArea } from "@src/components/Form/TextArea";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { ControlledTagsField } from "@src/components/Form/TagsField";
import { PostInterface, PostValidationSchema } from "@src/types/PostInterface";
import { ControlledInputField } from "@src/components/Form/InputField";
import { getUrl, IDENTIFIERS, maskEmail, titleToSlug } from "@src/utils";

import "./AddEditPostForm.scss";

export const AddEditPostForm: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();

  const initialValues = {
    slug: "",
    title: "",
    content: "",
    author: "",
    tags: [],
  };

  const submitFunction = async (
    data: Omit<PostInterface, "createdAt" | "authorId">
  ) => {
    try {
      await postNewBlog({
        ...data,
        createdAt: Date.now().toString(),
        authorId: user!.uid,
      });
      router.push(getUrl(IDENTIFIERS.BLOG));
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="post-form__wrapper">
      <ControlledForm<Omit<PostInterface, "createdAt" | "authorId">>
        schema={PostValidationSchema.omit({ createdAt: true, authorId: true })}
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
    setTouchedField,
    setError,
    setAllFieldsTouched,
    formState: { isSubmitting, isDirty, errors },
  } = useCustomFormContext<PostInterface>();

  const [customSlug, setCustomSlug] = useState(false);
  const [slugIsUsed, setSlugIsUsed] = useState(false);

  const { user } = useAuth();

  const title = watch("title");
  const slug = watch("slug");

  useEffect(() => {
    if (!user) return;

    setValue("author", user.displayName || maskEmail(user.email || ""));
  }, [user, setValue]);

  const getSlug = () => {
    if (!title || customSlug) return;

    const newSlug = titleToSlug(title);
    setTouchedField("slug");
    setValue("slug", newSlug);
    checkSlug(newSlug);
  };

  const checkSlug = async (slug: string) => {
    const isInUse = await isSlugInUse(slug);
    if (isInUse) {
      setError("slug", { message: "Slug already in use" });
    } else {
      setError("slug", {});
    }
    setSlugIsUsed(isInUse);
  };

  const handleSlugBlur = async () => {
    if (!slug) return;
    checkSlug(slug);
  };

  console.log(errors);

  return (
    <>
      <ControlledInputField<PostInterface>
        name="title"
        placeholder="Title"
        onBlur={getSlug}
      />
      {errors.slug?.message && !customSlug && (
        <div style={{ transform: "translate(0, -35px)" }}>
          <small className="post-form__error">
            Slug <strong>{slug}</strong> already in use.{" "}
            <Button
              onClick={() => {
                setCustomSlug(true);
              }}
              isFlat
            >
              Set custom
            </Button>
          </small>
        </div>
      )}
      {customSlug && (
        <ControlledInputField<PostInterface>
          name="slug"
          placeholder="Custom slug"
          onBlur={handleSlugBlur}
        />
      )}

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
        disabled={isSubmitting || slugIsUsed}
        onClick={setAllFieldsTouched}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </Button>
      {isDirty && <Button onClick={() => reset()}>Reset</Button>}
    </>
  );
};
