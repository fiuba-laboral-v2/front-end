import React, { FunctionComponent } from "react";
import { EmailField, NameField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";
import { PositiveNumberInput } from "$components/NumberInput/PositiveNumberInput";

export const PersonalInformationFormSection: FunctionComponent<IComponent> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations.title}>
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
    <div className={styles.secondRow}>
      <EmailField
        className={styles.email}
        mandatory
        name="user.email"
        label={translations.email}
        withoutMargin
      />
      <PositiveNumberInput
        className={styles.padron}
        mandatory
        name="padron"
        label={translations.padron}
        withoutMargin
      />
    </div>
  </FormSection>
);
