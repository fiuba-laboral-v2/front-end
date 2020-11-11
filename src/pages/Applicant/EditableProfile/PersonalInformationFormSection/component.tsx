import React, { FunctionComponent } from "react";

import { EmailField, NameField, TextField } from "$components/Fields";
import { FormSection } from "$components/FormSection";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const PersonalInformationFormSection: FunctionComponent<IComponent> = ({
  translations,
  className
}) => (
  <FormSection className={className}>
    <div className={styles.firstRow}>
      <NameField
        className={styles.name}
        mandatory
        name="user.name"
        label={translations.name}
        withoutMargin
      />
      <NameField
        className={styles.surname}
        mandatory
        name="user.surname"
        label={translations.surname}
        withoutMargin
      />
    </div>
    <EmailField mandatory name="user.email" label={translations.email} />
    <TextField name="description" label={translations.description} multiline />
  </FormSection>
);
