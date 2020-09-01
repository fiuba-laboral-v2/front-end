import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { TargetApplicantTypeSelector } from "./component";
import { IContainerProps, ITranslations } from "./interfaces";

export const TargetApplicantTypeSelectorContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("targetApplicantTypeSelector");
  if (!translations) return <Fragment/>;
  return <TargetApplicantTypeSelector translations={translations} {...props} />;
};
