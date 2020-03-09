import React, { FunctionComponent } from "react";
import TextInput from "$components/TextInput";
import Selector from "$components/Selector";

import styles from "./styles.module.scss";

interface ICareerSelectorProps {
  index: number;
  career: any;
  options: any;
  arrayHelpers: any;
  creditsLabel: string;
}

const CareerSelector: FunctionComponent<ICareerSelectorProps> = ({
  index,
  career,
  options,
  arrayHelpers,
  creditsLabel
}) => (
  <div className={styles.careerSelector} key={index}>
    <div className={styles.selectorContainer}>
      <Selector name={`careers.${index}.code`} options={options} />
    </div>
    <TextInput
      id={`careers[${index}].creditsCount`}
      label={creditsLabel}
      name={`careers.${index}.creditsCount`}
      type="number"
      otherProps={{min: 0}}
      placeholder={`${career.creditsCount}`}
      small
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
