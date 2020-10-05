import React, { Fragment, FunctionComponent } from "react";
import { SectionsForm } from "./component";
import { useTranslations } from "$hooks";
import { ITranslations, IContainer } from "./interfaces";

export const SectionsFormContainer: FunctionComponent<IContainer> = props => {
  const translations = useTranslations<ITranslations>("sectionsForm");
  if (!translations) return <Fragment />;

  return <SectionsForm translations={translations} {...props} />;
};
