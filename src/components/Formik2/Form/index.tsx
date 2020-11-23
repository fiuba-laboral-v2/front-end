import React, { ReactNode, useEffect } from "react";
import { Form as FormikForm } from "formik";

export const Form = <Model, Values>({
  children,
  initialValuesModel,
  setValues,
  modelToValues
}: IFormProps<Model, Values>) => {
  useEffect(() => {
    if (initialValuesModel) setValues(modelToValues(initialValuesModel), false);
  }, [initialValuesModel, setValues, modelToValues]);
  return <FormikForm>{children}</FormikForm>;
};

interface IFormProps<Model, Values> {
  initialValuesModel?: Model;
  setValues: (values: Values, shouldValidate?: boolean) => void;
  modelToValues: (model?: Model) => Values;
  children: ReactNode;
}
