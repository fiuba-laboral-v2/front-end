import React, { ReactNode } from "react";
import { Formik as FormikContainer, FormikProps } from "formik";
import { FormikConfig, FormikValues } from "formik/dist/types";
import { Form } from "./Form";

export const Formik2 = <Model, Values extends FormikValues = FormikValues, ExtraProps = {}>({
  initialValuesModel,
  children,
  onSubmit,
  modelToValues,
  formName: name,
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
        <Form setValues={formikProps.setValues} {...{ name, initialValuesModel, modelToValues }}>
          {children(formikProps)}
        </Form>
      )}
    </FormikContainer>
  );
};

type BaseFormikConfig<Values> = Omit<FormikConfig<Values>, "initialValues" | "children">;
type FormikConfigExtension<Model, Values> = {
  formName: string;
  initialValuesModel?: Model;
  modelToValues: (model?: Model) => Values;
  children: (props: FormikProps<Values>) => ReactNode;
};
type IFormikProps<Model, Values, ExtraProps> = BaseFormikConfig<Values> &
  ExtraProps &
  FormikConfigExtension<Model, Values>;
