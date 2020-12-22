import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { EmailField, PositiveIntegerField } from "$components/Fields";
import styles from "./styles.module.scss";

export const SecretarySettingsFormSection: FunctionComponent<ISecretarySettingsFormSection> = ({
  translations
}) => (
  <FormSection
    title={translations.secretarySettingsTitle}
    subtitle={translations.secretaryName}
    className={styles.formSection}
  >
    <PositiveIntegerField
      singleLine
      mandatory
      name="offerDurationInDays"
      label={translations.offerDurationInDays}
    />
    <EmailField
      singleLine
      mandatory
      name="email"
      label={translations.email}
      helperText={translations.emailHelper}
    />
  </FormSection>
);

interface ISecretarySettingsFormSection {
  translations: ISecretarySettingsFormSectionTranslations;
}

export interface ISecretarySettingsFormSectionTranslations {
  secretarySettingsTitle: string;
  offerDurationInDays: string;
  email: string;
  emailHelper: string;
  secretaryName: string;
}
