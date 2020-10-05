import React, { Fragment, FunctionComponent } from "react";
import { SectionsFormSection, ITranslations, ISectionsForm } from "../SectionsFormSection";
import { useTranslations } from "$hooks";

export const AdditionalKnowledgeFormContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("additionalKnowledgeForm");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};
