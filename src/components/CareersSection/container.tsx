import React, { FunctionComponent } from "react";
import { ICareersContainerProps, ICareerTranslations } from "./interface";
import { CareersSection } from "./component";
import { useTranslations } from "$hooks";

export const CareersSectionContainer: FunctionComponent<ICareersContainerProps> = ({
  careers,
  className
}) => {
  const translations = useTranslations<ICareerTranslations>("careersSection");

  return (
    <>
      {translations && (
        <CareersSection className={className} careers={careers} translations={translations} />
      )}
    </>
  );
};
