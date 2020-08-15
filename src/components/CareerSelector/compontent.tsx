import React, { FunctionComponent } from "react";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";
import { FormikValidator } from "$models/FormikValidator";

export const CareerSelector: FunctionComponent<ICareerSelectorProps> = (
  {
    index,
    options,
    careerLabel,
    value
  }
) => (
  <div className={styles.fieldsContainer}>
    <Selector
      name={`careers.${index}.careerCode`}
      options={options}
      label={careerLabel}
      className={styles.career}
      validate={FormikValidator({ mandatory: true })}
      getOptionLabel={option => option.description}
      getOptionValue={option => option.code}
      initialValue={value?.careerCode}
    />
  </div>
);
