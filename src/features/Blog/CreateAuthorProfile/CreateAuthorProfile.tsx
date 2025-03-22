"use client";
import { useState } from "react";
import { Button } from "@src/components/Button";
import { useCustomFormContext } from "@src/hooks";
import { useAuthStore } from "@src/store/authStore";
import { ControlledTextArea } from "@src/components/Form/TextArea";
import { createAuthorProfile } from "@src/services/clientHttpClient";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { ControlledInputField } from "@src/components/Form/InputField";
import { ImageUpload } from "@src/components/Form/FileUploader/FileUploader";
import {
  type PostAuthorCreateInterface,
  PostAuthorCreateSchema,
} from "@src/types/AuthorInterface";

export const CreateAuthorProfile: React.FC = () => {
  const user = useAuthStore((store) => store.user);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const initialValues = {
    first_name: "",
    last_name: "",
    image_url: "",
    short_bio: "",
  };

  const submitFunction = async (data: PostAuthorCreateInterface) => {
    try {
      await createAuthorProfile({
        ...data,
        image: selectedImage,
        author_id: user!.id,
      });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="post-form__wrapper">
      <ControlledForm<PostAuthorCreateInterface>
        schema={PostAuthorCreateSchema}
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
    setAllFieldsTouched,
    formState: { isSubmitting, isDirty },
  } = useCustomFormContext<PostAuthorCreateInterface>();

  return (
    <>
      <ImageUpload onImageChange={onImageChange} />
      <ControlledInputField<PostAuthorCreateInterface>
        name="first_name"
        placeholder="First name"
      />
      <ControlledInputField<PostAuthorCreateInterface>
        name="last_name"
        placeholder="Last name"
      />
      <ControlledTextArea<PostAuthorCreateInterface>
        name="short_bio"
        placeholder="Short bio"
        rows={5}
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
