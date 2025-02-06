"use client";

import { forwardRef, HTMLProps, Ref } from "react";
import classNames from "classnames";
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
    //TODO: Move wrapper in separate file and reuse
    return (
      <div
        className={classNames("field_wrapper", {
          "field_wrapper--error": errorMessage && isTouched,
          "field_wrapper--success": !errorMessage && isDirty,
        })}
      >
        {label && <label htmlFor={textareaProps.name}>{label}</label>}
        <textarea {...textareaProps} ref={ref} />
        {!isErrorMessageHidden && errorMessage && isTouched && (
          <small>{errorMessage}</small>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
