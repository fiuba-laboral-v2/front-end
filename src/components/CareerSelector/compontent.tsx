import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";
import { FormSection } from "../FormSection";

export const CareerSelector: FunctionComponent<ICareerSelectorProps> = (
  {
    index,
    careers,
    arrayHelpers,
    careerLabel,
    creditsLabel
  }
) => (
  <FormSection>
    <Selector
      name={`careers.${index}.code`}
      options={careers.map(({ code, description }) => ({ value: code, label: description }))}
      label={careerLabel}
      className={styles.career}
    />
    <TextInput
      name={`careers[${index}].creditsCount`}
      label={creditsLabel}
      type="number"
      inputProps={{ min: 0 }}
      className={styles.credits}
    />
    <button
      type="button"
      onClick={() => arrayHelpers.remove(index)}
    >
      -
    </button>
  </FormSection>
);
