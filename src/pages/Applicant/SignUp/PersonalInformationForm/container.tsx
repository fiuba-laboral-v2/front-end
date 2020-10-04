import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { PersonalInformationForm } from "./component";
import { ITranslations } from "./interfaces";

export const PersonalInformationFormContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("personalInformationForm");
  if (!translations) return <Fragment/>;

  return <PersonalInformationForm translations={translations}/>;
};
