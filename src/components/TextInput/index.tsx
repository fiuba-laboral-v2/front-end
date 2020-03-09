import React, { FunctionComponent } from "react";
import { IInputProps } from "./interface";
import { useField } from "formik";
import classNames from "classnames";

import styles from "./styles.module.scss";

const TextInput: FunctionComponent<IInputProps> = ({
   label, large, small, otherProps, ...props
  }) => {
  const [field, meta] = useField(props);
  const className = classNames({textInput: large, numberInput: small});
  return (
    <div className={styles.inputContainer}>
      {meta.touched && meta.error ? (
        <div className={styles.errorInput}>{meta.error}</div>
      ) : null}
      <input className={styles[className]} {...field} {...props} {...otherProps} />
      <label className={styles.labelInput} htmlFor={props.id || props.name}>{label}</label>

    </div>
  );
};

export default TextInput;
