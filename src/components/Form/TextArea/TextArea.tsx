"use client";

import { forwardRef, HTMLProps, Ref } from "react";
import { FieldWrapper } from "../FieldWrapper";
import "./TextArea.scss";

interface TextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  isTouched?: boolean;
  isDirty?: boolean;
  isErrorMessageHidden?: boolean;
}

export const TextArea = forwardRef(
  (props: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
    const {
      label,
      errorMessage,
      isTouched,
      isDirty,
      isErrorMessageHidden = false,
      ...textareaProps
    } = props;
    return (
      <FieldWrapper
        isDirty={isDirty}
        isTouched={isTouched}
        errorMessage={errorMessage}
        isErrorMessageHidden={isErrorMessageHidden}
      >
        <div className="textarea-field__wrapper">
          {label && <label htmlFor={textareaProps.name}>{label}</label>}
          <textarea {...textareaProps} ref={ref} />
        </div>
      </FieldWrapper>
    );
  }
);

TextArea.displayName = "TextArea";
