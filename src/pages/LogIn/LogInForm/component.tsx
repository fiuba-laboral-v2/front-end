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
    initialValues,
    onSubmit
  }
) => (
  <>
    <div className={styles.mainContainer}>
      <Headline className={styles.title} headline={"Ingresar"}/>
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
                label={"email"}
                type="email"
                className={styles.textInput}
                validate={FormikValidator({ validator: validateEmail, mandatory: true })}
              />
              <TextInput
                name="password"
                label={"password"}
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
                {"Iniciar Sesión"}
              </Button>
            </div>
          </div>
        )}
      </Formik>
    </div>
  </>
);

interface ILogInFormProps {
  initialValues: ILogInFormValues;
  onSubmit: (
    values: ILogInFormValues,
    formikHelpers: FormikHelpers<ILogInFormValues>
  ) => void | Promise<any>;
}

export { LogInForm };
