import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";

export const CareerSelector: FunctionComponent<ICareerSelectorProps> = (
  {
    index,
    career,
    careers,
    arrayHelpers,
    creditsLabel
  }
) => (
  <div className={styles.careerSelector}>
    <div className={styles.selectorContainer}>
      <Selector
        name={`careers.${index}.code`}
        options={careers.map(({ code, description }) => ({ value: code, label: description }))}
        label={career}
      />
    </div>
    <TextInput
      name={`careers[${index}].creditsCount`}
      label={creditsLabel}
      type="number"
      inputProps={{ min: 0 }}
    />
    <div className={styles.buttonsContainer}>
      <button
        className={styles.helperButton}
        type="button"
        onClick={() => arrayHelpers.remove(index)}
      >
        -
      </button>
      <button
        className={styles.helperButton}
        type="button"
        onClick={() => arrayHelpers.insert(index + 1, "")}
      >
        +
      </button>
    </div>
  </div>
);
