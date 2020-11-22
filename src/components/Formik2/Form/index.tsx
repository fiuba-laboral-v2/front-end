import React, { ReactNode, useEffect } from "react";
import { Form as FormikForm } from "formik";

export const Form = <Model, Values>({
  name,
  children,
  initialValuesModel,
  setValues,
  modelToValues
}: IFormProps<Model, Values>) => {
  useEffect(() => {
    if (initialValuesModel) setValues(modelToValues(initialValuesModel), false);
  }, [initialValuesModel, setValues, modelToValues]);
  return <FormikForm {...{ name, children }} />;
};

interface IFormProps<Model, Values> {
  name: string;
  initialValuesModel?: Model;
  setValues: (values: Values, shouldValidate?: boolean) => void;
  modelToValues: (model?: Model) => Values;
  children: ReactNode;
}
