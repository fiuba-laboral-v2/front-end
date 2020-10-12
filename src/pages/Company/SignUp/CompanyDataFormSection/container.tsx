import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { CompanyDataFormSection } from "./component";
import { ITranslations, IContainerProps } from "./interfaces";

export const CompanyDataFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("companyDataFormSection");
  if (!translations) return <Fragment />;

  return <CompanyDataFormSection translations={translations} {...props} />;
};
