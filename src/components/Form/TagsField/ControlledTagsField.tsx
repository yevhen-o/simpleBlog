import { HTMLProps } from "react";
import { Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { useCustomFormContext } from "@src/hooks";

import { InputField } from "../InputField";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  isErrorMessageHidden?: boolean;
} & HTMLProps<HTMLInputElement>;

export const ControlledTagsField = <T extends FieldValues>({
  name,
  ...rest
}: InputProps<T>) => {
  const { control, setValue, touchedFields, setTouchedField } =
    useCustomFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onBlur, ...restFieldsProps },
        fieldState: { error, isDirty },
      }) => (
        <InputField
          {...rest}
          {...restFieldsProps}
          value={value?.join(" ") || ""}
          onChange={(e) => {
            const value = (e.target as HTMLInputElement).value;
            const tagsArray = value.split(" ");
            setValue(
              name as Path<T>,
              tagsArray as unknown as PathValue<T, Path<T>>
            );
          }}
          onBlur={() => {
            onBlur();
            setTouchedField(name);
          }}
          errorMessage={error?.message}
          isTouched={touchedFields[name]}
          isDirty={touchedFields[name] || isDirty}
        />
      )}
    />
  );
};
