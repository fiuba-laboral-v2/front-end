import React from "react";
import { flatten } from "lodash";
import classNames from "classnames";
import { FormikErrors } from "formik";

import { SubmitButton } from "$components/SubmitButton";
import styles from "./styles.module.scss";

export const FormFooter = <Values extends { _form?: string | string[] }>(
  {
    onSubmit,
    isSubmitting,
    submitButtonText,
    className,
    errors
  }: IFormFooterProps<Values>
) => {
  const formErrors = errors?._form as (string | string[]) || [];
  return (
    <div className={classNames(styles.footer, className)}>
      {
        flatten(formErrors).map((error: string) =>
          <span key={error} className={styles.formError}>{error}</span>
        )
      }
      <SubmitButton
        kind="primary"
        disabled={isSubmitting}
        errors={errors}
        onClick={onSubmit}
        {...(!onSubmit && { type: "submit" })}
      >
        {submitButtonText}
      </SubmitButton>
    </div>
  );
};

interface IFormFooterProps<Values> {
  onSubmit?: () => void;
  isSubmitting: boolean;
  submitButtonText: string;
  className?: string;
  errors: FormikErrors<Values>;
}
