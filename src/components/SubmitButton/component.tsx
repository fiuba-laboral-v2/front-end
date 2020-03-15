import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ISubmitButtonProps } from "./interface";

const SubmitButton: FunctionComponent<ISubmitButtonProps> = (
  {
    onClick,
    text
  }) => {
  return (
    <button className={styles.submitButton} onClick={onClick}>
      {text}
    </button>
  );
};

export { SubmitButton };
