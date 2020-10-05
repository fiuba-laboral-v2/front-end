import React, { Fragment, FunctionComponent } from "react";
import { LinksFormSection } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const LinksFormSectionContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("linksFormSection");
  if (!translations) return <Fragment />;

  return <LinksFormSection translations={translations} {...props} />;
};
