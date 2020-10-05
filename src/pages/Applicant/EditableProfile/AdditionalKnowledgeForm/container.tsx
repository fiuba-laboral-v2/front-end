import React, { Fragment, FunctionComponent } from "react";
import { SectionsForm, ITranslations, ISectionsForm } from "../SectionsForm";
import { useTranslations } from "$hooks";

export const AdditionalKnowledgeFormContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("additionalKnowledgeForm");
  if (!translations) return <Fragment />;

  return <SectionsForm translations={translations} {...props} />;
};
