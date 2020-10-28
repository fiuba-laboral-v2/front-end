import React from "react";
import { Formik as FormikContainer } from "formik";
import { FormikConfig, FormikValues } from "formik/dist/types";

export const Formik = <Values extends FormikValues = FormikValues, ExtraProps = {}>({
  children,
  onSubmit,
  initialValues,
  ...props
}: FormikProps<Values, ExtraProps>) => (
  <FormikContainer {...props} initialValues={initialValues} onSubmit={onSubmit} validateOnMount>
    {children}
  </FormikContainer>
);

type FormikProps<Values, ExtraProps> = FormikConfig<Values> & ExtraProps;
