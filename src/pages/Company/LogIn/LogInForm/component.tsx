import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import classNames from "classnames";
import { RoutesBuilder } from "$models/RoutesBuilder";

import { Link } from "$components/Link";
import { Headline } from "$components/Headline";
import { PasswordField, EmailField } from "$components/Fields";

import styles from "./styles.module.scss";
import { ILogInFormTranslationsProps } from "./interface";
import { ILoginVariables } from "$hooks";
import { SubmitButton } from "$components/SubmitButton";

const formName = "logInForm";

const LogInForm: FunctionComponent<ILogInFormProps> = ({
  className,
  translations,
  initialValues,
  onSubmit
}) => (
  <>
    <div className={classNames(styles.mainContainer, className)}>
      <Headline className={styles.title}>{translations.title}</Headline>
      <Formik initialValues={initialValues} validateOnMount onSubmit={onSubmit}>
        {({ isSubmitting, errors }) => (
          <div className={styles.body}>
            <Form className={styles.formContainer} id={formName}>
              <EmailField
                className={styles.textInput}
                name="email"
                label={translations.email}
                autoComplete="email"
              />
              <PasswordField
                className={styles.textInput}
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

interface ILogInFormProps {
  className?: string;
  translations: ILogInFormTranslationsProps;
  initialValues: ILoginVariables;
  onSubmit: (
    values: ILoginVariables,
    formikHelpers: FormikHelpers<ILoginVariables>
  ) => void | Promise<any>;
}

export { LogInForm };
