import { IAdmin } from "$interfaces/Admin";

export interface ITranslations {
  title: string;
  description: string;
  submit: string;
}

export interface IComponentProps {
  admin?: IAdmin;
  translations?: ITranslations;
  onSubmit: () => Promise<void>;
}
