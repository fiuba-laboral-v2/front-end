import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminOfferListHeader");
  return (
    <>
      {translations && <ListHeader translations={translations} />}
    </>
  );
};

export interface ITranslations {
  companyName: string;
  title: string;
  targetApplicantType: string;
  hoursPerDay: string;
  salary: string;
  careers: string;
  graduadosApprovalStatus: string;
  extensionApprovalStatus: string;
  updatedAt: string;
}
