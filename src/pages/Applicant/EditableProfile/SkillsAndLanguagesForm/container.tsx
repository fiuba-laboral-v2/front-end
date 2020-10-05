import React, { Fragment, FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { SkillsAndLanguagesForm } from "./component";
import { ITranslations, IContainer } from "./interfaces";

export const SkillsAndLanguagesFormContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("skillsAndLanguagesForm");
  if (!translations) return <Fragment />;

  return <SkillsAndLanguagesForm translations={translations} {...props} />;
};
