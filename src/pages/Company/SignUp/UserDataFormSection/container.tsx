import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";

import { UserDataFormSection } from "./component";
import { ITranslations, IContainerProps } from "./interfaces";

export const UserDataFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("companyUserDataFormSection");
  if (!translations) return <Fragment />;

  return <UserDataFormSection translations={translations} {...props} />;
};
