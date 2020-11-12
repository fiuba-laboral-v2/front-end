import { FastField, FieldProps } from "formik";
import React from "react";
import { BaseSearchSelector, IBaseSelectorProps } from "../BaseSearchSelector";
import { FormikValidator } from "$models/FormikValidator";

export const SearchSelector = <Option, Value>({
  name,
  getOptionValue,
  helperText = " ",
  ...props
}: ISelectorProps<Option, Value>) => (
  <FastField name={name} validate={FormikValidator({ mandatory: props.mandatory })}>
    {({ meta, form }: FieldProps<Value>) => (
      <BaseSearchSelector
        {...props}
        helperText={helperText}
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
}
