import React, { FunctionComponent } from "react";
import { IInputProps } from "./interface";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextInput: FunctionComponent<IInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;
  const hasValue = props.placeholder || meta.value !== "";
  return (
    <div className={classNames(styles.inputContainer, {[styles.error]: error})}>
      <input className={styles.textInput} {...field} {...props} />
      <label className={classNames(styles.labelInput, { [styles.withoutTransform]: hasValue })}
             htmlFor={props.name}>
        {label}
      </label>
      {error && <div className={styles.errorMessage}>{meta.error}</div>}
    </div>
  );
};

export default TextInput;
