import React from "react";
import classNames from "classnames";
import { PasswordField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";
import { Formik } from "$components/Formik";
import { IComponentProps } from "./interfaces";
import { Configuration } from "$config";
import { SeededUsers } from "../SeededUsers";
import styles from "./styles.module.scss";
import { FormikForm } from "../FormikForm";
import { Link } from "../Link";
import { RoutesBuilder } from "$models/RoutesBuilder";

const formName = "logInForm";
const questionsEmail = "ayuda@fi.uba.ar";

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
  hidden,
  seededUsersText
}: IComponentProps<TVariables>) => (
  <div className={classNames(styles.mainContainer, className)} hidden={hidden}>
    <div className={styles.loginContainer}>
      {title && <span className={styles.title}>{title}</span>}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting, errors }) => (
          <div className={styles.body}>
            <FormikForm className={styles.formContainer} id={formName}>
              {usernameField}
              <PasswordField
                className={styles.password}
                label={translations.password}
                name="password"
                validate={false}
                autoComplete="current-password"
                withoutMargin
                mandatory
              />
            </FormikForm>
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
    </div>
    {Configuration.show_seeded_users && <SeededUsers>{seededUsersText}</SeededUsers>}
    <div className={styles.creditsContainer}>
      <span className={styles.creditsTitle}>{translations.creditsTitle}</span>
      <Link className={styles.seeCredits} to={RoutesBuilder.public.credits()}>
        {translations.seeCredits}
      </Link>
    </div>
    <div className={styles.questionsEmailContainer}>
      <span className={styles.questionsTitle}>{translations.questionsTitle}</span>
      <a href={`mailto: ${questionsEmail}`} target="_blank" rel="noopener noreferrer">
        {questionsEmail}
      </a>
    </div>
  </div>
);
