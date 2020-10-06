import React, { Fragment, FunctionComponent } from "react";
import { PersonalInformationFormSection } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const PersonalInformationFormSectionContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("personalInformationEditableFormSection");
  if (!translations) return <Fragment />;

  return <PersonalInformationFormSection translations={translations} {...props} />;
};
