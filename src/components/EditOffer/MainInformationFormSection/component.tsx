import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SalaryField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import { PositiveNumberInput } from "../../NumberInput/PositiveNumberInput";
import { TextInput } from "$components/TextInput";
import styles from "./styles.module.scss";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  autoFocus
}) => (
  <FormSection className={className}>
    <TextInput name="title" label={translations.offerTitle} autoFocus={autoFocus} mandatory />
    <div className={styles.secondRow}>
      <SalaryField
        className={styles.minimumSalary}
        name="minimumSalary"
        label={translations.minimumSalary}
        mandatory
      />
      <SalaryField name="maximumSalary" label={translations.maximumSalary} />
    </div>
    <PositiveNumberInput
      name="hoursPerDay"
      label={translations.hoursPerDay}
      mandatory
      withoutMargin
    />
    <TextInput name="description" label={translations.description} mandatory multiline />
  </FormSection>
);
