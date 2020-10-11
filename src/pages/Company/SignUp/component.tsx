import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { Window } from "$components/Window";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "./UserDataFormSection";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactFormSection } from "./ContactFormSection";

import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import styles from "./styles.module.scss";

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
              <UserDataFormSection className={styles.formSection} />
              <CompanyDataFormSection className={styles.formSection} />
              <ContactFormSection className={styles.formSection} />
              <FormFooter
                isSubmitting={isSubmitting}
                submitButtonText={translations.submit}
                errors={errors}
              />
            </Form>
          </>
        )}
      </Formik>
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
