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
    creditsLabel
  }
) => (
  <div className={styles.fieldsContainer}>
    <Selector
      name={`careers.${index}.code`}
      options={options.map(({ code, description }) => ({ value: code, label: description }))}
      label={careerLabel}
      className={styles.career}
      validate={FormikValidator({ mandatory: true })}
    />
    <TextInput
      name={`careers[${index}].creditsCount`}
      label={creditsLabel}
      type="number"
      inputProps={{ min: 0 }}
      className={styles.credits}
    />
  </div>
);
