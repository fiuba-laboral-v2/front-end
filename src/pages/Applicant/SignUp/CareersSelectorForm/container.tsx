import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { CareersSelectorForm } from "./component";
import { ITranslations, IContainer } from "./interfaces";

export const CareersSelectorFormContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("careersSelectorForm");
  if (!translations) return <Fragment />;

  return <CareersSelectorForm {...props} translations={translations}/>;
};
