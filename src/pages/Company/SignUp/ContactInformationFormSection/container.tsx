import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { ContactInformationFormSection } from "./component";

import { ITranslations, IContainerProps } from "./interfaces";

export const ContactInformationFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("contactInformationFormSection");
  if (!translations) return <Fragment />;

  return <ContactInformationFormSection translations={translations} {...props} />;
};
