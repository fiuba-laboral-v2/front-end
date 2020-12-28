import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { EmailField, PositiveIntegerField, TextField } from "$components/Fields";
import styles from "./styles.module.scss";

export const SecretarySettingsFormSection: FunctionComponent<ISecretarySettingsFormSectionProps> = ({
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
    <TextField
      mandatory
      name="emailSignature"
      label={translations.emailSignature}
      helperText={translations.emailSignatureHelper}
    />
  </FormSection>
);

interface ISecretarySettingsFormSectionProps {
  translations: ISecretarySettingsFormSectionTranslations;
}

export interface ISecretarySettingsFormSectionTranslations {
  secretarySettingsTitle: string;
  offerDurationInDays: string;
  email: string;
  emailHelper: string;
  emailSignature: string;
  emailSignatureHelper: string;
  secretaryName: string;
}
