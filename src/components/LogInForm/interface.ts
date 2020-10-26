import { ILoginVariables } from "$hooks";
import { FormikHelpers } from "formik/dist/types";

export interface ITranslations {
  title: string;
  email: string;
  password: string;
  logIn: string;
  dontHaveAnAccount: string;
  register: string;
  badCredentialsMessage: string;
}

export interface IContainerProps {
  className?: string;
}

export interface IComponentProps extends IContainerProps {
  className?: string;
  translations: ITranslations;
  initialValues: ILoginVariables;
  onSubmit: (
    values: ILoginVariables,
    formikHelpers: FormikHelpers<ILoginVariables>
  ) => void | Promise<any>;
}
