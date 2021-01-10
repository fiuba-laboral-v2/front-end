import React, { FunctionComponent } from "react";
import { FormSet } from "$components/FormSet";
import { IPhotosFormSectionProps } from "./interfaces";
import { PhotoFormSection } from "./PhotoFormSection";
import { FormSection } from "$components/FormSection";

export const PhotosFormSection: FunctionComponent<IPhotosFormSectionProps> = ({
  photos,
  className
}) => (
  <FormSection className={className}>
    <FormSet
      title={"translations.links"}
      name="photos"
      values={photos || []}
      getValueKey={() => undefined}
      defaultValue=""
      fields={(_, index, autofocusInputRef) => (
        <PhotoFormSection index={index} autofocusInputRef={autofocusInputRef} />
      )}
    />
  </FormSection>
);
