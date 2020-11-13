import React, { FunctionComponent, RefObject } from "react";
import { FastField, Field } from "formik";
import { TextField as MaterialTextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FormikValidator } from "$models/FormikValidator";
import { EMPTY_SPACE } from "$models/emptySpace";

export const TextField: FunctionComponent<ITextFieldProps> = ({
  className,
  fast = true,
  withoutMargin = false,
  mandatory = false,
  singleLine = false,
  helperText = EMPTY_SPACE,
  validator,
  inputRef,
  autoFocus,
  ...props
}) => {
  const fieldProps = {
    ...props,
    inputRef,
    helperText,
    multiline: !singleLine,
    InputLabelProps: { required: mandatory },
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
  singleLine?: boolean;
  withoutMargin?: boolean;
  mandatory?: boolean;
  autoFocus?: boolean;
  validator?: (value: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
}
