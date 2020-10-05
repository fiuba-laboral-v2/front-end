import React, { Fragment, FunctionComponent } from "react";
import { PersonalInformationForm } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const PersonalInformationFormContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("personalInformationEditableForm");
  if (!translations) return <Fragment />;

  return <PersonalInformationForm translations={translations} {...props} />;
};
