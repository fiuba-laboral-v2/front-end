import React, { FunctionComponent } from "react";
import { FastField, Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

const TextInput: FunctionComponent<FieldAttributes<any> & { fast?: boolean }> = (
  {
    className,
    fast = true,
    ...props
  }
) => {
  const fieldProps = {
    ...props,
    className: classNames(styles.textInput, className),
    component: TextField
  };
  return fast ? <FastField {...fieldProps}/> : <Field {...fieldProps}/>;
};

export default TextInput;
