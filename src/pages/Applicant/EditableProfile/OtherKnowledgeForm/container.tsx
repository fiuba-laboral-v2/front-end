import React, { Fragment, FunctionComponent } from "react";
import { SectionsForm, ITranslations, ISectionsForm } from "../SectionsForm";
import { useTranslations } from "$hooks";

export const OtherKnowledgeFormContainer: FunctionComponent<ISectionsForm> = props => {
  const translations = useTranslations<ITranslations>("otherKnowledgeForm");
  if (!translations) return <Fragment />;

  return <SectionsForm translations={translations} {...props} />;
};
