import React, { FunctionComponent } from "react";

import { Form } from "$components/Form";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { FormFooter } from "$components/FormFooter";

import { IComponentProps } from "./interfaces";

export const DeactivateAdminAccount: FunctionComponent<IComponentProps> = ({
  admin,
  onSubmit,
  translations
}) => (
  <Form title={`${translations?.title} ${admin?.user.name} ${admin?.user.surname}`}>
    <Formik initialValues={{}} onSubmit={onSubmit}>
      {formikProps => (
        <FormikForm>
          <p>{translations?.description}</p>
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
