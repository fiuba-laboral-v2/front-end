import React, { FunctionComponent, RefObject, useEffect } from "react";
import styles from "./styles.module.scss";
import { UrlField } from "$components/Fields/UrlField";

export const PhotoFormSection: FunctionComponent<IPhotoFormSectionProps> = ({
  index,
  autofocusInputRef
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);

  return (
    <div className={styles.link}>
      <UrlField
        mandatory
        name={`photos.${index}`}
        label={"asdadsadsa"}
        inputRef={autofocusInputRef}
        withoutMargin
      />
    </div>
  );
};

interface IPhotoFormSectionProps {
  index: number;
  autofocusInputRef?: RefObject<HTMLInputElement>;
}
