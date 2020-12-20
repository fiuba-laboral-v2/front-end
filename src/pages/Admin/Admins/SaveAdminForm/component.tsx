import React, { FunctionComponent } from "react";

import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { FiubaCredentialsFormSection } from "../../../Applicant/SignUp/FiubaCredentialsFormSection";
import { PersonalInformationFormSection } from "../../../Applicant/SignUp/PersonalInformationFormSection";

import { IComponentProps } from "./interfaces";

import styles from "./styles.module.scss";

export const SaveAdminForm: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  formName
}) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {() => (
      <FormikForm id={formName}>
        <FiubaCredentialsFormSection className={styles.formSection} />
        <PersonalInformationFormSection withoutPadron className={styles.formSection} />
      </FormikForm>
    )}
  </Formik>
);
