import React, { FunctionComponent } from "react";
import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";
import classNames from "classnames";

const TextInput: FunctionComponent<FieldAttributes<any>> = ({ className, ...props }) => (
  <Field
    {...props}
    className={classNames(styles.textInput, className)}
    component={TextField}
  />
);

export default TextInput;
