import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SkillsAndLanguagesFormSection } from "./component";
import { ITranslations, IContainer } from "./interfaces";

export const SkillsAndLanguagesFormSectionContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("skillsAndLanguagesFormSection");
  if (!translations) return <Fragment />;

  return <SkillsAndLanguagesFormSection translations={translations} {...props} />;
};
