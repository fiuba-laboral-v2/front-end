import React, { FunctionComponent } from "react";

import { Form } from "$components/Form";
import { FormSection } from "$components/FormSection";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { FormFooter } from "$components/FormFooter";
import styles from "./styles.module.scss";

export const AccountActivationForm: FunctionComponent<IComponentProps> = ({
  title,
  description,
  submit,
  onSubmit
}) => (
  <Form title={title}>
    <Formik initialValues={{}} onSubmit={onSubmit}>
      {formikProps => (
        <FormikForm>
          <FormSection className={styles.formSection}>{description}</FormSection>
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={submit}
            errors={formikProps.errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);

export interface IComponentProps {
  title?: string;
  description?: string;
  submit?: string;
  onSubmit: () => Promise<void>;
}
