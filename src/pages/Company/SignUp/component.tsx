import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import styles from "./styles.module.scss";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { Window } from "$components/Window";
import { CompanyFields } from "$components/CompanyFields";
import { UserFields } from "$components/UserFields";
import { CompanyCredentialsFields } from "./CompanyCredentialsFields";
import { SubmitButton } from "$components/SubmitButton";

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
    businessName: "",
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
          validateOnMount
          onSubmit={onSubmit}
        >
          {({ isSubmitting, errors }) => (
            <>
              <Form id={formName}>
                <UserFields email="user.email" name="user.name" surname="user.surname" />
                <CompanyCredentialsFields/>
                <CompanyFields/>
              </Form>
              <SubmitButton
                form={formName}
                kind="primary"
                type="submit"
                disabled={isSubmitting}
                errors={errors}
              >
                {translations.submit}
              </SubmitButton>
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
