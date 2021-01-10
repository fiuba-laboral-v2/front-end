import React from "react";
import classNames from "classnames";
import { IComponentProps } from "./interfaces";

import { FormFooter } from "$components/FormFooter";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";

import styles from "./styles.module.scss";

export const Filter = <FormVariables,>({
  translations,
  initialValuesModel,
  modelToValues,
  onSubmit,
  showFilter,
  formFooterClassName,
  children
}: IComponentProps<FormVariables>) => (
  <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
    {formikProps => (
      <FormikForm
        className={classNames({ [styles.hidden]: !showFilter })}
        formikProps={formikProps}
        id="applicantFilter"
        initialValuesModel={initialValuesModel}
        modelToValues={modelToValues}
      >
        <div className={classNames(styles.fields, { [styles.hidden]: !showFilter })}>
          {children}
          <FormFooter
            className={classNames(formFooterClassName, styles.formFooter)}
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={translations?.submit}
            errors={formikProps.errors}
          />
        </div>
      </FormikForm>
    )}
  </Formik>
);
