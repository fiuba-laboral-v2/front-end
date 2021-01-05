import React, { FunctionComponent } from "react";
import { IFormValues } from "./interfaces";
import { FormikHelpers } from "formik";

import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { Form } from "$components/Form";
import { NameField } from "$components/Fields";
import { CareerSelector } from "$components/CareerSelector";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";

import styles from "./styles.module.scss";

export const Filter: FunctionComponent<IComponentProps> = ({ initialValues, onSubmit }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    {formikProps => (
      <Form>
        <FormikForm>
          <FormSection className={styles.formSection}>
            <NameField className={styles.field} name="name" label={"NAME"} />
            <CareerSelector className={styles.field} mandatory name="careerCodes" />
            <TargetApplicantTypeSelector mandatory name="applicantType" />
          </FormSection>
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={"APLICAR"}
            errors={formikProps.errors}
          />
        </FormikForm>
      </Form>
    )}
  </Formik>
);

interface IComponentProps {
  initialValues: IFormValues;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}
