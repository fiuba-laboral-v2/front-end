import React, { Fragment, FunctionComponent } from "react";
import { RejectButton } from "./component";
import { IContainer, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";

export const RejectButtonContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("adminActions");
  if (!translations) return <Fragment /> ;
  return <RejectButton {...props} translations={translations}/>;
};
