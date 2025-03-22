import React, { useState, ChangeEvent, HTMLProps, useRef } from "react";
import { Button } from "@src/components/Button";
import { FieldWrapper } from "../FieldWrapper";
import { Close } from "@src/components/Icons";
import "./FileUploader.scss";

interface ImageUploadProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  isTouched?: boolean;
  isDirty?: boolean;
  onImageChange: (file: File | null) => void;
  imageUrl?: string;
  accept?: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  isDirty,
  isTouched,
  errorMessage,
  accept = "image/*",
  onImageChange,
  imageUrl,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(imageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      onImageChange(null);
      setPreviewUrl(null);
    }
  };

  const handleClear = () => {
    setPreviewUrl(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <FieldWrapper
      isDirty={isDirty}
      isTouched={isTouched}
      errorMessage={errorMessage}
    >
      <div className="upload-field__wrapper">
        <input
          type="file"
          accept={accept}
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        {previewUrl && (
          <div className="upload-field__preview">
            <img
              src={previewUrl}
              alt="Preview"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <Button
              isFlat
              onClick={handleClear}
              className="upload-field__clear"
            >
              <Close size="20" />
            </Button>
          </div>
        )}
      </div>
    </FieldWrapper>
  );
};
