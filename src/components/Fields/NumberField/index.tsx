import React, { FunctionComponent } from "react";
import { FastField, Field, FieldProps } from "formik";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { TextField } from "@material-ui/core";
import { isNil } from "lodash";
import { FormikValidator } from "$models/FormikValidator";
import { EMPTY_SPACE } from "$models/emptySpace";

export const NumberField: FunctionComponent<INumberFieldProps> = ({
  name,
  label,
  helperText = EMPTY_SPACE,
  className,
  validator,
  singleLine = false,
  fast = true,
  withoutMargin = false,
  mandatory = false
}) => {
  const fieldProps = {
    name,
    validate: FormikValidator({ validator, mandatory }),
    children: ({ meta, form }: FieldProps<number>) => {
      const setFormValue = (stringValue: string) =>
        form.setFieldValue(name, stringValue === "" ? null : Number(stringValue.replace(",", ".")));

      return (
        <TextField
          InputLabelProps={{ required: mandatory }}
          label={label}
          className={classNames(styles.textInput, className, {
            [styles.withoutMargin]: withoutMargin
          })}
          multiline={!singleLine}
          defaultValue={isNaN(meta.value) || isNil(meta.value) ? "" : meta.value.toString(10)}
          onBlur={() => form.setFieldTouched(name, true)}
          onFocus={event => setFormValue(event.target.value)}
          onChange={event => setFormValue(event.target.value)}
          disabled={form.isSubmitting}
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error ? meta.error : helperText}
        />
      );
    }
  };
  return fast ? <FastField {...fieldProps} /> : <Field {...fieldProps} />;
};

export interface IBaseNumberField {
  name: string;
  label: string;
  helperText?: string;
  className?: string;
  singleLine?: boolean;
  fast?: boolean;
  mandatory?: boolean;
  withoutMargin?: boolean;
}

export interface INumberFieldProps extends IBaseNumberField {
  validator: (value: number) => void;
}
