import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { MainInformationFormSection } from "./component";

import { IContainerProps, ITranslations } from "./interfaces";

export const MainInformationFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("mainInformationFormSection");
  if (!translations) return <Fragment />;

  return <MainInformationFormSection {...props} translations={translations} />;
};
