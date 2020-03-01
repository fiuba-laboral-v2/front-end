import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IFormFooterProps } from "./interface";

const FormFooter: FunctionComponent<IFormFooterProps> = (
  {
    onSubmit,
    onCancel
  }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.separator}/>
      <button className={styles.submitButton} onClick={onCancel}>
        cancel
      </button>
      <button className={styles.submitButton} onClick={onSubmit}>
        save
      </button>
    </div>
  );
};

export { FormFooter };
