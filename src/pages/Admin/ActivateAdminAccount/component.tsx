import React, { FunctionComponent } from "react";

import { Form } from "$components/Form";
import { FormSection } from "$components/FormSection";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { FormFooter } from "$components/FormFooter";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const ActivateAdminAccount: FunctionComponent<IComponentProps> = ({
  admin,
  onSubmit,
  translations
}) => (
  <Form title={`${translations?.title}\n${admin?.user.name} ${admin?.user.surname}`}>
    <Formik initialValues={{}} onSubmit={onSubmit}>
      {formikProps => (
        <FormikForm>
          <FormSection className={styles.formSection}>{translations?.description}</FormSection>
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={translations?.submit}
            errors={formikProps.errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);
