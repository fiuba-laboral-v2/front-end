import React, { FunctionComponent } from "react";
import { FormSet } from "$components/FormSet";
import { IPhotosFormSectionProps } from "./interfaces";
import { PhotoFormSection } from "./PhotoFormSection";
import { FormSection } from "$components/FormSection";
import styles from "./styles.module.scss";

export const PhotosFormSection: FunctionComponent<IPhotosFormSectionProps> = ({
  photos,
  className,
  translations
}) => (
  <FormSection
    className={className}
    title={translations?.sectionTitle}
    subtitle={
      <>
        <p>{translations?.sectionSubtitle}</p>
        <a href="https://postimages.org" target="_blank" rel="noopener noreferrer">
          {translations?.upload}
        </a>
        <span>{translations?.thenCopy}</span>
      </>
    }
  >
    <FormSet
      title={translations?.addPhoto}
      titleClassName={styles.formSetTitle}
      name="photos"
      values={photos || []}
      getValueKey={() => undefined}
      defaultValue=""
      fields={(_, index, autofocusInputRef) => (
        <PhotoFormSection
          index={index}
          autofocusInputRef={autofocusInputRef}
          urlFieldTitle={translations?.urlFieldTitle}
        />
      )}
    />
  </FormSection>
);
