import { IUpdateAdminInput } from "$hooks";
import { FormikHelpers } from "formik/dist/types";
import { IAdmin } from "$interfaces/Admin";

export interface IUpdateAdminForm extends IUpdateAdminInput {
  _form: string;
}

export interface ITranslations {
  userEmailAlreadyExistsError: string;
  title: string;
  submit: string;
}

export interface IComponentProps {
  translations?: ITranslations;
  admin?: IAdmin;
  modelToValues: (model?: IAdmin) => IUpdateAdminForm;
  onSubmit: (
    values: IUpdateAdminForm,
    formikHelper: FormikHelpers<IUpdateAdminForm>
  ) => Promise<void>;
}
