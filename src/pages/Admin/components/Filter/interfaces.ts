import { FormikHelpers } from "formik";
import { ReactNode } from "react";

export interface ITranslations {
  submit: string;
}

export interface IContainerProps<FormVariables> {
  initialValuesModel: URLSearchParams;
  modelToValues: (filter?: URLSearchParams) => IFormValues<FormVariables>;
  onSubmit: (
    values: IFormValues<FormVariables>,
    formikHelpers: FormikHelpers<IFormValues<FormVariables>>
  ) => Promise<any>;
  showFilter: boolean;
  children: ReactNode;
}

export type IFormValues<FormVariables> = FormVariables & {
  _form: string;
};

export interface IComponentProps<FormVariables> extends IContainerProps<FormVariables> {
  translations?: ITranslations;
}
