import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { SharedStatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const SharedStatusLabelContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("statusLabel");
  if (!translations) return <Fragment />;

  return <SharedStatusLabel translations={translations} {...props} />;
};
