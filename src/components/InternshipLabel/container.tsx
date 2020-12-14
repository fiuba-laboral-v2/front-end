import React, { FunctionComponent, Fragment } from "react";
import { InternshipLabel } from "./component";
import { IInternshipLabelContainerProps, ITranslations } from "./interfaces";
import { useTranslations } from "$hooks";

export const InternshipLabelContainer: FunctionComponent<IInternshipLabelContainerProps> = props => {
  const translations = useTranslations<ITranslations>("internshipLabel");
  if (!translations) return <Fragment />;
  return <InternshipLabel text={translations.text} {...props} />;
};
