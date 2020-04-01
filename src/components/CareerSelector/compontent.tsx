import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";

import styles from "./styles.module.scss";
import { ICareerSelectorProps } from "./interface";
import { FormSection } from "../FormSection";
import { RemoveButton } from "../RemoveButton";
import { FormikValidator } from "../../FormikValidator";

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
    <div className={styles.fieldsContainer}>
      <Selector
      name={`careers.${index}.code`}
      options={careers.map(({ code, description }) => ({ value: code, label: description }))}
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
    /></div>
    <RemoveButton
      className={styles.remove}
      onClick={() => arrayHelpers.remove(index)}
    />
  </FormSection>
);
