import React from "react";
import { Form } from "formik";
import classNames from "classnames";

import { PasswordField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";
import { Formik } from "$components/Formik";

import styles from "./styles.module.scss";
import { IComponentProps } from "./interfaces";
import { Configuration } from "$config";
import { SeededUsers } from "../SeededUsers";

const formName = "logInForm";

export const LoginForm = <TVariables,>({
  className,
  title,
  usernameField,
  recoverPasswordLink,
  switchLoginFormLink,
  signUpLink,
  translations,
  initialValues,
  onSubmit,
  seededUsersText
}: IComponentProps<TVariables>) => (
  <div className={classNames(styles.mainContainer, className)}>
    {title && <span className={styles.title}>{title}</span>}
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, errors }) => (
        <div className={styles.body}>
          <Form className={styles.formContainer} id={formName}>
            {usernameField}
            <PasswordField
              className={styles.password}
              label={translations.password}
              name="password"
              validate={false}
              autoComplete="current-password"
              withoutMargin
            />
          </Form>
          <div className={styles.footer}>
            <SubmitButton
              className={styles.submitButton}
              form={formName}
              kind="primary"
              width="expand"
              type="submit"
              disabled={isSubmitting}
              errors={errors}
            >
              {translations.logIn}
            </SubmitButton>
            <div className={styles.links}>
              {recoverPasswordLink}
              <span className={styles.separator}>·</span>
              {signUpLink}
            </div>
            <div className={classNames(styles.links, styles.switchLoginFormLink)}>
              {switchLoginFormLink}
            </div>
          </div>
        </div>
      )}
    </Formik>
    {Configuration.show_seeded_users && <SeededUsers>{seededUsersText}</SeededUsers>}
  </div>
);
