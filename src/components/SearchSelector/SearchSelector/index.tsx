import { FastField, FieldProps } from "formik";
import React from "react";
import { BaseSearchSelector, IBaseSelectorProps } from "../BaseSearchSelector";

export const SearchSelector = <Option, Value>(
  {
    name,
    validate,
    getOptionValue,
    ...props
  }: ISelectorProps<Option, Value>
) => (
  <FastField name={name} validate={validate}>
    {({ meta, form }: FieldProps<Value>) => (
      <BaseSearchSelector
        {...props}
        disabled={form.isSubmitting}
        onBlur={() => form.setFieldTouched(name, true)}
        onChange={(_, option) =>
          form.setFieldValue(name, option ? getOptionValue(option) : undefined)
        }
        getOptionValue={getOptionValue}
        errorMessage={meta.touched ? meta.error : undefined}
      />
    )}
  </FastField>
);

interface ISelectorProps<Option, Value> extends IBaseSelectorProps<Option, Value> {
  name: string;
  validate?: (option?: Option) => string | undefined;
}
