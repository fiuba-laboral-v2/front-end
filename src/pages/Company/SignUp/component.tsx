import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import styles from "./styles.module.scss";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";

import Button from "$components/Button";
import { Window } from "$components/Window";
import { CompanyFields } from "$components/CompanyFields";
import { UserInput } from "$components/UserInput";

const formName = "signUpForm";

const SignUp: FunctionComponent<ISignUpProps> = ({ onSubmit, translations }) => {
  const initialValues: ISignUpFormValues = {
    user: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      surname: ""
    },
    companyName: "",
    cuit: "",
    email: "",
    slogan: "",
    description: "",
    website: "",
    _form: ""
  };

  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormikErrors<ISignUpFormValues> = {};
            if (values.user.password !== values.user.passwordConfirm) {
              errors.user = { passwordConfirm: "Las contraseñas no coinciden" };
            }
            return errors;
          }}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <>
              <Form id={formName}>
                <UserInput
                  email={{ name: "user.email", label: translations.email }}
                  password={{ name: "user.password", label: translations.password }}
                  passwordConfirm={
                    { name: "user.passwordConfirm", label: translations.passwordConfirm }
                  }
                  name={{ name: "user.name", label: translations.name }}
                  surname={{ name: "user.surname", label: translations.surname }}
                />
                <CompanyFields />
              </Form>
              <Button
                form={formName}
                className="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {translations.submit}
              </Button>
            </>
          )}
        </Formik>
      </div>
    </Window>
  );
};

interface ISignUpProps {
  translations: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}

export { SignUp };
