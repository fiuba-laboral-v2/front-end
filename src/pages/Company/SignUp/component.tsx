import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import styles from "./styles.module.scss";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { Window } from "$components/Window";
import { CompanyFields } from "$components/CompanyFields";
import { UserFields, CompanyCredentialsFields } from "$components/User";
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
          {({ isSubmitting, errors }) => (
            <>
              <Form id={formName}>
                <UserFields
                  email={{ label: translations.email }}
                  name={{ label: translations.name }}
                  surname={{ label: translations.surname }}
                />
                <CompanyCredentialsFields
                  password={{ label: translations.password, validate: true }}
                  passwordConfirm={{ label: translations.passwordConfirm }}
                />
                <CompanyFields/>
              </Form>
              <SubmitButton
                form={formName}
                className="primary"
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
