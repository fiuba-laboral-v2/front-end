import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { AdminFeaturesFormSection } from "./component";
import { ITranslations, IContainerProps } from "./interfaces";

export const AdminFeaturesFormSectionContainer: FunctionComponent<IContainerProps> = props => {
  const translations = useTranslations<ITranslations>("adminFeaturesFormSection");
  return <AdminFeaturesFormSection {...props} translations={translations} />;
};
