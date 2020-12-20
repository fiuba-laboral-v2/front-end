import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SecretarySelector } from "$components/SecretarySelector";
import { IComponentProps } from "./interfaces";

export const AdminFeaturesFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations?.title}>
    <SecretarySelector mandatory />
  </FormSection>
);
