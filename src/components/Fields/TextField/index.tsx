import React, { FunctionComponent, RefObject } from "react";
import { FastField, Field } from "formik";
import { TextField as MaterialTextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FormikValidator } from "$models/FormikValidator";

export const TextField: FunctionComponent<ITextFieldProps> = ({
  className,
  fast = true,
  withoutMargin = false,
  mandatory = false,
  validator,
  inputRef,
  autoFocus,
  ...props
}) => {
  const fieldProps = {
    ...props,
    InputLabelProps: { required: mandatory },
    inputRef,
    InputProps: { autoFocus },
    className: classNames(styles.textInput, className, { [styles.withoutMargin]: withoutMargin }),
    component: MaterialTextField,
    validate: FormikValidator({ validator, mandatory })
  };
  return fast ? <FastField {...fieldProps} /> : <Field {...fieldProps} />;
};

export interface ITextFieldProps {
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
  autoFocus?: boolean;
  validator?: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
}
