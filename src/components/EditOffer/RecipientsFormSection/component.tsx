import React, { FunctionComponent } from "react";

import { FormSection } from "$components/FormSection";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";
import { CareerSelector } from "$components/CareerSelector";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const RecipientsFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  targetApplicantType
}) => (
  <FormSection className={className} title={translations.title}>
    <CareerSelector required name="careers" className={styles.careers} />
    <TargetApplicantTypeSelector
      required
      value={targetApplicantType.value}
      error={targetApplicantType.error}
    />
  </FormSection>
);
