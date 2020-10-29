import React, { FunctionComponent } from "react";
import { SearchSelector } from "$components/SearchSelector";
import { PositiveNumberInput } from "$components/NumberInput/PositiveNumberInput";
import { CheckboxInput } from "$components/CheckboxInput";
import { IComponentProps } from "./interface";
import { FormikValidator } from "$models/FormikValidator";
import styles from "./styles.module.scss";

export const ApplicantCareerSelector: FunctionComponent<IComponentProps> = ({
  index,
  options,
  translations,
  value,
  mandatory = true
}) => (
  <div className={styles.fieldsContainer}>
    <div className={styles.firstRow}>
      <SearchSelector
        mandatory={mandatory}
        name={`careers.${index}.careerCode`}
        options={options}
        label={translations.career}
        className={styles.career}
        validate={FormikValidator({ mandatory: true })}
        getOptionLabel={option => option.description}
        getOptionValue={option => option.code}
        initialValue={value?.careerCode}
      />
      <div className={styles.isGraduate}>
        <p className={styles.isGraduateLabel}>{translations.isGraduate}</p>
        <CheckboxInput checked={value.isGraduate} name={`careers.${index}.isGraduate`} />
      </div>
    </div>
    {!value.isGraduate && (
      <div className={styles.secondRow}>
        <PositiveNumberInput
          className={styles.currentCareerYear}
          name={`careers.${index}.currentCareerYear`}
          label={translations.currentCareerYear}
          helperText={translations.withoutCBC}
          mandatory
          withoutMargin
        />
        <PositiveNumberInput
          className={styles.approvedSubjectCount}
          name={`careers.${index}.approvedSubjectCount`}
          label={translations.approvedSubjectCount}
          helperText={translations.withoutCBC}
          mandatory
          withoutMargin
        />
      </div>
    )}
  </div>
);
