import React, { ReactNode, useEffect } from "react";
import { Form, FormikProps } from "formik";

export const FormikForm = <Model, Values>({
  id,
  children,
  className,
  initialValuesModel,
  formikProps,
  modelToValues,
  hidden
}: IFormProps<Model, Values>) => {
  const setValues = formikProps?.setValues;
  useEffect(() => {
    if (setValues && modelToValues && initialValuesModel) {
      setValues(modelToValues(initialValuesModel), false);
    }
  }, [setValues, modelToValues, initialValuesModel]);
  return (
    <Form id={id} className={className} hidden={hidden}>
      {children}
    </Form>
  );
};

interface IFormProps<Model, Values> {
  id?: string;
  className?: string;
  initialValuesModel?: Model;
  formikProps?: FormikProps<Values>;
  modelToValues?: (model?: Model) => Values;
  children: ReactNode;
  hidden?: boolean;
}
