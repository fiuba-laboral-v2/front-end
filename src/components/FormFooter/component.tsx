import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { SubmitButton } from "$components/SubmitButton";
import { IFormFooterProps } from "./interface";

const FormFooter: FunctionComponent<IFormFooterProps> = (
  {
    onSubmit,
    onCancel,
    saveText,
    cancelText
  }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.separator}/>
      <SubmitButton onClick={onCancel} text={cancelText}/>
      <SubmitButton onClick={onSubmit} text={saveText}/>
    </div>
  );
};

export { FormFooter };
