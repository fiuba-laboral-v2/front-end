import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { ApplicantType } from "$interfaces/Applicant";
import { IComponentProps } from "./interfaces";

import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { FormSection } from "$components/FormSection";
import { NameField } from "$components/Fields";
import { CareerSelector } from "$components/CareerSelector";
import { ApplicantTypeSelector } from "$components/ApplicantTypeSelector";

import styles from "./styles.module.scss";

export const Filter: FunctionComponent<IComponentProps> = ({
  translations,
  initialValuesModel,
  modelToValues,
  onSubmit,
  showFilter
}) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <FormikForm
        className={classNames(styles.formSection, { [styles.hidden]: !showFilter })}
        formikProps={formikProps}
        id="applicantFilter"
        initialValuesModel={initialValuesModel}
        modelToValues={modelToValues}
      >
        <FormSection className={classNames(styles.formSection, { [styles.hidden]: !showFilter })}>
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
            <ApplicantTypeSelector
              className={styles.applicantType}
              name="applicantType"
              excludedOptions={[ApplicantType.both]}
            />
            <FormFooter
              className={styles.formFooter}
              isSubmitting={formikProps.isSubmitting}
              submitButtonText={translations?.submit}
              errors={formikProps.errors}
            />
          </div>
        </FormSection>
      </FormikForm>
    )}
  </Formik>
);
