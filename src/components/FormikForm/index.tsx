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
  const [lastInitialValues, setLastInitialValues] = useState<Values | undefined>(undefined);
  const setValues = formikProps?.setValues;
  useEffect(() => {
    if (!setValues) return;
    if (!modelToValues) return;
    if (!initialValuesModel) return;
    const initialValues = modelToValues(initialValuesModel);
    if (!isEqual(initialValues, lastInitialValues) && lastInitialValues) {
      setValues(initialValues, false);
      setLastInitialValues(initialValues);
      return;
    }
    if (lastInitialValues !== undefined) return;
    setValues(initialValues, false);
    setLastInitialValues(initialValues);
  }, [setValues, modelToValues, initialValuesModel, lastInitialValues]);
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
