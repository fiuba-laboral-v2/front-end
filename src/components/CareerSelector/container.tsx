import React, { FunctionComponent } from "react";
import { IContainerProps, ITranslations } from "./interfaces";
import { CareerSelector } from "./component";
import { useTranslations, useCareers } from "$hooks";

export const CareerSelectorContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("careersSelector");
  const careers = useCareers();

  return <CareerSelector translations={translations} options={careers} {...props} />;
};
