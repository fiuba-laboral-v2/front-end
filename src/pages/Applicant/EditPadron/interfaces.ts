import { IUseUpdatePadron } from "$hooks";

export interface IFormValues extends IUseUpdatePadron {
  _form: string;
}

export interface ITranslations {
  title: string;
  submit: string;
  padron: string;
}
