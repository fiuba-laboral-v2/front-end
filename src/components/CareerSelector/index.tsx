import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import { Selector } from "$components/Selector";
import { ArrayHelpers } from "formik";

import styles from "./styles.module.scss";
import { ISelectorOption } from "../Selector/interface";

interface ICareerSelectorProps {
  index: number;
  creditsCount: number;
  options: ISelectorOption[];
  arrayHelpers: ArrayHelpers;
  creditsLabel: string;
}

const CareerSelector: FunctionComponent<ICareerSelectorProps> = ({
  index,
  creditsCount,
  options,
  arrayHelpers,
  creditsLabel
}) => (
    <div className={styles.careerSelector}>
      <div className={styles.selectorContainer}>
        <Selector name={`careers.${index}.code`} options={options} />
      </div>
      <TextInput
        name={`careers[${index}].creditsCount`}
        label={creditsLabel}
        type="number"
        min={0}
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


export default CareerSelector;
