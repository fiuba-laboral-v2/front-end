import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { Window } from "$components/Window";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "./UserDataFormSection";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "./ContactInformationFormSection";

import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import styles from "./styles.module.scss";

const formName = "signUpForm";

export const SignUp: FunctionComponent<ISignUpProps> = (
  {
    initialValues,
    onSubmit,
    translations
  }
) => (
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
            <ContactInformationFormSection className={styles.formSection} />
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

interface ISignUpProps {
  initialValues: ISignUpFormValues;
  translations: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}
