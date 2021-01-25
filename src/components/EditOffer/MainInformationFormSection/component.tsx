import React, { FunctionComponent } from "react";
import { FormSection } from "$components/FormSection";
import { SalaryField, TextField, HoursPerDayField } from "$components/Fields";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";
import { CheckboxInput } from "../../CheckboxInput";
import classNames from "classnames";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations,
  autoFocus,
  values,
  company
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
      <HoursPerDayField name="hoursPerDay" label={translations.hoursPerDay} mandatory />
      {(company?.hasAnInternshipAgreement || values.isInternship) && (
        <CheckboxInput
          checked={values.isInternship}
          className={classNames(styles.isInternship, styles.rightField)}
          label={translations.isInternship}
          name="isInternship"
          labelPosition="start"
        />
      )}
    </div>
    <TextField name="description" label={translations.description} mandatory withoutMargin />
  </FormSection>
);
