import React, { ReactNode, useEffect } from "react";
import { Formik as FormikContainer, FormikProps, Form } from "formik";
import { FormikConfig, FormikValues } from "formik/dist/types";

const FillOnLoad = <Model, Values>({
  initialValuesModel,
  setValues,
  modelToValues
}: IFillOnLoadProps<Model, Values>) => {
  useEffect(() => {
    if (initialValuesModel) setValues(modelToValues(initialValuesModel), false);
  }, [initialValuesModel, setValues, modelToValues]);
  return null;
};

interface IFillOnLoadProps<Model, Values> {
  initialValuesModel?: Model;
  setValues: (values: Values, shouldValidate?: boolean) => void;
  modelToValues: (model?: Model) => Values;
}

export const Formik2 = <Model, Values extends FormikValues = FormikValues, ExtraProps = {}>({
  initialValuesModel,
  children,
  onSubmit,
  modelToValues,
  formName,
  ...props
}: IFormikProps<Model, Values, ExtraProps>) => {
  return (
    <FormikContainer
      {...props}
      initialValues={modelToValues()}
      onSubmit={onSubmit}
      validateOnMount={false}
    >
      {formikProps => (
        <Form name={formName}>
          <FillOnLoad
            {...{ initialValuesModel, setValues: formikProps.setValues, modelToValues }}
          />
          {children(formikProps)}
        </Form>
      )}
    </FormikContainer>
  );
};

type IFormikProps<Model, Values, ExtraProps> = Omit<
  FormikConfig<Values>,
  "initialValues" | "children"
> &
  ExtraProps & {
    formName: string;
    initialValuesModel?: Model;
    modelToValues: (model?: Model) => Values;
    children: (props: FormikProps<Values>) => ReactNode;
  };
