import { HTMLProps } from "react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { useCustomFormContext } from "@src/hooks";

import { InputField } from "./InputField";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  isErrorMessageHidden?: boolean;
} & HTMLProps<HTMLInputElement>;

export const ControlledInputField = <T extends FieldValues>({
  name,
  onBlur: propsOnBlur,
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
          <InputField
            {...rest}
            {...restFieldsProps}
            onBlur={(e) => {
              onBlur();
              if (propsOnBlur) propsOnBlur(e);
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
