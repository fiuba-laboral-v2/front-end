import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";
import { FormikValidator } from "$src/FormikValidator";

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
      inputProps={{ min: 0 }}
      className={styles.credits}
    />
  </div>
);
