import React, { FunctionComponent } from "react";
import { PhotosFormSection } from "./component";
import { IPhotosFormSectionProps } from "./interfaces";

export const PhotosFormSectionContainer: FunctionComponent<IPhotosFormSectionProps> = props => {
  return <PhotosFormSection {...props} />;
};
