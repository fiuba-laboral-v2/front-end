import React, { FunctionComponent } from "react";
import { Field } from "formik";
import { FieldAttributes } from "formik/dist/Field";
import { TextField } from "formik-material-ui";
import styles from "./styles.module.scss";

const TextInput: FunctionComponent<FieldAttributes<any>> = props => (
  <Field
    {...props}
    className={styles.textInput}
    component={TextField}
  />
);

export default TextInput;
