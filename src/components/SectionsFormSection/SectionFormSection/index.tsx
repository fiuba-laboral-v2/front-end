import React, { FunctionComponent, RefObject, useEffect } from "react";
import styles from "./styles.module.scss";
import { ITranslations } from "../component";
import { TextField } from "$components/Fields";

export const SectionFormSection: FunctionComponent<ISectionFormSection> = ({
  name,
  index,
  translations,
  autofocusInputRef
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);

  return (
    <div className={styles.section}>
      <TextField
        mandatory
        name={`${name}.${index}.title`}
        label={translations.sectionTitle}
        inputRef={autofocusInputRef}
      />
      <TextField mandatory name={`${name}.${index}.text`} label={translations.sectionContent} />
    </div>
  );
};

interface ISectionFormSection {
  name: string;
  index: number;
  translations: ITranslations;
  autofocusInputRef?: RefObject<HTMLInputElement>;
}
