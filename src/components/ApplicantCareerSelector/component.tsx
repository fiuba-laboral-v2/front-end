import React, { FunctionComponent, useEffect } from "react";
import { SearchSelector } from "$components/SearchSelector";
import { SelectField, PositiveIntegerField } from "$components/Fields";
import { CheckboxInput } from "$components/CheckboxInput";
import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const ApplicantCareerSelector: FunctionComponent<IComponentProps> = ({
  index,
  options,
  translations,
  value,
  autofocusInputRef,
  mandatory = true
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);

  return (
    <div className={styles.fieldsContainer}>
      <div className={styles.firstRow}>
        <SearchSelector
          mandatory={mandatory}
          name={`careers.${index}.careerCode`}
          options={options}
          label={translations.career}
          className={styles.career}
          getOptionLabel={option => option.description}
          getOptionValue={option => option.code}
          initialValue={value?.careerCode}
          autofocusInputRef={autofocusInputRef}
        />
        <CheckboxInput
          label={translations.isGraduate}
          labelPosition="start"
          checked={value.isGraduate}
          name={`careers.${index}.isGraduate`}
          className={styles.isGraduate}
        />
      </div>
      {!value.isGraduate && (
        <div className={styles.secondRow}>
          <SelectField
            mandatory
            title={translations.currentCareerYear}
            helperText={translations.withoutCBC}
            className={styles.currentCareerYear}
            fieldName={`careers.${index}.currentCareerYear`}
            options={[
              { value: 1, label: translations.firstYear },
              { value: 2, label: translations.secondYear },
              { value: 3, label: translations.thirdYear },
              { value: 4, label: translations.fourthYear },
              { value: 5, label: translations.fifthYear }
            ]}
          />
          <PositiveIntegerField
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
};
