import React, { Fragment, FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import { RecipientsFormSection } from "./component";

import { ITranslations, IContainerProps } from "./interfaces";

export const RecipientsFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("recipientsFormSection");
  if (!translations) return <Fragment />;

  return <RecipientsFormSection {...props} translations={translations} />;
};
