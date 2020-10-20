import React, { FunctionComponent } from "react";

import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

import { FormSection } from "$components/FormSection";
import { Field } from "$components/Fields";
import { NumberInput } from "$components/NumberInput";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const MainInformationFormSection: FunctionComponent<IComponentProps> = ({
  className,
  translations
}) => (
  <FormSection className={className}>
    <Field name="title" label={translations.offerTitle} mandatory />
    <div className={styles.secondRow}>
      <NumberInput
        className={styles.minimumSalary}
        name="minimumSalary"
        label={translations.minimumSalary}
        validate={FormikValidator({
          validator: validateIntegerInRange({ min: { value: 0, include: false } }),
          mandatory: true
        })}
      />
      <NumberInput
        name="maximumSalary"
        label={translations.maximumSalary}
        validate={FormikValidator({
          validator: validateIntegerInRange({ min: { value: 0, include: false } }),
          mandatory: true
        })}
      />
    </div>
    <Field name="description" label={translations.description} mandatory multiline withoutMargin />
  </FormSection>
);
