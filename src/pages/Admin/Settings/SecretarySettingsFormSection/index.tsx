import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { CheckboxInput } from "$components/CheckboxInput";
import { FiubaEmailField, PositiveIntegerField, TextField } from "$components/Fields";
import { IAdminSettings } from "$interfaces/AdminSettings";
import styles from "./styles.module.scss";

export const SecretarySettingsFormSection: FunctionComponent<ISecretarySettingsFormSectionProps> = ({
  translations,
  values
}) => (
  <FormSection
    title={translations.secretarySettingsTitle}
    subtitle={translations.secretaryName}
    className={styles.formSection}
  >
    <PositiveIntegerField
      mandatory
      name="offerDurationInDays"
      label={translations.offerDurationInDays}
    />
    <FiubaEmailField
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
    <CheckboxInput
      label={translations.automaticJobApplicationApproval}
      labelPosition="end"
      checked={values.automaticJobApplicationApproval}
      name="automaticJobApplicationApproval"
      className={styles.automaticJobApplicationApproval}
    />
  </FormSection>
);

interface ISecretarySettingsFormSectionProps {
  translations: ISecretarySettingsFormSectionTranslations;
  values: IAdminSettings;
}

export interface ISecretarySettingsFormSectionTranslations {
  secretarySettingsTitle: string;
  offerDurationInDays: string;
  email: string;
  emailHelper: string;
  emailSignature: string;
  emailSignatureHelper: string;
  automaticJobApplicationApproval: string;
  secretaryName: string;
}
