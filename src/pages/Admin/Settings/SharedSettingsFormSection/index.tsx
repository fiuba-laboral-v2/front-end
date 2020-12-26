import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { TextField } from "$components/Fields";
import styles from "./styles.module.scss";

export const SharedSettingsFormSection: FunctionComponent<ISharedSettingsFormSectionProps> = ({
  translations
}) => (
  <FormSection
    title={translations.sharedSettingsTitle}
    subtitle={translations.sharedSettingsSubtitle}
    className={styles.formSection}
  >
    <TextField
      mandatory
      name="companySignUpAcceptanceCriteria"
      label={translations.companySignUpAcceptanceCriteria}
    />
    <TextField
      mandatory
      name="companyEditableAcceptanceCriteria"
      label={translations.companyEditableAcceptanceCriteria}
    />
    <TextField
      mandatory
      name="editOfferAcceptanceCriteria"
      label={translations.editOfferAcceptanceCriteria}
    />
  </FormSection>
);

interface ISharedSettingsFormSectionProps {
  translations: ISharedSettingsFormSectionTranslations;
}

export interface ISharedSettingsFormSectionTranslations {
  sharedSettingsTitle: string;
  sharedSettingsSubtitle: string;
  companySignUpAcceptanceCriteria: string;
  companyEditableAcceptanceCriteria: string;
  editOfferAcceptanceCriteria: string;
}
