import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { ContactFormSection } from "./component";

import { ITranslations, IContainerProps } from "./interfaces";

export const ContactFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("contactFormSection");
  if (!translations) return <Fragment />;

  return <ContactFormSection translations={translations} {...props} />;
};
