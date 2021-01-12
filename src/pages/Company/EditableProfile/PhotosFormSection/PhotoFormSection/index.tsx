import React, { FunctionComponent, RefObject, useEffect, Fragment } from "react";
import styles from "./styles.module.scss";
import { UrlField } from "$components/Fields/UrlField";

export const PhotoFormSection: FunctionComponent<IPhotoFormSectionProps> = ({
  index,
  autofocusInputRef,
  urlFieldTitle
}) => {
  useEffect(() => autofocusInputRef?.current?.focus(), [autofocusInputRef]);
  if (!urlFieldTitle) return <Fragment />;

  return (
    <div className={styles.link}>
      <UrlField
        mandatory
        name={`photos.${index}`}
        label={urlFieldTitle}
        inputRef={autofocusInputRef}
        withoutMargin
      />
    </div>
  );
};

interface IPhotoFormSectionProps {
  index: number;
  autofocusInputRef?: RefObject<HTMLInputElement>;
  urlFieldTitle?: string;
}
