import React, { FunctionComponent } from "react";

import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { SecretarySelector } from "$components/SecretarySelector";
import { FiubaCredentialsFormSection } from "$components/FiubaCredentialsFormSection";
import { PersonalInformationFormSection } from "$components/PersonalInformationFormSection";
import { FormFooter } from "$components/FormFooter";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SignUp: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  translations
}) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {({ isSubmitting, errors }) => (
      <FormikForm>
        <FiubaCredentialsFormSection className={styles.formSection} />
        <PersonalInformationFormSection withoutPadron className={styles.formSection} />
        <SecretarySelector mandatory />
        <FormFooter
          isSubmitting={isSubmitting}
          submitButtonText={translations?.submit}
          errors={errors}
        />
      </FormikForm>
    )}
  </Formik>
);
