import React, { ReactNode, useEffect } from "react";
import { Form, FormikProps } from "formik";

export const FormikForm = <Model, Values>({
  children,
  initialValuesModel,
  formikProps: { setValues },
  modelToValues
}: IFormProps<Model, Values>) => {
  useEffect(() => {
    if (initialValuesModel) setValues(modelToValues(initialValuesModel), false);
  }, [initialValuesModel, setValues, modelToValues]);
  return <Form>{children}</Form>;
};

interface IFormProps<Model, Values> {
  initialValuesModel?: Model;
  formikProps: FormikProps<Values>;
  modelToValues: (model?: Model) => Values;
  children: ReactNode;
}
