import { Field, FieldProps } from "formik";
import React from "react";
import { BaseSelector, IBaseSelectorProps } from "../BaseSelector";

export const Selector = <Option, Value>(
  {
    name,
    validate,
    getOptionValue,
    ...props
  }: ISelectorProps<Option, Value>
) => {
  return (
    <Field name={name} validate={validate}>
      {({ meta, form }: FieldProps) => (
        <BaseSelector
          {...props}
          onBlur={() => form.setFieldTouched(name, true)}
          onChange={(event, option) =>
            form.setFieldValue(name, option ? getOptionValue(option) : undefined)
          }
          getOptionValue={getOptionValue}
          errorMessage={meta.touched ? meta.error : undefined}
        />
      )}
    </Field>
  );
};

interface ISelectorProps<Option, Value> extends IBaseSelectorProps<Option, Value> {
  name: string;
  validate?: (option?: Option) => string | undefined;
}
