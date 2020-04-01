import { Field, FieldMetaProps, FormikBag } from "formik";
import React, { ChangeEvent, FunctionComponent } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface ISelectorOption {
  value: string;
  label: string;
}

interface ISelectorProps {
  name: string;
  label?: string;
  options: ISelectorOption[];
  className?: string;
  validate?: (option?: string) => string | undefined;
}

export const Selector: FunctionComponent<ISelectorProps> = (
  {
    name,
    label,
    options,
    className,
    validate
  }) => (
  <Field name={name} validate={validate}>
    {(
      {
        meta,
        form
      }: {
        meta: FieldMetaProps<string>,
        form: FormikBag<ISelectorProps, string>
      }
    ) => {
      const setValue = (value?: string) => {
        form.setFieldValue(name, value);
        form.setFieldTouched(name, true);
      };

      return (
        <Autocomplete<ISelectorOption>
          className={classNames(className, styles.selector)}
          options={options}
          getOptionLabel={option => option.label}
          onChange={(event: ChangeEvent<{}>, option: ISelectorOption | null) => {
            setValue(option?.value);
          }}
          onBlur={() => {
            setValue(meta.value);
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
