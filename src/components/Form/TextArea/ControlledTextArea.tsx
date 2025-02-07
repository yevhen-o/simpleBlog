import { HTMLProps } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useCustomFormContext } from "@src/hooks";

import { TextArea } from "./TextArea";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  isErrorMessageHidden?: boolean;
} & HTMLProps<HTMLTextAreaElement>;

export const ControlledTextArea = <T extends FieldValues>({
  name,
  ...rest
}: InputProps<T>) => {
  const { control, touchedFields, setTouchedField } = useCustomFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onBlur, ...restFieldsProps },
        fieldState: { error, isDirty },
      }) => (
        <>
          <TextArea
            {...rest}
            {...restFieldsProps}
            onBlur={() => {
              onBlur();
              setTouchedField(name);
            }}
            errorMessage={error?.message}
            isTouched={touchedFields[name]}
            isDirty={isDirty}
          />
        </>
      )}
    />
  );
};
