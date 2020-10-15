import React, { FunctionComponent } from "react";

import { NameField, Field, CuitField } from "$components/Fields";
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
      name="companyName"
      label={translations.companyName}
      withoutMargin
    />
    <Field className={styles.slogan} name="slogan" label={translations.slogan} />
    <Field
      className={styles.description}
      name="description"
      label={translations.description}
      multiline
      withoutMargin
    />
    <div className={styles.lastRow}>
      <Field
        className={styles.businessName}
        name="businessName"
        label={translations.businessName}
        mandatory
        withoutMargin
      />
      <CuitField className={styles.cuit} name="cuit" label={translations.cuit} withoutMargin />
    </div>
  </FormSection>
);
