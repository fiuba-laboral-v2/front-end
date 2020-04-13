import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";
import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

export const CareerSelector: FunctionComponent<ICareerSelectorProps> = (
  {
    index,
    options,
    careerLabel,
    creditsLabel,
    value
  }
) => (
  <div className={styles.fieldsContainer}>
    <Selector
      name={`careers.${index}.code`}
      options={options}
      label={careerLabel}
      className={styles.career}
      validate={FormikValidator({ mandatory: true })}
      getOptionLabel={option => option.description}
      getOptionValue={option => option.code}
      initialValue={value?.code}
    />
    <TextInput
      name={`careers.${index}.creditsCount`}
      label={creditsLabel}
      type="number"
      fast={false}
      validate={FormikValidator({
        validator: validateIntegerInRange({
          min: {
            value: 0,
            include: true
          },
          ...(value.code && {
            max: {
              value: options.find(career => career.code === value.code)!.credits,
              include: true
            }
          })
        }),
        mandatory: true
      })}
      className={styles.credits}
    />
  </div>
);
