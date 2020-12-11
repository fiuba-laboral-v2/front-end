import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SalaryField, TextField, PositiveNumberField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { CheckboxInput } from "../../CheckboxInput";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  autoFocus
}) => (
  <FormSection className={className}>
    <TextField name="title" label={translations.offerTitle} autoFocus={autoFocus} mandatory />
    <div className={styles.row}>
      <SalaryField
        className={styles.leftField}
        name="minimumSalary"
        label={translations.minimumSalary}
        mandatory
      />
      <SalaryField name="maximumSalary" label={translations.maximumSalary} />
    </div>
    <div className={styles.row}>
      <PositiveNumberField
        className={styles.leftField}
        name="hoursPerDay"
        label={translations.hoursPerDay}
        mandatory
      />
      <CheckboxInput
        className={styles.isInternship}
        label={translations.isInternship}
        name="isInternship"
      />
    </div>
    <TextField name="description" label={translations.description} mandatory withoutMargin />
  </FormSection>
);
