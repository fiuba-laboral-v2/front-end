import React, { Fragment, FunctionComponent } from "react";
import { SectionsFormSection, ITranslations, ISectionsForm } from "../SectionsFormSection";
import { useTranslations } from "$hooks";

export const WorkExperienceFormSectionContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("workExperienceFormSection");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};
