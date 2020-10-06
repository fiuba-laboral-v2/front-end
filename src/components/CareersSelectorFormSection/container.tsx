import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CareersSelectorFormSection } from "./component";
import { ITranslations, IContainer } from "./interfaces";

export const CareersSelectorFormSectionContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("careersSelectorFormSection");
  if (!translations) return <Fragment />;

  return <CareersSelectorFormSection {...props} translations={translations}/>;
};
