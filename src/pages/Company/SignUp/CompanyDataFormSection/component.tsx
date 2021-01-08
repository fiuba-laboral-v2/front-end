import React, { FunctionComponent } from "react";
import { NameField, CuitField, TextField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { IComponentProps } from "./interfaces";
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
    />
    <TextField name="slogan" label={translations.slogan} />
    <TextField name="description" label={translations.description} />
    <TextField name="businessSector" label={translations.businessSector} />
    <div className={styles.lastRow}>
      <TextField
        className={styles.businessName}
        name="businessName"
        label={translations.businessName}
        mandatory
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
