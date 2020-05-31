import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { FormikErrors } from "formik";
import { SubmitButton } from "../SubmitButton";

export const FormFooter = <Values extends { _form?: string }>(
  {
    isSubmitting,
    submitButtonText,
    className,
    errors
  }: IFormFooterProps<Values>
) => (
  <div className={classNames(styles.footer, className)}>
    <span className={styles.formError}>{errors._form}</span>
    <SubmitButton
      className="primary"
      type="submit"
      disabled={isSubmitting}
      errors={errors}
    >
      {submitButtonText}
    </SubmitButton>
  </div>
);

interface IFormFooterProps<Values> {
  isSubmitting: boolean;
  submitButtonText: string;
  className?: string;
  errors: FormikErrors<Values>;
}
