import React from "react";
import { Form, Formik } from "formik";
import classNames from "classnames";

import { PasswordField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";

import styles from "./styles.module.scss";
import { IComponentProps } from "./interface";

const formName = "logInForm";

export const LogInForm = <TVariables,>({
  className,
  title,
  fields,
  footer,
  translations,
  initialValues,
  onSubmit
}: IComponentProps<TVariables>) => (
  <>
    <div className={classNames(styles.mainContainer, className)}>
      {title && <span className={styles.title}>{title}</span>}
      <Formik initialValues={initialValues} validateOnMount onSubmit={onSubmit}>
        {({ isSubmitting, errors }) => (
          <div className={styles.body}>
            <Form className={styles.formContainer} id={formName}>
              {fields}
              <PasswordField
                className={styles.password}
                label={translations.password}
                name="password"
                validate
                autoComplete="current-password"
              />
            </Form>
            <div className={styles.footer}>
              <SubmitButton
                form={formName}
                kind="primary"
                width="expand"
                type="submit"
                disabled={isSubmitting}
                errors={errors}
              >
                {translations.logIn}
              </SubmitButton>
              {footer}
            </div>
          </div>
        )}
      </Formik>
    </div>
  </>
);
