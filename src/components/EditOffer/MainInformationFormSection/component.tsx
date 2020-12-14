import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SalaryField, TextField, PositiveNumberField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { CheckboxInput } from "../../CheckboxInput";
import classNames from "classnames";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  autoFocus,
  values
}) => (
  <FormSection className={className}>
    <TextField name="title" label={translations.offerTitle} autoFocus={autoFocus} mandatory />
    <div className={styles.row}>
      <SalaryField name="minimumSalary" label={translations.minimumSalary} mandatory />
      {!values.isInternship && (
        <SalaryField
          className={styles.rightField}
          name="maximumSalary"
          label={translations.maximumSalary}
        />
      )}
    </div>
    <div className={styles.row}>
      <PositiveNumberField name="hoursPerDay" label={translations.hoursPerDay} mandatory />
      <CheckboxInput
        checked={values.isInternship}
        className={classNames(styles.isInternship, styles.rightField)}
        label={translations.isInternship}
        name="isInternship"
      />
    </div>
    <TextField name="description" label={translations.description} mandatory withoutMargin />
  </FormSection>
);
