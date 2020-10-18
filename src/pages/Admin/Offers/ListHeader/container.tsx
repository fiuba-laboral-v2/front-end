import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminOfferListHeader");
  return <>{translations && <ListHeader translations={translations} />}</>;
};

export interface ITranslations {
  companyName: string;
  title: string;
  hoursPerDay: string;
  salary: string;
  careers: string;
  approvalStatus: string;
  updatedAt: string;
}
