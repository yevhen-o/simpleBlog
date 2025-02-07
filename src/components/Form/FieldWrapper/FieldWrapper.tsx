import classNames from "classnames";
import "./FieldWrapper.scss";

export function FieldWrapper({
  children,
  errorMessage,
  isTouched,
  isDirty,
  isErrorMessageHidden = false,
}: {
  children: React.ReactNode;
  errorMessage?: string;
  isTouched?: boolean;
  isDirty?: boolean;
  isErrorMessageHidden?: boolean;
}) {
  return (
    <div
      className={classNames("field_wrapper", {
        "field_wrapper--error": errorMessage && isTouched,
        "field_wrapper--success": !errorMessage && isDirty,
      })}
    >
      {children}
      {!isErrorMessageHidden && errorMessage && isTouched && (
        <small>{errorMessage}</small>
      )}
    </div>
  );
}
