import React, { FunctionComponent } from "react";

import { FormSection } from "$components/FormSection";
import { Field, SalaryField } from "$components/Fields";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { PositiveNumberInput } from "../../NumberInput/PositiveNumberInput";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className}>
    <Field name="title" label={translations.offerTitle} mandatory />
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
    <Field name="description" label={translations.description} mandatory multiline />
  </FormSection>
);
