import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";
import classNames from "classnames";
import { RoutesBuilder } from "$models/RoutesBuilder";

import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { Headline } from "$components/Headline";

import { FormikValidator } from "$models/FormikValidator";
import { validateEmail } from "validations-fiuba-laboral-v2";

import styles from "./styles.module.scss";
import { ILogInFormTranslationsProps } from "./interface";
import { ILoginVariables } from "$hooks/useLogin";

const formName = "logInForm";

const LogInForm: FunctionComponent<ILogInFormProps> = (
  {
    className,
    translations,
    initialValues,
    onSubmit
  }
) => (
  <>
    <div className={classNames(styles.mainContainer, className)}>
      <Headline className={styles.title}>{translations.title}</Headline>
      <Formik
        initialValues={initialValues}
        validateOnMount={true}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className={styles.body}>
            <Form className={styles.formContainer} id={formName}>
              <TextInput
                name="email"
                label={translations.email}
                type="email"
                className={styles.textInput}
                validate={FormikValidator({ validator: validateEmail, mandatory: true })}
              />
              <TextInput
                name="password"
                label={translations.password}
                type="password"
                className={styles.textInput}
                validate={FormikValidator({ mandatory: true })}
              />
            </Form>
            <div className={styles.footer}>
              <Button
                form={formName}
                className="primary"
                width="expand"
                type="submit"
                disabled={isSubmitting}
              >
                {translations.logIn}
              </Button>
              <div className={styles.register}>
                <span className={styles.dontHaveAnAccount}>{translations.dontHaveAnAccount}</span>
                <Link to={RoutesBuilder.register}>{translations.register}</Link>
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
