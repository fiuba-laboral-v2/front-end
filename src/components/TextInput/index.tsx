import React, { FunctionComponent, RefObject } from "react";
import { FastField, Field } from "formik";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FormikValidator } from "$models/FormikValidator";

export const TextInput: FunctionComponent<ITextInputProps> = ({
  className,
  fast = true,
  withoutMargin = false,
  mandatory = false,
  validator,
  inputRef,
  ...props
}) => {
  const fieldProps = {
    ...props,
    InputLabelProps: { required: mandatory },
    inputRef,
    className: classNames(styles.textInput, className, { [styles.withoutMargin]: withoutMargin }),
    component: TextField,
    validate: FormikValidator({ validator, mandatory })
  };
  return fast ? <FastField {...fieldProps} /> : <Field {...fieldProps} />;
};

export interface ITextInputProps {
  className?: string;
  autoComplete?: string;
  helperText?: string;
  name: string;
  type?: string;
  label: string;
  fast?: boolean;
  multiline?: boolean;
  withoutMargin?: boolean;
  mandatory?: boolean;
  validator?: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
}
