import React, { FunctionComponent } from "react";
import { FastField, Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const TextInput: FunctionComponent<ITextInputProps> = ({
  className,
  fast = true,
  withoutMargin = false,
  mandatory = false,
  ...props
}) => {
  const fieldProps = {
    ...props,
    required: mandatory,
    className: classNames(styles.textInput, className, { [styles.withoutMargin]: withoutMargin }),
    component: TextField
  };
  return fast ? <FastField {...fieldProps} /> : <Field {...fieldProps} />;
};

export interface ITextInputProps extends FieldAttributes<any> {
  fast?: boolean;
  withoutMargin?: boolean;
  mandatory?: boolean;
}
