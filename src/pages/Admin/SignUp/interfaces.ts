import { ISaveAdminInput } from "$hooks";
import { FormikHelpers } from "formik/dist/types";

export interface ISaveAdminForm extends ISaveAdminInput {
  _form: string;
}

export interface ITranslations {
  badCredentialsError: string;
  adminAlreadyExistsError: string;
  title: string;
  cancel: string;
  submit: string;
}

export interface IComponentProps {
  translations?: ITranslations;
  initialValues: ISaveAdminForm;
  onSubmit: (values: ISaveAdminForm, formikHelper: FormikHelpers<ISaveAdminForm>) => Promise<void>;
}
