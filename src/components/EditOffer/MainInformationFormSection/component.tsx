import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SalaryField, TextField, PositiveNumberField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  autoFocus
}) => (
  <FormSection className={className}>
    <TextField name="title" label={translations.offerTitle} autoFocus={autoFocus} mandatory />
    <div className={styles.secondRow}>
      <SalaryField
        className={styles.minimumSalary}
        name="minimumSalary"
        label={translations.minimumSalary}
        mandatory
      />
      <SalaryField name="maximumSalary" label={translations.maximumSalary} />
    </div>
    <PositiveNumberField name="hoursPerDay" label={translations.hoursPerDay} mandatory />
    <TextField name="description" label={translations.description} mandatory withoutMargin />
  </FormSection>
);
