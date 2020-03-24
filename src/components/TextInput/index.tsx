import React, { FunctionComponent } from "react";
import { IInputProps } from "./interface";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextInput: FunctionComponent<IInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  const containerClassNames = [styles.inputContainer];
  if (error) containerClassNames.push(styles.error);

  const labelClassNames = [styles.labelInput];
  if (props.placeholder || meta.value !== "") labelClassNames.push(styles.notAnimated);

  return (
    <div className={classNames(...containerClassNames)}>
      <input className={styles.textInput} {...field} {...props} />
      <label className={classNames(...labelClassNames)} htmlFor={props.name}>{label}</label>
      {error && <div className={styles.errorMessage}>{meta.error}</div>}
    </div>
  );
};

export default TextInput;
