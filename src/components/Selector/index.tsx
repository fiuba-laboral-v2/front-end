import { Field, FieldProps } from "formik";
import React, { ChangeEvent } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { identity } from "lodash";

export const Selector = <Value extends object>(
  {
    name,
    label,
    options,
    className,
    validate,
    getOptionLabel,
    getOptionValue = identity
  }: ISelectorProps<Value>
) => (
  <Field name={name} validate={validate}>
    {({ meta, form }: FieldProps<string, ISelectorProps<Value>>) => {
      const setValue = (value?: Value | null) => {
        form.setFieldValue(name, value ? getOptionValue(value) : undefined);
        form.setFieldTouched(name, true);
      };

      return (
        <Autocomplete<Value>
          className={classNames(className, styles.selector)}
          options={options}
          getOptionLabel={getOptionLabel}
          onChange={(event: ChangeEvent<{}>, option: Value | null) => {
            setValue(option);
          }}
          renderInput={props =>
            <TextField
              {...props}
              name={name}
              label={label}
              error={!!meta.error && meta.touched}
              helperText={meta.touched && meta.error}
            />
          }
        />
      );
    }}
  </Field>
);

interface ISelectorProps<Value> {
  defaultValue?: Value;
  name: string;
  label?: string;
  options: Value[];
  className?: string;
  validate?: (option?: Value) => string | undefined;
  getOptionLabel: (option: Value) => string;
  getOptionValue?: (option: Value) => any;
}
