import React, { FunctionComponent } from "react";
import { NameField } from "$components/Fields";
import { FormSection } from "$components/FormSection";
import { CompanyLogoInput } from "$components/CompanyLogoInput";
import { IComponentProps } from "./interfaces";
import { TextInput } from "$components/TextInput";
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
    <TextInput name="slogan" label={translations.slogan} />
    <TextInput name="description" label={translations.description} multiline />
  </FormSection>
);
