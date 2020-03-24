import React, { FunctionComponent } from "react";
import { IInputProps } from "./interface";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextInput: FunctionComponent<IInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  const containerClassNames = [styles.inputContainer];
  const error = meta.touched && meta.error;
  if (error) containerClassNames.push(styles.error);
  if (!props.placeholder) props.placeholder = label;

  return (
    <div className={classNames(...containerClassNames)}>
      <label className={styles.labelInput} htmlFor={props.name}>{label}</label>
      <input className={styles.textInput} {...field} {...props} />
      {error && <div className={styles.errorMessage}>{meta.error}</div>}
    </div>
  );
};

export default TextInput;
