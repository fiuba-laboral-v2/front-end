import React, { Fragment, FunctionComponent } from "react";
import { SectionsFormSection, ITranslations, ISectionsFormSection } from "../SectionsFormSection";
import { useTranslations } from "$hooks";

const WorkExperienceFormSectionContainer: FunctionComponent<ISectionsFormSection> = props => {
  const translations = useTranslations<ITranslations>("workExperienceFormSection");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};

export { WorkExperienceFormSectionContainer };
