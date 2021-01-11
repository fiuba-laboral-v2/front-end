import React, { ReactNode, useEffect, useState } from "react";
import { Form, FormikProps } from "formik";
import { isEqual } from "lodash";

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
  const [lastValues, setLastValues] = useState<Values | undefined>(undefined);
  const setValues = formikProps?.setValues;
  useEffect(() => {
    if (!setValues) return;
    if (!modelToValues) return;
    if (!initialValuesModel) return;
    const values = modelToValues(initialValuesModel);
    if (!isEqual(values, lastValues) && lastValues) {
      setValues(values, false);
      setValuesWereSet(true);
      setLastValues(values);
      return;
    }
    if (valuesWereSet) return;
    setValues(values, false);
    setValuesWereSet(true);
    setLastValues(values);
  }, [valuesWereSet, setValues, modelToValues, initialValuesModel, lastValues]);
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
