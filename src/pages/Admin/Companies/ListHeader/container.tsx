import React, { FunctionComponent } from "react";
import { useTranslations } from "$hooks";
import { ListHeader } from "./component";

export const ListHeaderContainer: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("adminCompanyListHeader");
  return (
    <>
      {translations && <ListHeader translations={translations} />}
    </>
  );
};

export interface ITranslations {
  companyName: string;
  businessName: string;
  cuit: string;
  updatedAt: string;
  state: string;
}
