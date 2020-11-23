import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { TargetApplicantTypeSelector } from "$components/TargetApplicantTypeSelector";
import { CareerSelector } from "$components/CareerSelector";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const RecipientsFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className} title={translations?.title}>
    <CareerSelector mandatory name="careers" className={styles.careers} />
    <TargetApplicantTypeSelector mandatory />
  </FormSection>
);
