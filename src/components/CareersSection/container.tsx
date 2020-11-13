import React, { FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interfaces";
import { CareersSection } from "./component";
import { useTranslations } from "$hooks";

export const CareersSectionContainer: FunctionComponent<ICareersContainerProps> = props => {
  const translations = useTranslations<ICareerTranslations>("careersSection");

  return <>{translations && <CareersSection translations={translations} {...props} />}</>;
};
