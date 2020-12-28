import { ISecretarySettingsFormSectionTranslations } from "./SecretarySettingsFormSection";
import { ISharedSettingsFormSectionTranslations } from "./SharedSettingsFormSection";

export interface ISettingsTranslations
  extends ISecretarySettingsFormSectionTranslations,
    ISharedSettingsFormSectionTranslations {
  title: string;
  submit: string;
  updateSuccess: string;
  infoMessage: string;
}
