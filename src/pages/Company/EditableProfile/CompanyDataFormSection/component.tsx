import React, { FunctionComponent } from "react";
import { NameField, TextField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { CompanyLogoInput } from "$components/CompanyLogoInput";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const CompanyDataFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  initialLogo,
  setFieldValue
}) => (
  <FormSection className={className}>
    <CompanyLogoInput
      className={styles.logo}
      initialValue={initialLogo}
      setLogo={logo => setFieldValue("logo", logo)}
    />
    <NameField mandatory name="companyName" label={translations.companyName} withoutMargin />
    <TextField name="slogan" label={translations.slogan} />
    <TextField name="description" label={translations.description} />
  </FormSection>
);
