import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SecretarySelector } from "$components/SecretarySelector";

export const AdminFeaturesFormSection: FunctionComponent<IComponentProps> = ({ className }) => (
  <FormSection className={className}>
    <SecretarySelector mandatory />
  </FormSection>
);

interface IComponentProps {
  className?: string;
}
