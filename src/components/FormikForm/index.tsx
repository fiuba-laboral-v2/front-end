import React, { ReactNode, useEffect, useState } from "react";
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
  const [valuesWereSet, setValuesWereSet] = useState(false);
  const setValues = formikProps?.setValues;
  useEffect(() => {
    if (valuesWereSet) return;
    if (!setValues) return;
    if (!modelToValues) return;
    if (!initialValuesModel) return;
    setValues(modelToValues(initialValuesModel), false);
    setValuesWereSet(true);
  }, [valuesWereSet, setValues, modelToValues, initialValuesModel]);
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
