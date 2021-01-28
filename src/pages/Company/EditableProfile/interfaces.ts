import { IUpdateCurrentCompanyVariables } from "$hooks";

export interface IEditableProfileFormValues extends IUpdateCurrentCompanyVariables {
  _form: string;
}

export interface IEditableProfileTranslations {
  title: string;
  submit: string;
  confirmDialogTitle: string;
  confirmDialogDescription: string;
  confirmDialogCancel: string;
  confirmDialogConfirm: string;
}
