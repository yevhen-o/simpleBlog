"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@src/app/components/Button";
import { InputField } from "@src/app/components/Form/InputField";
import {
  PostInterface,
  PostValidationSchema,
} from "@src/app/types/PostInterface";
import { TextArea } from "@src/app/components/Form/TextArea";
import { postNewBlog } from "@src/app/services/httpClient";
import { getUrl, IDENTIFIERS } from "@src/app/utils";
import "./AddEditPostForm.scss";

export const AddEditPostForm: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    title: "",
    content: "",
    author: "",
    tags: [],
  };

  const submitFunction: SubmitHandler<Omit<PostInterface, "id">> = async (
    data
  ) => {
    await postNewBlog(data);
    router.push(getUrl(IDENTIFIERS.BLOG));
  };

  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof PostInterface, boolean>>
  >({});

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm<PostInterface>({
    defaultValues: initialValues,
    resolver: zodResolver(PostValidationSchema.omit({ id: true })),
    mode: "all",
  });

  const handleBlur = (field: keyof PostInterface) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div className="post-form__wrapper">
      <form onSubmit={handleSubmit(submitFunction)} className="post-form__form">
        <Controller
          name={"title"}
          control={control}
          render={({ field: { onBlur, ...restFieldsProps } }) => (
            <>
              <InputField
                {...restFieldsProps}
                placeholder="Title"
                onBlur={() => {
                  onBlur();
                  handleBlur("title");
                }}
                errorMessage={errors["title"]?.message}
                isTouched={touchedFields["title"]}
                isDirty={dirtyFields["title"]}
              />
            </>
          )}
        />
        <Controller
          name={"content"}
          control={control}
          render={({ field: { onBlur, ...restFieldsProps } }) => (
            <>
              <TextArea
                {...restFieldsProps}
                rows={5}
                placeholder="content"
                onBlur={() => {
                  onBlur();
                  handleBlur("content");
                }}
                errorMessage={errors["content"]?.message}
                isTouched={touchedFields["content"]}
                isDirty={dirtyFields["content"]}
              />
            </>
          )}
        />
        <Controller
          name={"author"}
          control={control}
          render={({ field: { onBlur, ...restFieldsProps } }) => (
            <>
              <InputField
                {...restFieldsProps}
                placeholder="author"
                onBlur={() => {
                  onBlur();
                  handleBlur("author");
                }}
                errorMessage={errors["author"]?.message}
                isTouched={touchedFields["author"]}
                isDirty={dirtyFields["author"]}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field: { value, onBlur, ...restFieldsProps } }) => (
            <InputField
              {...restFieldsProps}
              value={value?.join(" ") || ""}
              onChange={(e) => {
                const value = (e.target as HTMLInputElement).value;
                const tagsArray = value.split(" ");
                setValue("tags", tagsArray);
              }}
              onBlur={() => {
                onBlur();
                handleBlur("tags");
              }}
              placeholder="Enter tags separated by spaces"
              errorMessage={errors["tags"]?.message}
              isTouched={touchedFields["tags"]}
              isDirty={true}
            />
          )}
        />

        <Button
          isPrimary
          type="submit"
          className="post-form__button"
          disabled={isSubmitting}
          onClick={() =>
            setTouchedFields({
              title: true,
              content: true,
              tags: true,
              author: true,
            })
          }
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </div>
  );
};
