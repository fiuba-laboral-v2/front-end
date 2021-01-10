import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { FiltersButton } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const FiltersButtonContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("filtersButton");
  return <FiltersButton {...props} translations={translations} />;
};
