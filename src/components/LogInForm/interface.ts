import { ReactElement } from "react";
import { ErrorHandlers } from "$models/handleError";
import { ILoginVariables } from "$hooks";
import { FormikHelpers } from "formik/dist/types";

export interface ITranslations {
  title: string;
  password: string;
  logIn: string;
  badCredentialsMessage: string;
}

export interface IContainerProps {
  className?: string;
  fields: ReactElement;
  footer: ReactElement;
  onSubmit: OnSubmit;
}

export type OnSubmit = (
  values: ILoginVariables,
  formikHelpers: FormikHelpers<ILoginVariables>,
  errorHandlers: ErrorHandlers
) => void | Promise<any>;

export interface IComponentProps extends IContainerProps {
  className?: string;
  translations: ITranslations;
  initialValues: ILoginVariables;
  onSubmit: (
    values: ILoginVariables,
    formikHelpers: FormikHelpers<ILoginVariables>
  ) => void | Promise<any>;
}
