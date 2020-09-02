import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { StatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const StatusLabelContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("statusLabel");
  if (!translations) return <Fragment />;

  return <StatusLabel translations={translations} {...props} />;
};
