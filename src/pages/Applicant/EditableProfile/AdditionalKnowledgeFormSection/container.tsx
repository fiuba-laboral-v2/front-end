import React, { Fragment, FunctionComponent } from "react";
import { SectionsFormSection, ITranslations, ISectionsFormSection } from "../SectionsFormSection";
import { useTranslations } from "$hooks";

const AdditionalKnowledgeFormSectionContainer: FunctionComponent<ISectionsFormSection> = props => {
  const translations = useTranslations<ITranslations>("additionalKnowledgeFormSection");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};

export { AdditionalKnowledgeFormSectionContainer };
