import { IAdminSettings } from "$interfaces/AdminSettings";
import { ISecretarySettingsFormSectionTranslations } from "./SecretarySettingsFormSection";

export interface IAdminSettingsValues extends IAdminSettings {
  _form: string;
}

export interface ISettingsTranslations extends ISecretarySettingsFormSectionTranslations {
  title: string;
  submit: string;
}
