import React, { FunctionComponent } from "react";
import { NameField, CuitField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { IComponentProps } from "./interfaces";
import { TextInput } from "$components/TextInput";
import styles from "./styles.module.scss";

export const CompanyDataFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations.title}>
    <NameField
      className={styles.companyName}
      mandatory
      name="companyName"
      label={translations.companyName}
      withoutMargin
    />
    <TextInput className={styles.slogan} name="slogan" label={translations.slogan} />
    <TextInput
      className={styles.description}
      name="description"
      label={translations.description}
      multiline
      withoutMargin
    />
    <div className={styles.lastRow}>
      <TextInput
        className={styles.businessName}
        name="businessName"
        label={translations.businessName}
        mandatory
        withoutMargin
      />
      <CuitField
        className={styles.cuit}
        mandatory
        name="cuit"
        label={translations.cuit}
        withoutMargin
      />
    </div>
  </FormSection>
);
