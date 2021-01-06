import React, { FunctionComponent } from "react";
import { IComponentProps } from "./interfaces";

import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { NameField } from "$components/Fields";
import { CareerSelector } from "$components/CareerSelector";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";

import styles from "./styles.module.scss";

export const Filter: FunctionComponent<IComponentProps> = ({
  translations,
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
            {translations && (
              <NameField
                className={styles.name}
                name="name"
                label={translations.name}
                withoutMargin
              />
            )}
            <CareerSelector className={styles.careers} name="careers" />
            <TargetApplicantTypeSelector className={styles.applicantType} name="applicantType" />
          </div>
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={translations?.submit}
            errors={formikProps.errors}
          />
        </FormSection>
      </FormikForm>
    )}
  </Formik>
);
