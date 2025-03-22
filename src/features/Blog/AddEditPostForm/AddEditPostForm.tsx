"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@src/components/Button";
import { useCustomFormContext } from "@src/hooks";
import { useAuthStore } from "@src/store/authStore";
import { getUrl, IDENTIFIERS, titleToSlug } from "@src/utils";
import { ControlledTextArea } from "@src/components/Form/TextArea";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { ControlledTagsField } from "@src/components/Form/TagsField";
import { ControlledInputField } from "@src/components/Form/InputField";
import { isSlugInUse, postNewBlog } from "@src/services/clientHttpClient";
import { ImageUpload } from "@src/components/Form/FileUploader/FileUploader";
import { PostInterface, PostValidationSchema } from "@src/types/PostInterface";

import "./AddEditPostForm.scss";

export const AddEditPostForm: React.FC = () => {
  const router = useRouter();
  const user = useAuthStore((store) => store.user);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const initialValues = {
    slug: "",
    title: "",
    content: "",
    tags: [],
  };

  const submitFunction = async (
    data: Omit<
      PostInterface,
      "created_at" | "author_id" | "author" | "image_url"
    >
  ) => {
    try {
      await postNewBlog({
        ...data,
        image: selectedImage,
        author_id: user!.id,
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
      <ControlledForm<
        Omit<PostInterface, "created_at" | "author_id" | "author">
      >
        schema={PostValidationSchema.omit({
          created_at: true,
          author_id: true,
          author: true,
        })}
        onSubmit={submitFunction}
        defaultValues={initialValues}
      >
        <AddEditFormFields onImageChange={setSelectedImage} />
      </ControlledForm>
    </div>
  );
};

interface AddEditFormFieldsProps {
  onImageChange: (file: File | null) => void;
}

const AddEditFormFields: React.FC<AddEditFormFieldsProps> = ({
  onImageChange,
}) => {
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

  const title = watch("title");
  const slug = watch("slug");

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
    }
    setSlugIsUsed(isInUse);
  };

  const handleSlugBlur = async () => {
    if (!slug) return;
    checkSlug(slug);
  };

  return (
    <>
      <ControlledInputField<PostInterface>
        name="title"
        placeholder="Title"
        onBlur={getSlug}
      />
      {errors.slug && !customSlug && (
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
      <ImageUpload onImageChange={onImageChange} />
      <ControlledTextArea<PostInterface>
        name="content"
        placeholder="Content"
        rows={5}
      />
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
