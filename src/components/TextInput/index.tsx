import React, { FunctionComponent } from "react";
import { IInputProps } from "./interface";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextInput: FunctionComponent<IInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.id);
  const containerClassNames = [styles.inputContainer];
  if (meta.touched && meta.error) containerClassNames.push(styles.error);
  if (!props.placeholder) props.placeholder = label;

  return (
    <div className={classNames(...containerClassNames)}>
      <label className={styles.labelInput} htmlFor={props.id || props.name}>{label}</label>
      <input className={styles.textInput} {...field} {...props} />
      <div className={styles.errorMessage}>{meta.error}</div>
    </div>
  );
};

export default TextInput;
