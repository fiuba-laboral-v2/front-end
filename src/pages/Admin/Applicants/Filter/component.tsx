import React, { FunctionComponent } from "react";
import { IFormValues } from "./interfaces";
import { ApplicantsFilter } from "$models/ApplicantsFilter";
import { FormikHelpers } from "formik";

import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { NameField } from "$components/Fields";
import { CareerSelector } from "$components/CareerSelector";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";

import styles from "./styles.module.scss";

export const Filter: FunctionComponent<IComponentProps> = ({
  initialValuesModel,
  modelToValues,
  onSubmit
}) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <FormikForm
        formikProps={formikProps}
        id="applicantFilter"
        initialValuesModel={initialValuesModel}
        modelToValues={modelToValues}
      >
        <FormSection>
          <div className={styles.fields}>
            <NameField className={styles.field} name="name" label={"NAME"} withoutMargin />
            <CareerSelector className={styles.field} name="careers" />
            <TargetApplicantTypeSelector className={styles.field} name="applicantType" />
          </div>
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={"APLICAR"}
            errors={formikProps.errors}
          />
        </FormSection>
      </FormikForm>
    )}
  </Formik>
);

interface IComponentProps {
  initialValuesModel: ApplicantsFilter;
  modelToValues: (filter?: ApplicantsFilter) => IFormValues;
  onSubmit: (values: IFormValues, formikHelpers: FormikHelpers<IFormValues>) => Promise<any>;
}