import React, { FunctionComponent } from "react";
import { PhotosFormSection } from "./component";
import { IPhotosFormSectionContainerProps, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks";

export const PhotosFormSectionContainer: FunctionComponent<IPhotosFormSectionContainerProps> = props => {
  const translations = useTranslations<ITranslations>("photosFormSection");
  return <PhotosFormSection {...props} translations={translations} />;
};
