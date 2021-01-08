import React from "react";
import { flatten } from "lodash";
import classNames from "classnames";
import { FormikErrors } from "formik";
import { isEmpty } from "$models/isEmpty";
import { SubmitButton } from "$components/SubmitButton";
import styles from "./styles.module.scss";

export const FormFooter = <Values extends { _form?: string | string[] }>({
  onSubmit,
  isSubmitting,
  submitButtonText,
  className,
  submitButtonClassName,
  errors
}: IFormFooterProps<Values>) => {
  const formErrors = (errors?._form as string | string[]) || [];
  return (
    <div className={classNames(styles.footer, className)}>
      {flatten([formErrors]).map((error: string) => (
        <span key={error} className={styles.formError}>
          {error}
        </span>
      ))}
      <SubmitButton
        className={submitButtonClassName}
        kind="primary"
        disabled={!isEmpty(errors) || isSubmitting}
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
  submitButtonText?: string;
  className?: string;
  submitButtonClassName?: string;
  errors: FormikErrors<Values>;
}
