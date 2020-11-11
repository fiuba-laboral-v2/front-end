import React, { FunctionComponent, RefObject, useEffect } from "react";
import styles from "./styles.module.scss";
import { UrlField } from "$components/Fields/UrlField";
import { ITranslations } from "../interfaces";
import { TextInput } from "$components/TextInput";

export const LinkFormSection: FunctionComponent<ILinkFormSectionProps> = ({
  index,
  translations,
  autofocusInputRef
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);

  return (
    <div className={styles.link}>
      <TextInput
        mandatory
        name={`links.${index}.name`}
        label={translations.linkTitle}
        inputRef={autofocusInputRef}
      />
      <UrlField
        mandatory
        name={`links.${index}.url`}
        label={translations.link}
        type="url"
        withoutMargin
      />
    </div>
  );
};

interface ILinkFormSectionProps {
  index: number;
  translations: ITranslations;
  autofocusInputRef?: RefObject<HTMLInputElement>;
}
