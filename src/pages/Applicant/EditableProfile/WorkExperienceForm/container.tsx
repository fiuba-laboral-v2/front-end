import React, { Fragment, FunctionComponent } from "react";
import { SectionsFormSection, ITranslations, ISectionsForm } from "../SectionsFormSection";
import { useTranslations } from "$hooks";

export const WorkExperienceFormContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("workExperienceForm");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};
