import React, { FunctionComponent } from "react";
import { FormikErrors } from "formik";
import { CareersSelectorFormSection } from "$components/CareersSelectorFormSection";
import { FiubaCredentialsFormSection } from "$components/FiubaCredentialsFormSection";
import { PersonalInformationFormSection } from "$components/PersonalInformationFormSection";
import { FormFooter } from "$components/FormFooter";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikHelpers } from "formik/dist/types";
import { IApplicantSignUpFormValues, IApplicantSignUpTranslations } from "./interfaces";
import { FormikForm } from "$components/FormikForm";
import styles from "./styles.module.scss";

export const SignUp: FunctionComponent<ISignUpProps> = ({
  translations,
  onSubmit,
  validateForm,
  initialDni
}) => {
  const careerInitialValue = {
    careerCode: "",
    isGraduate: true,
    currentCareerYear: NaN,
    approvedSubjectCount: NaN
  };
  const initialValues: IApplicantSignUpFormValues = {
    user: {
      email: "",
      dni: initialDni || "",
      password: "",
      name: "",
      surname: ""
    },
    padron: NaN,
    careers: [careerInitialValue],
    _form: ""
  };

  return (
    <Form title={translations?.title}>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: FormikErrors<IApplicantSignUpFormValues> = {};
          const formErrorMessage = validateForm(values);
          if (formErrorMessage) errors._form = formErrorMessage;
          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ values, isSubmitting, errors }) => (
          <FormikForm>
            <FiubaCredentialsFormSection className={styles.formSection} />
            <PersonalInformationFormSection className={styles.formSection} />
            <CareersSelectorFormSection
              className={styles.formSection}
              defaultValue={careerInitialValue}
              careers={values.careers}
            />
            <FormFooter
              isSubmitting={isSubmitting}
              submitButtonText={translations?.submit}
              errors={errors}
            />
          </FormikForm>
        )}
      </Formik>
    </Form>
  );
};

interface ISignUpProps {
  initialDni: string | null;
  translations: IApplicantSignUpTranslations;
  validateForm: (values: IApplicantSignUpFormValues) => string | undefined;
  onSubmit: (
    values: IApplicantSignUpFormValues,
    formikHelpers: FormikHelpers<IApplicantSignUpFormValues>
  ) => void | Promise<any>;
}
