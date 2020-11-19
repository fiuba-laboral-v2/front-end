import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks/queries";
import { SharedStatusLabel } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const SharedStatusLabelContainer: FunctionComponent<IContainerProps> = ({
  status,
  ...props
}) => {
  const translations = useTranslations<ITranslations>("statusLabel");
  if (!translations || !status) return <Fragment />;

  return <SharedStatusLabel translations={translations} status={status} {...props} />;
};
