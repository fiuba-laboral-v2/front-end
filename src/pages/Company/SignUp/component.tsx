import React, { FunctionComponent } from "react";
import { Form as FormikForm, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "./UserDataFormSection";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";

import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import styles from "./styles.module.scss";

const formName = "signUpForm";

export const SignUp: FunctionComponent<ISignUpProps> = ({
  initialValues,
  onSubmit,
  translations,
  acceptanceCriteria
}) => (
  <Form title={translations.title} acceptanceCriteria={acceptanceCriteria}>
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
        <FormikForm id={formName}>
          <UserDataFormSection className={styles.formSection} />
          <CompanyDataFormSection className={styles.formSection} />
          <ContactInformationFormSection className={styles.formSection} />
          <FormFooter
            isSubmitting={isSubmitting}
            submitButtonText={translations.submit}
            errors={errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);

interface ISignUpProps {
  acceptanceCriteria: string;
  initialValues: ISignUpFormValues;
  translations: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}
