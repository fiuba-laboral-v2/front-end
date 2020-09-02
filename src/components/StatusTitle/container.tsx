import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { StatusTitle } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const StatusTitleContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("statusLabel");
  if (!translations) return <Fragment />;

  return <StatusTitle translations={translations} {...props} />;
};
