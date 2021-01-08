import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminJobApplicationsListHeader");
  return <>{translations && <ListHeader translations={translations} />}</>;
};

export interface ITranslations {
  companyName: string;
  applicantName: string;
  approvalStatus: string;
  updatedAt: string;
  actions: string;
}
