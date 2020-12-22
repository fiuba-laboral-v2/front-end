import React, { FunctionComponent } from "react";
import { FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";
import { FormFooter } from "$components/FormFooter";
import { UserDataFormSection } from "$components/UserDataFormSection";
import { CompanyDataFormSection } from "./CompanyDataFormSection";
import { ContactInformationFormSection } from "$components/ContactInformationFormSection";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { ISignUpFormValues, ISignUpTranslations } from "./interfaces";
import styles from "./styles.module.scss";
import { FormikForm } from "$components/FormikForm";

const formName = "signUpForm";

export const SignUp: FunctionComponent<ISignUpProps> = ({
  initialValues,
  onSubmit,
  translations,
  acceptanceCriteria,
  hidden
}) => (
  <Form title={translations?.title} acceptanceCriteria={acceptanceCriteria}>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: FormikErrors<ISignUpFormValues> = {};
        if (values.user.password !== values.user.passwordConfirm) {
          errors.user = { passwordConfirm: "Las contraseñas no coinciden" };
        }
        return errors;
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors }) => (
        <FormikForm id={formName} hidden={hidden}>
          <UserDataFormSection className={styles.formSection} />
          <CompanyDataFormSection className={styles.formSection} />
          <ContactInformationFormSection className={styles.formSection} />
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

interface ISignUpProps {
  hidden: boolean;
  acceptanceCriteria?: string;
  initialValues: ISignUpFormValues;
  translations?: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}
