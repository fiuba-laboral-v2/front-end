import React, { Fragment, FunctionComponent } from "react";
import { SectionsForm, ITranslations, ISectionsForm } from "../SectionsForm";
import { useTranslations } from "$hooks";

export const WorkExperienceFormContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("workExperienceForm");
  if (!translations) return <Fragment />;

  return <SectionsForm translations={translations} {...props} />;
};
