import React, { FunctionComponent } from "react";

import { NameField, Field } from "$components/Fields";
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
    <Field name="slogan" label={translations.slogan} />
    <Field name="description" label={translations.description} multiline />
  </FormSection>
);
