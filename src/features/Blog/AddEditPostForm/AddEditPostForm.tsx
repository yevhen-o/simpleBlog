"use client";
import { useRouter } from "next/navigation";
import { Button } from "@src/components/Button";
import { ControlledInputField } from "@src/components/Form/InputField";
import { PostInterface, PostValidationSchema } from "@src/types/PostInterface";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { ControlledTextArea } from "@src/components/Form/TextArea";
import { ControlledTagsField } from "@src/components/Form/TagsField";
import { postNewBlog } from "@src/services/httpClient";
import { useCustomFormContext } from "@src/hooks";
import { getUrl, IDENTIFIERS } from "@src/utils";
import "./AddEditPostForm.scss";

export const AddEditPostForm: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    title: "",
    content: "",
    author: "",
    tags: [],
  };

  const submitFunction = async (data: Omit<PostInterface, "id">) => {
    await postNewBlog(data);
    router.push(getUrl(IDENTIFIERS.BLOG));
  };

  return (
    <div className="post-form__wrapper">
      <ControlledForm<Omit<PostInterface, "id">>
        schema={PostValidationSchema.omit({ id: true })}
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
    setAllFieldsTouched,
    formState: { isSubmitting, isDirty },
  } = useCustomFormContext<Omit<PostInterface, "id">>();
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
