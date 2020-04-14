import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";
import { FormikHelpers } from "formik/dist/types";

import TextInput from "$components/TextInput";
import Button from "$components/Button";
import { Headline } from "$components/Headline";

import { FormikValidator } from "$models/FormikValidator";
import { validateEmail, validatePassword } from "validations-fiuba-laboral-v2";

import styles from "./styles.module.scss";
import { ILogInFormValues } from "./interface";

const LogInForm: FunctionComponent<ILogInFormProps> = (
  {
    translations,
    initialValues,
    onSubmit
  }
) => (
  <>
    <div className={styles.mainContainer}>
      <Headline className={styles.title} headline={translations.title}/>
      <Formik
        initialValues={initialValues}
        validateOnMount={true}
        onSubmit={onSubmit}
      >
        {({ isValid, isSubmitting }) => (
          <div className={styles.body}>
            <Form translate="yes" className={styles.formContainer} id={"formName"}>
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
                validate={FormikValidator({ validator: validatePassword, mandatory: true })}
              />
            </Form>
            <div className={styles.footer}>
              <Button
                form={"formName"}
                className="primary"
                width="expand"
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                {translations.logIn}
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  </>
);

interface ILogInFormTranslationsProps {
  title: string;
  email: string;
  password: string;
  logIn: string;
}

interface ILogInFormProps {
  translations: ILogInFormTranslationsProps;
  initialValues: ILogInFormValues;
  onSubmit: (
    values: ILogInFormValues,
    formikHelpers: FormikHelpers<ILogInFormValues>
  ) => void | Promise<any>;
}

export { LogInForm };
