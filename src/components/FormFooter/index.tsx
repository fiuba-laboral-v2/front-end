import React, { FunctionComponent } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const FormFooter: FunctionComponent<IFormFooterProps> = (
  {
    isSubmitting,
    formError,
    submitButtonText,
    className
  }
) => {
  return (
    <div className={classNames(styles.footer, className)}>
      <span className={styles.formError}>{formError}</span>
      <Button
        className="primary"
        type="submit"
        disabled={isSubmitting}
      >
        {submitButtonText}
      </Button>
    </div>
  );
};

interface IFormFooterProps {
  isSubmitting: boolean;
  formError?: string;
  submitButtonText: string;
  className?: string;
}
