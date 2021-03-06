import React, { FunctionComponent } from "react";

import { EmailField, UrlField } from "$components/Fields";
import { FormSection } from "$components/FormSection";

import { IComponentProps } from "./interfaces";

export const ContactInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations.title} subtitle={translations.subtitle}>
    <EmailField
      mandatory
      name="email"
      label={translations.email}
      helperText={translations.emailHelperText}
    />
    <UrlField name="website" label={translations.website} withoutMargin />
  </FormSection>
);
