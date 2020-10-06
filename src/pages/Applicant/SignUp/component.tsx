import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";

import { CareersSelectorFormSection } from "$components/CareersSelectorFormSection";
import { FiubaCredentialsFormSection } from "./FiubaCredentialsFormSection";
import { PersonalInformationForm } from "./PersonalInformationForm";

import styles from "./styles.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { IApplicantSignUpFormValues, IApplicantSignUpTranslations } from "./interface";
import { FormFooter } from "$components/FormFooter";

export const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    onSubmit,
    validateForm
  }
) => {
  const careerInitialValue = { careerCode: "", isGraduate: true };
  const initialValues: IApplicantSignUpFormValues = {
    user: {
      email: "",
      dni: "",
      password: "",
      name: "",
      surname: ""
    },
    padron: NaN,
    careers: [careerInitialValue],
    _form: ""
  };

  return (
    <>
      <h1 className={styles.title}>{translations.title}</h1>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: FormikErrors<IApplicantSignUpFormValues> = {};
          const formErrorMessage = validateForm(values);
          if (formErrorMessage) errors._form = formErrorMessage;
          return errors;
        }}
        validateOnMount
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting, errors }) => (
          <Form className={styles.formContainer}>
            <FiubaCredentialsFormSection className={styles.fiubaCredentials}/>
            <PersonalInformationForm className={styles.personalInformation}/>
            <CareersSelectorFormSection
              defaultValue={careerInitialValue}
              careers={values.careers}
            />
            <FormFooter
              className={styles.footer}
              isSubmitting={isSubmitting}
              submitButtonText={translations.submit}
              errors={errors}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

interface ISignUpProps {
  translations: IApplicantSignUpTranslations;
  validateForm: (values: IApplicantSignUpFormValues) => string | undefined;
  onSubmit: (
    values: IApplicantSignUpFormValues,
    formikHelpers: FormikHelpers<IApplicantSignUpFormValues>
  ) => void | Promise<any>;
}
