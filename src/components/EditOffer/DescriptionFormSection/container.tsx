import React, { Fragment, FunctionComponent } from "react";

import { useTranslations } from "$hooks";

import {
  ISectionsFormSection,
  ITranslations,
  SectionsFormSection
} from "$components/SectionsFormSection";

export const DescriptionFormSectionContainer: FunctionComponent<ISectionsFormSection> = props => {
  const translations = useTranslations<ITranslations>("descriptionFormSection");
  if (!translations) return <Fragment />;

  return <SectionsFormSection translations={translations} {...props} />;
};
