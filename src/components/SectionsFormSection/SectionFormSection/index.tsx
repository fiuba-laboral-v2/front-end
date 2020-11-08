import React, { FunctionComponent, RefObject, useEffect } from "react";
import styles from "./styles.module.scss";
import { Field } from "../../Fields/Field";
import { ITranslations } from "../component";

export const SectionFormSection: FunctionComponent<ISectionFormSection> = ({
  name,
  index,
  translations,
  autofocusInputRef
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);

  return (
    <div className={styles.section}>
      <Field
        mandatory
        name={`${name}.${index}.title`}
        label={translations.sectionTitle}
        inputRef={autofocusInputRef}
      />
      <Field
        mandatory
        name={`${name}.${index}.text`}
        label={translations.sectionContent}
        multiline
      />
    </div>
  );
};

interface ISectionFormSection {
  name: string;
  index: number;
  translations: ITranslations;
  autofocusInputRef?: RefObject<HTMLInputElement>;
}
