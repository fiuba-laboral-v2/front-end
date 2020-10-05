import React, { Fragment, FunctionComponent } from "react";
import { LinksForm } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const LinksFormContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("linksForm");
  if (!translations) return <Fragment />;

  return <LinksForm translations={translations} {...props} />;
};
