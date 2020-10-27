import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import classNames from "classnames";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Link } from "$components/Link";
import { PasswordField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";

import styles from "./styles.module.scss";
import { IComponentProps } from "./interface";

const formName = "logInForm";

export const LogInForm: FunctionComponent<IComponentProps> = ({
  className,
  fields,
  translations,
  initialValues,
  onSubmit
}) => (
  <>
    <div className={classNames(styles.mainContainer, className)}>
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
              <div className={styles.register}>
                <span className={styles.dontHaveAnAccount}>{translations.dontHaveAnAccount}</span>
                <Link to={RoutesBuilder.company.signUp()}>{translations.register}</Link>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  </>
);
